/**
 * @description Utility class to generate payloads
 * @package DaikinApiNode
 * @author Christopher Aitken
 * @version 1 2022
 */
class DaikinApi
{
	/**
	 * @description Generates human config payload
	 * @static
	 * @memberof DaikinApi
	 * @param {DaikinConfig} daikin DaikinConfig instance
	 * @param {DaikinUserConfig} user DaikinUserConfig instance
	 * @returns {Object} JSON object
	 */
	static getConfig(daikin, user)
	{
		return {
			'Power': daikin.getPower(),
			'Mode': user.getMode(daikin.getMode()),
			'TargetTemperature': daikin.getEnTempSetting() ? daikin.getStemp() : 'Disabled',
			'FanRate': daikin.getEnfrate() ? daikin.getFrate() : 'Disabled',
			'FanDirection': daikin.getEnfdir() ? daikin.getFdir() : 'Disabled',
			'OutsideTemperature': isNaN(daikin.getOtemp()) ? 'Disabled' : daikin.getOtemp(),
			'InsideTemperature': isNaN(daikin.getHtemp()) ? 'Disabled' : daikin.getHtemp(),
			'ZoneNames': daikin.getZoneNames(),
			'ZoneStates': daikin.getZoneStates(),
			'EnableZones': daikin.getEnzone(),
			'EnableLinearZones': daikin.getEnlinearzone(),
			'EnableSetZones': daikin.getEnSetZone(),
			'EnableCommonZone': daikin.getEnCommonZone(),
			'EnableAutoMode': daikin.getEnauto(),
			'EnableDryMode': daikin.getEndry(),
			'EnableQuickTimer': daikin.getEnquicktimer(),
			'EnableFanRate': daikin.getEnfrate(),
			'EnableFanRateAuto': daikin.getEnFrateAuto(),
			'EnableFanDirection': daikin.getEnfdir(),
			'EnableSpecialMode': daikin.getEnSpMode(),
			'EnableCh': daikin.getEnch(),
			'EnableHolidayMode': daikin.getEnhol(),
			'EnableCent': daikin.getEncent(),
			'EnableFilterSign': daikin.getEnfiltersign(),
			'EnableTemperatureSetting': daikin.getEnTempSetting(),
			'EnablePatrol': daikin.getEnpatrol(),
			'EnableAirSide': daikin.getEnairside(),
			'SpecialMode': daikin.getEnSpMode() ? daikin.getSpMode() : 'Disabled',
			'Model': daikin.getModel(),
			'Type': daikin.getType(),
			'Version': daikin.getVer(),
			'Revision': daikin.getRev(),
			'Name': daikin.getName(),
			'ID': daikin.getId() ? daikin.getId() : 'Disabled',
			'Errors': daikin.getErr(),
			'Location': daikin.getLocation() !== '0' ? daikin.getLocation() : 'Disabled',
			'CountryCode': daikin.getReg(),
			"Method": daikin.getMethod(),
			'SSID': daikin.getSsid(),
			'Mac': daikin.getMac(),
			'Port': daikin.getPort(),
			'AdapterKind': daikin.getAdpkind(),
			'AdaptorMode': daikin.getAdpmode(),
			'LED': daikin.getLed(),
			'AcLED': daikin.getAcled(),
			'ErrorType': daikin.getErrtype(),
			'ErrorCode': daikin.getErrcode(),
			'HolidayMode': daikin.getEnhol() ? daikin.getHoliday() : 'Disabled',
			'Operate': daikin.getOperate(),
			'LowPowerFlag': daikin.getLpwflag(),
			'SyncTime': daikin.getSynctime(),
			'NoticeIpInt': daikin.getNoticeIpInt(),
			'NoticeSyncInt': daikin.getNoticeSyncInt(),
			'BkAuto': daikin.getBkauto(),
			'Dt1': daikin.getDt1(),
			'Dt2': daikin.getDt2(),
			'FanSteps': daikin.getFratesteps(),
			'FanDirection1': daikin.getDfr1(),
			'FanDirection1': daikin.getDfr2(),
			'FanAirSide': daikin.getEnairside() ? daikin.getFairside() : 'Disabled',
			'AirSide1': daikin.getEnairside() ? daikin.getAirside1() : 'Disabled',
			'AirSide2': daikin.getEnairside() ? daikin.getAirside2() : 'Disabled',
			'FanAuto': daikin.getEnauto() ? daikin.getFauto() : 'Disabled',
			'Auto1': daikin.getEnauto() ? daikin.getAuto1() : 'Disabled',
			'Auto2': daikin.getEnauto() ? daikin.getAuto2() : 'Disabled',
			'FanDirection1': daikin.getEnfdir() ? daikin.getDfd1() : 'Disabled',
			'FanDirection2': daikin.getEnfdir() ? daikin.getDfd2() : 'Disabled',
			'FilterSign': daikin.getEnfiltersign() ? daikin.getFiltersigninfo() : 'Disabled',
			'Cent': daikin.getEncent() ? daikin.getCent() : 'Disabled',
			'NumRemotes': daikin.getRemotes(),
			'Humidity': daikin.getHumd(),
			'TargetHumidity': daikin.getShumd(),
			"CoolTemperatureMin": daikin.getCoolL(),
			'CoolTemperatureMax': daikin.getCoolH(),
			'HeatTemperatureMin': daikin.getHeatL(),
			'HeatTemperatureMax': daikin.getHeatH(),
			'SpecialModeKind': daikin.getEnSpMode() ? daikin.getSpModeKind() : 'Disabled',
			'AdvancedMode': daikin.getAdvanced(),
		}
	}


	/**
	 * @description Generates human control-info payload
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
	 * @description Generates Daikin control-info payload
	 * @static
	 * @memberof DaikinApi
	 * @param {Object} data
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
	 * @description Generates human sensor-info payload
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
			'InsideTemperature': isNaN(daikin.getHtemp()) ? 'Disabled' : daikin.getHtemp(),
		};
	}


	/**
	 * @description Generates human zone-settings payload
	 * @static
	 * @memberof DaikinApi
	 * @param {DaikinConfig} daikin DaikinConfig instance
	 * @param {DaikinUserConfig} user DaikinUserConfig instance
	 * @returns {Object} JSON object
	 */
	static getZoneSetting(daikin, user)
	{
		let zones = daikin.getZoneNames();
		let values = daikin.getZoneStates();

		return {'Zones': zones, 'On': values};
	}


	/**
	 * @description Generates Daikin zone-settings payload
	 * @static
	 * @param {Object} data
	 * @param {DaikinConfig} daikin DaikinConfig instance
	 * @param {DaikinUserConfig} user DaikinUserConfig instance
	 * @returns {Object} JSON object
	 */
	static setZoneSetting(data, daikin, user)
	{
		let payload = {
			'zone_name': daikin.getZoneNames().join(';'),
			'zone_onoff': daikin.getZoneStates().join(';'),
		};
	}
}

module.exports = DaikinApi;
