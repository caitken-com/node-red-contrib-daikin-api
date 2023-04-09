const DaikinConfig =  		require('./DaikinConfig');
const DaikinUserConfig = 	require('./DaikinUserConfig');
const DaikinApi = 			require('./DaikinApi');


/**
 * https://bitbucket.org/mustang51/pydaikin/src/master/
 * @description Routes and models Daikin API requests
 * @package DaikinApiNode
 * @param {Object} RED
 * @author Christopher Aitken 2022
 * @version 1.0
 */
module.exports = function(RED)
{
	function DaikinApiNode(config)
	{
		RED.nodes.createNode(this, config);

		const node = this;
		node.server = RED.nodes.getNode(config.server);
		node.user = new DaikinUserConfig({
			'auto_id': node.server.auto_id,
			'dehumidifier_id': node.server.dehumidifier_id,
			'dry_id': node.server.dry_id,
			'fan_id': node.server.fan_id,
			'cool_id': node.server.cool_id,
			'heat_id': node.server.heat_id,
		});
		node.daikin = new DaikinConfig({});
		let req = getApiFullConfig();



		/**
		 * @description Handle incoming messages
		 * @memberof DaikinApiNode
		 * @param {object} msg [msg.topic => (string), msg.payload => (json)]
		 * @return {void}
		 */
		node.on('input', function(msg)
		{
			let cmd = null;
			let topic = null;
			let promise;

			if (typeof msg !== 'object') msg = {};
			if (!('payload' in msg) || typeof msg.payload !== 'object') msg.payload = {};

			if ('cmd' in msg.payload) cmd = msg.payload.cmd;
			if ('topic' in msg) topic = msg.topic;

			if (!cmd && topic) cmd = topic;
			if (!cmd && !topic) return node.send(msg);

			switch (cmd)
			{
				case 'getRaw':
					promise = doRequest(msg.payload);
					promise.then((data) =>
					{
						node.send({topic: topic, payload: data});
					})
					.catch(err =>{node.warn(err);});
					break;

				case 'getRawConfig':
					promise = getApiFullConfig();
					promise.then((data) =>
					{
						node.daikin.updateFromJSON(data);
						node.send({topic: topic, payload: data});
					})
					.catch(err =>{node.warn(err);});
					break;

				case 'getControlInfo':
					promise = doRequest({endpoint: 'get_control_info', data: null});
					promise.then((data) =>
					{
						node.daikin.updateFromJSON(data);
						node.send({topic: topic, payload: DaikinApi.getControlInfo(node.daikin, node.user)});
					})
					.catch(err =>{node.warn(err);});
					break;

				case 'setControlInfo':
					promise = doRequest({endpoint: 'set_control_info', data: DaikinApi.setControlInfo(msg.payload, node.daikin, node.user)});
					promise.then((data) =>
					{
						node.send({topic: topic, payload: data});
					})
					.catch(err =>{node.warn(err);});
					break;

				case 'getSensorInfo':
					promise = doRequest({endpoint: 'get_sensor_info', data: null});
					promise.then((data) =>
					{
						node.daikin.updateFromJSON(data);
						node.send({topic: topic, payload: DaikinApi.getSensorInfo(node.daikin, node.user)});
					})
					.catch(err =>{node.warn(err);});
					break;

				default:
					node.send(msg);
					break;
			}
		});



		/**
		 * @description Request raw API data
		 * @param {object} payload {endpoint: string, payload: json}
		 * @return {object} json data
		 */
		function doRequest(payload)
		{
			let promise = new Promise((resolve, reject) =>
			{
				if (typeof payload !== 'object') return reject('No data given');
				if (!('endpoint' in payload)) return reject('No endpoint specified');
				if (!('data' in payload)) payload.data = null;

				node.status({fill:'grey', shape:'ring', text:'Connecting...'});
				let req = node.server.request(payload.endpoint, payload.data);

				req.then((payload) =>
				{
					node.status({fill:'grey', shape:'ring', text:'Ready...'});
					setTimeout(updateStatus, 1000);
					resolve(payload);
				})
				.catch(err =>
				{
					setTimeout(updateStatus, 2000);
					reject(err);
				});
			});

			return promise;
		}



		/**
		 * @description get the full config from the Daikin device
		 * @memberof DaikinApiNode
		 * @returns {Promise<json>}
		 */
		function getApiFullConfig()
		{
			node.status({fill:'grey', shape:'ring', text:'Connecting...'});
			let promise = new Promise((resolve, reject) =>
			{
				// get_control_info
				let req = node.server.request('get_control_info', null);
				let info = {};

				// get_model_info
				req.then((payload) =>
				{
					node.status({fill:'grey', shape:'ring', text:'Syncing'});
					info = {...info, ...payload};
					return node.server.request('get_model_info', null);
				})
				// basic_info
				.then((payload) =>
				{
					node.status({fill:'grey', shape:'ring', text:'Syncing...'});
					info = {...info, ...payload};
					return node.server.request('basic_info', null);
				})
				// get_sensor_info
				.then((payload) =>
				{
					node.status({fill:'grey', shape:'ring', text:'Syncing'});
					info = {...info, ...payload};
					return node.server.request('get_sensor_info', null);
				})
				// done
				.then((payload) =>
				{
					node.status({fill:'grey', shape:'ring', text:'Ready...'});
					info = {...info, ...payload};
					setTimeout(updateStatus, 1000);
					resolve(info);
				})
				.catch(err =>
				{
					setTimeout(updateStatus, 2000);
					reject(err);
				});
			});

			return promise;
		}



		/**
		 * @description Update node status
		 * @return {void}
		 */
		function updateStatus()
		{
			let colours = {'Dehumidifier': 'green', 'Fan': 'grey', 'Heat': 'red', 'Cool': 'blue', 'Dry': 'yellow', 'Unknown': 'grey'};
			let text;

			switch (node.user.getMode(node.daikin.getMode()))
			{
				case 'Cool':
					text = `Cooling ${node.daikin.getStemp()}°C, ${node.daikin.getFrate()}`;
					break;
				case 'Heat':
					text = `Heating ${node.daikin.getStemp()}°C, ${node.daikin.getFrate()}`;
					break;
				case 'Fan':
					text = `Fan: ${node.daikin.getFrate()}`;
					break;
				case 'Dehumidifier':
					text = `Dehumidifier: ${node.daikin.getFrate()}`;
					break;
				case 'Dry':
					text = `Drying: ${node.daikin.getFrate()}`;
					break;
				default:
					text = 'Unknown';
					break;
			}

			if (!node.daikin.getPower()) text = 'Off';

			node.status({
				fill: colours[node.user.getMode(node.daikin.getMode())],
				shape: node.daikin.getPower() ? 'dot' : 'ring',
				text: text
			});
		}


		/**
		 * @description Initialize the node
		 * @memberof DaikinApiNode
		 * @param {Object} payload Json data
		 * @returns {void}
		 */
		req.then((payload) =>
		{
			node.daikin.updateFromJSON(payload);
			node.send({payload: DaikinApi.getControlInfo(node.daikin, node.user)});
			delete(req);
		})
		.catch(err =>{node.warn(err);});
	}

	RED.nodes.registerType('daikin-api', DaikinApiNode);
}
