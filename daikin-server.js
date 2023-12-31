const http = require('http');


/**
 * @description Connects to Daikin Wifi adaptor
 * @package daikin-api
 * @param {Object} RED
 * @author Christopher Aitken
 * @version 1.0
 */
module.exports = function(RED)
{
	function DaikinServerNode(config)
	{
		RED.nodes.createNode(this, config);

		const node = this;
		node.dt = Date.now();

		node.ip = config.ip;
		node.auto_id = config.auto_id;
		node.dehumidifier_id = config.dehumidifier_id;
		node.fan_id = config.fan_id;
		node.heat_id = config.heat_id;
		node.cool_id = config.cool_id;
		node.dry_id = config.dry_id;


		/**
		 * @description Create request options
		 * @memberof DaikinServerNode
		 * @param {string} command Endpoint
		 * @param {string} payload data
		 * @returns {Object}
		 */
		node.setRequestOpts = function(command, payload)
		{
			let opts = {};
			opts.hostname = node.ip;
			opts.headers = {'Host': node.ip};

			switch (command)
			{
				case 'basic_info':
					opts.path = '/skyfi/common/basic_info';
					opts.method = 'GET';
					break;

				case 'get_remote_method':
					opts.path = '/skyfi/common/get_remote_method';
					opts.method = 'GET';
					break;

				case 'set_remote_method':
					opts.path = '/skyfi/common/set_remote_method';
					opts.method = 'POST';
					break;

				case 'get_model_info':
					opts.path = '/skyfi/aircon/get_model_info';
					opts.method = 'GET';
					break;

				case 'get_timer':
					opts.path = '/skyfi/aircon/get_timer';
					opts.method = 'GET';
					break;

				case 'set_timer':
					opts.path = '/skyfi/aircon/set_timer';
					opts.method = 'POST';
					break;

				case 'get_target':
					opts.path = '/skyfi/aircon/get_target';
					opts.method = 'GET';
					break;

				case 'set_target':
					opts.path = '/skyfi/aircon/set_target';
					opts.method = 'POST';
					break;

				case 'get_week_power':
					opts.path = '/skyfi/aircon/get_week_power';
					opts.method = 'GET';
					break;

				case 'get_year_power':
					opts.path = '/skyfi/aircon/get_year_power';
					opts.method = 'GET';
					break;

				case 'get_program':
					opts.path = '/skyfi/aircon/get_program';
					opts.method = 'GET';
					break;

				case 'set_program':
					opts.path = '/skyfi/aircon/set_program';
					opts.method = 'POST';
					break;

				case 'get_scdltimer':
					opts.path = '/skyfi/aircon/get_scdltimer';
					opts.method = 'GET';
					break;

				case 'set_scdltimer':
					opts.path = '/skyfi/aircon/get_scdltimer';
					opts.method = 'POST';
					break;

				case 'get_sensor_info':
					opts.path = '/skyfi/aircon/get_sensor_info';
					opts.method = 'GET';
					break;

				case 'set_control_info':
					opts.path = '/skyfi/aircon/set_control_info';
					opts.method = 'GET';
					break;

				case 'get_zone_setting':
					opts.path = '/skyfi/aircon/get_zone_setting';
					opts.method = 'GET';
					break;

				case 'get_control_info':
				default:
					opts.path = '/skyfi/aircon/get_control_info';
					opts.method = 'GET';
					break;
			}

			if (opts.method == 'GET' && payload)
			{
				let params = new URLSearchParams(payload).toString();
				opts.path += `?${params.toString()}`;
			}

			return opts;
		}


		/**
		 * @description Send request to wifi adaptor
		 * @memberof DaikinServerNode
		 * @param {string} ip Hostname of wifi adaptor
		 * @param {string} endpoint Daikin API endpoint
		 * @param {array} payload data
		 * @returns {Promise}
		 */
		node.request = function(endpoint, payload)
		{
			return new Promise((resolve, reject) =>
			{
				let data = '';
				let opts = node.setRequestOpts(endpoint, payload);

				// Rate limit requests
				let delay = new Promise(res =>
				{
					setTimeout(res, Date.now() - node.dt < 2000 ? 2000 : 0);
				});

				delay.then((payload) =>
				{
					node.dt = Date.now();

					let request = http.request(opts, (result) =>
					{
						result.setEncoding('utf8');

						result.on("data", (chunk) =>
						{
							data += chunk;
						});

						result.on("end", () =>
						{
							resolve(node.formatResponse(data));
						});
					});

					request.on("error", (err) =>
					{
						reject(err);
					});

					if (payload && opts.method == 'POST') request.write(payload);

					request.end();
				})
				.catch(err =>
				{
					reject(err);
				});
			});
		}


		/**
		 * @description Formats response string into json data
		 * @memberof DaikinServerNode
		 * @param {string} payload
		 * @returns {Object}
		 */
		node.formatResponse = function(payload)
		{
			// Results are comma seperated
			let data = decodeURIComponent(payload).split(',').reduce((acc, pair) =>
			{
				// Each result is `key=value`
				let [key, value] = pair.split('=');

				// Determine if value should be an array
				let vals = value.split(';');

				// Not array, return as single value
				if (vals.length == 1)
				{
					acc[key] = vals[0];
					return acc;
				}

				// Return value as array
				acc[key] = [...vals];
				return acc;
			}, {});

			return data;
		}
	}


	RED.nodes.registerType('daikin-server', DaikinServerNode);
}
