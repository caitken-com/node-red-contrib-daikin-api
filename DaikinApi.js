/**
 * @description Utility class to convert DaikinConfig to nice names and values
 * @package DaikinApiNode
 * @author Christopher Aitken
 * @version 1 2022
 */
class DaikinApi
{
	/**
	 * @description Generates outgoing payload
	 * @static
	 * @memberof DaikinApi
	 * @param {DaikinConfig} daikin DaikinConfig instance
	 * @param {DaikinUserConfig} user DaikinUserConfig instance
	 * @returns {Object} JSON object
	 */
	static getControlInfo(daikin, user)
	{
		return {
			'Power': daikin.getPower(),
			'Mode': user.getMode(daikin.getMode()),
			'TargetTemperature': daikin.getEnTempSetting() ? daikin.getStemp() : 'Disabled',
			'FanRate': daikin.getEnfrate() ? daikin.getFrate() : 'Disabled',
			'FanDirection': daikin.getEnfdir() ? daikin.getFdir() : 'Disabled',
		};
	}


	/**
	 * @description Generates request payload
	 * @static
	 * @memberof DaikinApi
	 * @param {DaikinConfig} daikin DaikinConfig instance
	 * @param {DaikinUserConfig} user DaikinUserConfig instance
	 * @returns {Object} JSON object
	 */
	static setControlInfo(data, daikin, user)
	{
		if (typeof data !== 'object') data = {};

		// Minimum payload
		let payload = {
			'pow':  daikin.config.pow,
			'mode': daikin.config.mode,
			'stemp': daikin.config.stemp,
			'f_rate': daikin.config.f_rate,
			'f_dir': daikin.config.f_dir,
		};

		if ('Mode' in data)
		{
			daikin.setMode(user.setMode(data.Mode));
			payload.mode = daikin.getMode();
		}

		if ('Power' in data)
		{
			daikin.setPower(data.Power);
			payload.pow = daikin.config.pow;
		}

		if ('TargetTemperature' in data)
		{
			daikin.setStemp(data.TargetTemperature);
			payload.stemp = daikin.config.stemp;
		}

		if ('FanRate' in data)
		{
			daikin.setFrate(data.FanRate);
			payload.f_rate = daikin.config.f_rate;
		}

		if ('FanDirection' in data)
		{
			daikin.setFdir(data.FanDirection);
			payload.f_dir = daikin.config.f_dir;
		}

		return payload;
	}


	/**
	 * @description Generates outgoing payload
	 * @static
	 * @memberof DaikinApi
	 * @param {DaikinConfig} daikin DaikinConfig instance
	 * @param {DaikinUserConfig} user DaikinUserConfig instance
	 * @returns {Object} JSON object
	 */
	static getSensorInfo(daikin, user)
	{
		return {
			'OutsideTemperature': isNaN(daikin.getOtemp()) ? 'Disabled' : daikin.getOtemp(),
			'InsideTempature': isNaN(daikin.getHtemp()) ? 'Disabled' : daikin.getHtemp(),
		};
	}


	/**
	 * @description Generates outgoing payload
	 * @static
	 * @memberof DaikinApi
	 * @param {DaikinConfig} daikin DaikinConfig instance
	 * @param {DaikinUserConfig} user DaikinUserConfig instance
	 * @returns {Object} JSON object
	 */
	static getZoneSetting(daikin, user)
	{
		let zones = daikin.getZoneNames();
		let values = daikin.getZonesOnOff();

		return {'Zones': zones, 'On': values};
	}
}

module.exports = DaikinApi;
