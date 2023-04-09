/**
 * @description Models a user's configuration
 * @package DaikinApiNode
 * @author Christopher Aitken 2022
 * @version 1
 */
class DaikinDaikinUserConfig
{
	auto_id = null;
	dehumidifier_id = null;
	fan_id = null;
	heat_id = null;
	cool_id = null;
	dry_id = null;


	/**
	 * @description Constructor
	 * @constructor
	 * @param {Object} data JSON object containing the user config
	 * @memberof DaikinUserConfig
	 * @returns {void}
	 */
	constructor(data)
	{
		if (typeof data !== 'object') data = {};

		this.setAutoId(('auto_id' in data) ? data.auto_id : null);
		this.setDehumidifierId(('dehumidifier_id' in data) ? data.dehumidifier_id : null);
		this.setDryId(('dry_id' in data) ? data.dry_id : null);
		this.setFanId(('fan_id' in data) ? data.fan_id : null);
		this.setCoolId(('cool_id' in data) ? data.cool_id : null);
		this.setHeatId(('heat_id' in data) ? data.heat_id : null);
	}


	getAutoId()
	{
		return this.auto_id;
	}


	/**
	 * @description Returns the id of the dehumidifier mode
	 * @memberof DaikinUserConfig
	 * @returns {number}
	 */
	getDehumidifierId()
	{

		return parseInt(this.dehumidifier_id);
	}


	/**
	 * @description Returns the id of the fan mode
	 * @memberof DaikinUserConfig
	 * @returns {number}
	 */
	getFanId()
	{
		return parseInt(this.fan_id);
	}


	/**
	 * @description Returns the id of the heat mode
	 * @memberof DaikinUserConfig
	 * @returns {number}
	 */
	getHeatId()
	{
		return parseInt(this.heat_id);
	}


	/**
	 * @description Returns the id of the cool mode
	 * @memberof DaikinUserConfig
	 * @returns {number}
	 */
	getCoolId()
	{
		return parseInt(this.cool_id);
	}


	/**
	 * @description Returns the id of the dry mode
	 * @memberof DaikinUserConfig
	 * @returns {number}
	 */
	getDryId()
	{
		return parseInt(this.dry_id);
	}


	/**
	 * @description Sets the id of the auto mode
	 * @param {string} id
	 * @memberof DaikinUserConfig
	 * @returns {void}
	 */
	setAutoId(id)
	{
		this.auto_id = parseInt(id);
	}


	/**
	 * @description Sets the id of the dehumidifier mode
	 * @param {number} id
	 * @memberof DaikinUserConfig
	 * @returns {void}
	 */
	setDehumidifierId(id)
	{
		this.dehumidifier_id = parseInt(id);
	}


	/**
	 * @description Sets the id of the fan mode
	 * @param {number} id
	 * @memberof DaikinUserConfig
	 * @returns {void}
	 */
	setFanId(id)
	{
		this.fan_id = parseInt(id);
	}


	/**
	 * @description Sets the id of the heat mode
	 * @param {number} id
	 * @memberof DaikinUserConfig
	 * @returns {void}
	 */
	setHeatId(id)
	{
		this.heat_id = parseInt(id);
	}


	/**
	 * @description Sets the id of the cool mode
	 * @param {number} id
	 * @memberof DaikinUserConfig
	 * @returns {void}
	 */
	setCoolId(id)
	{
		this.cool_id = parseInt(id);
	}


	/**
	 * @description Sets the id of the dry mode
	 * @param {number} id
	 * @memberof DaikinUserConfig
	 * @returns {void}
	 */
	setDryId(id)
	{
		this.dry_id = parseInt(id);
	}


	/**
	 * @description Sets user mode
	 * @memberof DaikinUserConfig
	 * @param {string} mode Auto|Cool|Heat|Dehumidify|Dry|Fan
	 * @returns {number}
	 */
	setMode(mode)
	{
		mode = DaikinDaikinUserConfig.toTitleCase(mode);

		switch (mode)
		{
			case 'Auto':
				return this.getAutoId();

			case 'Dehumidifier':
				return this.getDehumidifierId();

			case 'Fan':
				return this.getFanId();

			case 'Heat':
				return this.getHeatId();

			case 'Cool':
				return this.getCoolId();

			case 'Dry':
				return this.getDryId();

			default:
				return null;
		}
	}


	/**
	 * @description Returns user mode
	 * @memberof DaikinUserConfig
	 * @param {number} mode_id
	 * @returns {string} Auto|Cool|Heat|Dehumidify|Dry|Fan|Unknown
	 */
	getMode(mode_id)
	{
		switch (mode_id)
		{
			case this.getAutoId():
				return 'Auto';

			case this.getDehumidifierId():
				return 'Dehumidifier';

			case this.getFanId():
				return 'Fan';

			case this.getHeatId():
				return 'Heat'

			case this.getCoolId():
				return 'Cool';

			case this.getDryId():
				return 'Dry';

			default:
				return 'Unknown';
		}
	}


	/**
	 * @description Returns the user config as a JSON object
	 * @memberof DaikinUserConfig
	 * @returns {JSON}
	 */
	toJSON()
	{
		return {
			auto_id: this.auto_id,
			dehumidifier_id: this.dehumidifier_id,
			fan_id: this.fan_id,
			heat_id: this.heat_id,
			cool_id: this.cool_id,
			dry_id: this.dry_id,
		};
	}


	/**
	 * @description Returns a new DaikinDaikinUserConfig instance from a JSON object
	 * @memberof DaikinUserConfig
	 * @static
	 * @param {Object} options JSON object containing the user config
	 * @returns {DaikinUserConfig} Returns a new DaikinDaikinUserConfig instance
	 */
	static fromJSON(json)
	{
		return new DaikinDaikinUserConfig(json);
	}


	/**
	 * Convert given string into Title Case
	 * @param {String} str
	 * @returns {String}
	 */
	static toTitleCase(str)
	{
		return str.replace( /\w\S*/g, (txt)	=> txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase());
	};
}

module.exports = DaikinDaikinUserConfig;
