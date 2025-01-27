/**
 * @description Models Daikin configuration. Set/get methods attempt to use nicer values
 * @package DaikinApiNode
 * @author Christopher Aitken 2022
 * @version 1.0
 */
class DaikinConfig
{
	config = {};



	constructor(data)
	{
		this.config = {};
		this.updateFromJSON(data);
	}


	/**
	 * @description Populates config from JSON. All values are optional;
	 * @memberof DaikinConfig
	 * @param {Object} data JSON data to update from
	 * @returns {void}
	 */
	updateFromJSON(data)
	{
		if (typeof data !== 'object') data = {};
		this.config = {...this.config, ...data};
	}


	/**
	 * @description Returns the Daikin config as a JSON object
	 * @memberof DaikinConfig
	 * @returns {Object}
	 */
	toJSON()
	{
		return this.config;
	}


	/**
	 * @description Get power mode
	 * @returns {Boolean}
	 */
	getPower()
	{
		if (!('pow' in this.config)) this.setPower(false);
		return parseInt(this.config.pow) === 1 ? true : false;
	}


	/**
	 * @description Set power mode
	 * @param {Boolean}
	 * @return {void}
	 */
	setPower(enabled)
	{
		this.config.pow = enabled ? 1 : 0;
	}


	/**
	 * @description Get type
	 * @returns {String}
	 */
	getType()
	{
		if (!('type' in this.config)) this.setType('');
		return this.config.type;
	}


	/**
	 * @description Set type
	 * @param {String}
	 * @return {void}
	 */
	setType(str)
	{
		this.config.type = str;
	}


	/**
	 * @description Get country code
	 * @returns {String}
	 */
	getReg()
	{
		if (!('reg' in this.config)) this.setReg('');
		return this.config.reg;
	}


	/**
	 * @description Set country code
	 * @param {String} str
	 * @returns {void}
	 */
	setReg(str)
	{
		this.config.reg = str;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getDst()
	{
		if (!('dst' in this.config)) this.setDst(0);
		return this.config.dst;
	}


	/**
	 * @description Set Dst
	 * @param {Number} dst
	 * @returns {void}
	 */
	setDst(dst)
	{
		this.config.dst = dst;
	}


	/**
	 * @description
	 * @returns {String}
	 */
	getVer()
	{
		if (!('ver' in this.config)) this.setVer('0.0.0');
		return this.config.ver.replaceAll('_', '.');
	}


	/**
	 * @description Set Version
	 * @param {String} ver
	 * @returns {void}
	 */
	setVer(ver)
	{
		this.config.ver = ver.replaceAll('.', '_');
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getRev()
	{
		if (!('rev' in this.config)) this.setRev(0);
		return parseInt(this.config.rev);
	}


	/**
	 * @description Set revision
	 * @param {Number} rev
	 * @returns {void}
	 */
	setRev(rev)
	{
		this.config.rev = parseInt(rev);
	}


	/**
	 * @description
	 * @returns {Boolean}
	 */
	getErr()
	{
		if (!('err' in this.config)) this.setErr(false);
		return parseInt(this.config.err) ? true : false;
	}


	/**
	 * @description Set Error
	 * @param {Boolean} err
	 * @returns {void}
	 */
	setErr(err)
	{
		this.config.err = err ? 1 : 0;
	}


	/**
	 * @description Get country code
	 * @returns {String}
	 */
	getLocation()
	{
		if (!('location' in this.config)) this.setLocation('');
		return this.config.location;
	}


	/**
	 * @description Set country code
	 * @param {String} str
	 * @returns {void}
	 */
	setLocation(str)
	{
		this.config.location = str;
	}


	/**
	 * @description Get model name
	 * @returns {string}
	 */
	getName()
	{
		if (!('name' in this.config)) this.setName('');
		return this.config.name;
	}


	/**
	 * @description Set model name
	 * @param {string} name
	 * @returns {void}
	 */
	setName(name)
	{
		this.config.name = name;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getIcon()
	{
		if (!('icon' in this.config)) this.setIcon(0);
		return this.config.icon;
	}


	/**
	 * @description Set Icon
	 * @param {Number} icon
	 * @returns {void}
	 */
	setIcon(icon)
	{
		this.config.icon = icon;
	}


	/**
	 * @description
	 * @returns {String}
	 */
	getMethod()
	{
		if (!('method' in this.config)) this.setMethod('');
		return this.config.method;
	}


	/**
	 * @description Set Method
	 * @param {String} method
	 * @returns {void}
	 */
	setMethod(method)
	{
		this.config.method = method;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getPort()
	{
		if (!('port' in this.config)) this.setPort(0);
		return parseInt(this.config.port);
	}


	/**
	 * @description Set Port
	 * @param {Number} port
	 * @returns {void}
	 */
	setPort(port)
	{
		this.config.port = parseInt(port);
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getId()
	{
		if (!('id' in this.config)) this.setId(0);
		return parseInt(this.config.id);
	}


	/**
	 * @description Set ID
	 * @param {Number} id
	 * @returns {void}
	 */
	setId(id)
	{
		this.config.id = parseInt(id);
	}


	/**
	 * @description Get low power flag
	 * @returns {Number}
	 */
	getLpwflag()
	{
		if (!('lpw_flag' in this.config)) this.setLpwflag(0);
		return parseInt(this.config.lpw_flag);
	}


	/**
	 * @description Set Low power flag
	 * @param {Number} flag
	 * @returns {void}
	 */
	setLpwflag(flag)
	{
		this.config.lpw_flag = flag;
	}


	/**
	 * @description Adapter kind
	 * @returns {Number}
	 */
	getAdpkind()
	{
		if (!('adp_kind' in this.config)) this.setAdpkind(0);
		return parseInt(this.config.adp_kind);
	}


	/**
	 * @description Set Adaptor kind
	 * @param {Number} dst
	 * @returns {void}
	 */
	setAdpkind(kind)
	{
		this.config.adp_kind = parseInt(kind);
	}


	/**
	 * @description Get LED status
	 * @returns {Boolean}
	 */
	getLed()
	{
		if (!('led' in this.config)) this.setLed(false);
		return parseInt(this.config.led) === 1 ? true : false;
	}


	/**
	 * @description Set LED status
	 * @returns {void}
	 */
	setLed(enabled)
	{
		this.config.led = enabled ? 1 : 0;
	}


	/**
	 * @description Get enable set zone
	 * @returns {Boolean}
	 */
	getEnSetZone()
	{
		if (!('en_setzone' in this.config)) this.setEnSetZone(false);
		return parseInt(this.config.en_setzone) === 1 ? true : false;
	}


	/**
	 * @description Set enable set zone
	 * @returns {void}
	 */
	setEnSetZone(enabled)
	{
		this.config.en_setzone = enabled ? 1 : 0;
	}


	/**
	 * @description
	 * @returns {String}
	 */
	getMac()
	{
		if (!('mac' in this.config)) this.setMac('');

		// Split string into array every 2 chars `DCF505F02621`
		const parts = this.config.mac.match(/.{1,2}/g);

		// Return as string `dc:f5:05:f0:26:21`
		return parts.join(':');
	}


	/**
	 * @description Set mac
	 * @param {Number} mac
	 * @returns {void}
	 */
	setMac(mac)
	{
		this.config.mac = mac;
	}


	/**
	 * @description Get adaptor mode
	 * @returns {String}
	 */
	getAdpmode()
	{
		if (!('adp_mode' in this.config)) this.setAdpmode('');
		return this.config.adp_mode;
	}


	/**
	 * @description Set adaptor mode
	 * @param {String} mode
	 * @returns {void}
	 */
	setAdpmode(mode)
	{
		this.config.adp_mode = mode;
	}


	/**
	 * @description Get SSID
	 * @returns {String}
	 */
	getSsid()
	{
		if (!('ssid' in this.config)) this.setSsid('');
		return this.config.ssid;
	}


	/**
	 * @description Set SSID
	 * @param {String} dst
	 * @returns {void}
	 */
	setSsid(id)
	{
		this.config.ssid = id;
	}


	/**
	 * @description Get error type
	 * @returns {Number}
	 */
	getErrtype()
	{
		if (!('err_type' in this.config)) this.setErrtype(0);
		return parseInt(this.config.err_type);
	}


	/**
	 * @description Set error type
	 * @param {Number} dst
	 * @returns {void}
	 */
	setErrtype(type)
	{
		this.config.err_type = parseInt(type);
	}


	/**
	 * @description Get error code
	 * @returns {Number}
	 */
	getErrcode()
	{
		if (!('err_code' in this.config)) this.setErrcode(0);
		return parseInt(this.config.err_code);
	}


	/**
	 * @description Set error code
	 * @param {Number} dst
	 * @returns {void}
	 */
	setErrcode(code)
	{
		this.config.err_code = parseInt(code);
	}


	/**
	 * @description Determine if Ch is enabled
	 * @returns {Number}
	 */
	getEnch()
	{
		if (!('ench' in this.config)) this.setEnch(false);
		return parseInt(this.config.ench) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Ch
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnch(enabled)
	{
		this.config.ench = enabled ? 1 : 0;
	}


	/**
	 * @description Determine if holiday mode
	 * @return {Boolean}
	 */
	getHoliday()
	{
		if (!('holiday' in this.config)) this.setHoliday(false);
		return parseInt(this.config.holiday) === 1 ? true : false;
	}


	/**
	 * @description Set holiday mode
	 * @param {Boolean} enabled
	 * @return {void}
	 */
	setHoliday(enabled)
	{
		this.config.holiday = enabled ? 1 : 0;
	}


	/**
	 * @description Determine if holiday mode is enabled
	 * @return {Boolean}
	 */
	getEnhol()
	{
		if (!('en_hol' in this.config)) this.setEnhol(false);
		return parseInt(this.config.en_hol) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable holiday mode
	 * @param {Boolean} enabled
	 * @return {void}
	 */
	setEnhol(enabled)
	{
		this.config.en_hol = enabled ? 1 : 0;
	}


	/**
	 * @description Get sync time
	 * @returns {Number}
	 */
	getSynctime()
	{
		if (!('sync_time' in this.config)) this.setSynctime(0);
		return parseInt(this.config.sync_time);
	}


	/**
	 * @description Set Sync time
	 * @param {Number} time
	 * @returns {void}
	 */
	setSynctime(time)
	{
		this.config.sync_time = parseInt(time);
	}


	/**
	 * @description Get Notice IP int
	 * @returns {Number}
	 */
	getNoticeIpInt()
	{
		if (!('notice_ip_int' in this.config)) this.settNoticeIpInt(0);
		return parseInt(this.config.notice_ip_int);
	}


	/**
	 * @description Set Notice IP Int
	 * @param {Number} value
	 * @returns {void}
	 */
	settNoticeIpInt(value)
	{
		this.config.notice_ip_int = parseInt(value);
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getNoticeSyncInt()
	{
		if (!('notice_sync_int' in this.config)) this.setNoticeSyncInt(0);
		return parseInt(this.config.notice_sync_int);
	}


	/**
	 * @description Set Notice sync Int
	 * @param {Number} value
	 * @returns {void}
	 */
	setNoticeSyncInt(value)
	{
		this.config.notice_sync_int = parseInt(value);
	}


	/**
	 * @description Get mode
	 * @returns {Number}
	 */
	getMode()
	{
		if (!('mode' in this.config)) this.setMode(0);
		return parseInt(this.config.mode);
	}


	/**
	 * @description Set Mode
	 * @param {Number} mode
	 * @returns {void}
	 */
	setMode(mode)
	{
		this.config.mode = parseInt(mode);
	}


	/**
	 * @description Get operate
	 * @returns {bool}
	 */
	getOperate()
	{
		if (!('operate' in this.config)) this.setOperate(false);
		return parseInt(this.config.operate);
	}


	/**
	 * @description Set Operate
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setOperate(enabled)
	{
		this.config.operate = enabled ? 1 : 0;
	}


	/**
	 * @description Get Bk Auto
	 * @returns {Number}
	 */
	getBkauto()
	{
		if (!('bk_auto' in this.config)) this.setBkauto(0);
		return parseInt(this.config.bk_auto);
	}


	/**
	 * @description Set Bk Auto
	 * @param {Number} value
	 * @returns {void}
	 */
	setBkauto(value)
	{
		this.config.bk_auto = parseInt(value);
	}


	/**
	 * @description Get Target temperature
	 * @returns {number}
	 */
	getStemp()
	{
		if (!('stemp' in this.config)) this.setStemp('-');
		return parseInt(this.config.stemp);
	}


	/**
	 * @description Set Target temperature
	 * @param {number} value
	 * @returns {void}
	 */
	setStemp(value)
	{
		this.config.stemp = isNaN(parseInt(value)) ? '-' : parseInt(value);
	}


	/**
	 * @description Get outside temperature
	 * @returns {Number}
	 */
	getOtemp()
	{
		if (!('otemp' in this.config)) this.setOtemp('-');
		return parseInt(this.config.otemp);
	}


	/**
	 * @description Set outside temperature
	 * @param {Number} value
	 */
	setOtemp(value)
	{
		this.config.otemp = isNaN(parseInt(value)) ? '-' : parseInt(value);
	}


	/**
	 * @description Get inside temperature
	 * @returns {Number}
	 */
	getHtemp()
	{
		if (!('htemp' in this.config)) this.setHtemp('-');
		return parseInt(this.config.htemp);
	}


	/**
	 * @description Set inside temperature
	 * @param {Number} value
	 */
	setHtemp(value)
	{
		this.config.htemp = isNaN(parseInt(value)) ? '-' : parseInt(value);
	}


	/**
	 * @description Get Dt 1
	 * @returns {Number}
	 */
	getDt1()
	{
		if (!('dt1' in this.config)) this.setDt1(0);
		return parseInt(this.config.dt1);
	}


	/**
	 * @description Set Dt 1
	 * @param {Number} value
	 * @returns {void}
	 */
	setDt1(dt)
	{
		this.config.dt1 = parseInt();
	}


	/**
	 * @description Get Dt 2
	 * @returns {Number}
	 */
	getDt2()
	{
		if (!('dt2' in this.config)) this.setDt2(0);
		return parseInt(this.config.dt2);
	}


	/**
	 * @description  Set Dt 2
	 * @param {Number} value
	 * @returns {void}
	 */
	setDt2(dt)
	{
		this.config.dt2 = parseInt(dt);
	}


	/**
	 * @description Get fan rate
	 * @return {string}
	 */
	getFrate()
	{
		if (!('f_rate' in this.config)) this.setFrate('Low');

		let vals = {
			'0': 'Auto',
			'A': 'Auto',
			'B': 'Silence',
			'1': 'Low',
			'3': '1',
			'4': '2',
			'5': '3',
			'6': '4',
			'7': '5',
			'1a': 'Auto low',
			'3a': 'Auto mid',
			'5a': 'Auto high',
		};

		switch (this.getFratesteps())
		{
			case 2:
				vals['3'] = 'High';
				vals['5'] = 'High';
				break;

			case 3:
				vals['3'] = 'Mid';
				vals['5'] = 'High';
				break;
		}

		return vals[this.config.f_rate];
	}


	/**
	 * @description Set fan rate
	 * @param {string} rate
	 * @return {void}
	 */
	setFrate(rate)
	{
		let vals = {
			'0': 'Auto',
			'A': 'Auto',
			'B': 'Silence',
			'1': 'Low',
			'3': '1',
			'4': '2',
			'5': '3',
			'6': '4',
			'7': '5',
			'1a': 'Auto low',
			'3a': 'Auto mid',
			'5a': 'Auto high',
		};

		switch (this.getFratesteps())
		{
			case 2:
				vals['3'] = 'High';
				vals['5'] = 'High';
				break;

			case 3:
				vals['3'] = 'Mid';
				vals['5'] = 'High';
				break;
		}

		this.config.f_rate = DaikinConfig.getKeyByValue(vals, rate);
	}


	/**
	 * @description Get Drf 1
	 * @returns {Number}
	 */
	getDfr1()
	{
		if (!('dfr1' in this.config)) this.setDfr1(0);
		return this.config.dfr1;
	}


	/**
	 * @description Set Drf 1
	 * @param {Number} value
	 * @returns {void}
	 */
	setDfr1(rate)
	{
		this.config.dfr1 = rate;
	}


	/**
	 * @description Get Drf 2
	 * @returns {Number}
	 */
	getDfr2()
	{
		if (!('dfr2' in this.config)) this.setDfr2(0);
		return this.config.dfr2;
	}


	/**
	 * @description Set Drf 2
	 * @param {Number} value
	 * @returns {void}
	 */
	setDfr2(rate)
	{
		this.config.dfr2 = rate;
	}


	/**
	 * @description Get Fan air side
	 * @returns {Number}
	 */
	getFairside()
	{
		if (!('f_airside' in this.config)) this.setFairside(0);
		return this.config.f_airside;
	}


	/**
	 * @description Set Fan air side
	 * @param {Number} value
	 * @returns {void}
	 */
	setFairside(side)
	{
		this.config.f_airside = side;
	}


	/**
	 * @description Get air side 1
	 * @returns {Number}
	 */
	getAirside1()
	{
		if (!('airside1' in this.config)) this.setAirside1(0);
		return parseInt(this.config.airside1);
	}


	/**
	 * @description Set air side 1
	 * @param {Number} value
	 * @returns {void}
	 */
	setAirside1(side)
	{
		this.config.airside1 = parseInt(side);
	}


	/**
	 * @description Get air side 2
	 * @returns {Number}
	 */
	getAirside2()
	{
		if (!('airside2' in this.config)) this.setAirside2(0);
		return parseInt(this.config.airside2);
	}


	/**
	 * @description Set air side 2
	 * @param {Number} value
	 * @returns {void}
	 */
	setAirside2(side)
	{
		this.config.airside2 = parseInt(side);
	}


	/**
	 * @description Get fan auto
	 * @returns {Number}
	 */
	getFauto()
	{
		if (!('f_auto' in this.config)) this.setFauto(0);
		return this.config.f_auto;
	}


	/**
	 * @description Set fan auto
	 * @param {Number} value
	 * @returns {void}
	 */
	setFauto(auto)
	{
		this.config.f_auto = auto;
	}


	/**
	 * @description Get auto 1
	 * @returns {Number}
	 */
	getAuto1()
	{
		if (!('auto1' in this.config)) this.setAuto1(0);
		return parseInt(this.config.auto1);
	}


	/**
	 * @description Set auto 1
	 * @param {Number} value
	 * @returns {void}
	 */
	setAuto1(auto)
	{
		this.config.auto1 = parseInt(auto);
	}


	/**
	 * @description Get auto 2
	 * @returns {Number}
	 */
	getAuto2()
	{
		if (!('auto2' in this.config)) this.setAuto2(0);
		return parseInt(this.config.auto2);
	}


	/**
	 * @description Set auto 2
	 * @param {Number} value
	 * @returns {void}
	 */
	setAuto2(auto)
	{
		this.config.auto2 = parseInt(auto);
	}


	/**
	 * @description Get fan direction
	 * @returns {string}
	 */
	getFdir()
	{
		if (!('f_dir' in this.config)) this.setFdir('Off');

		const vals = {
			0: 'Off',
			1: 'Vertical',
			2: 'Horizontal',
			3: '3D'
		};

		return vals[this.config.f_dir];
	}


	/**
	 * @description Set Fan direction
	 * @param {string} direction
	 * @returns {void}
	 */
	setFdir(direction)
	{
		const vals = {
			0: 'Off',
			1: 'Vertical',
			2: 'Horizontal',
			3: '3D'
		};

		this.config.f_dir = DaikinConfig.getKeyByValue(vals, direction);
	}


	/**
	 * @description Get fan direction for mode 1
	 * @returns {string}
	 */
	getDfd1()
	{
		if (!('dfd1' in this.config)) this.setDfd1('Off');

		const vals = {
			0: 'Off',
			1: 'Vertical',
			2: 'Horizontal',
			3: '3D'
		};

		return vals[this.config.dfd1];
	}


	/**
	 * @description Set fan direction for mode 1
	 * @param {string} direction
	 * @returns {void}
	 */
	setDfd1(direction)
	{
		const vals = {
			0: 'Off',
			1: 'Vertical',
			2: 'Horizontal',
			3: '3D'
		};

		this.config.dfd1 = DaikinConfig.getKeyByValue(vals, direction);
	}


	/**
	 * @description Get fan direction for mode 2
	 * @returns {string}
	 */
	getDfd2()
	{
		if (!('dfd2' in this.config)) this.setDfd2('Off');

		const vals = {
			0: 'Off',
			1: 'Vertical',
			2: 'Horizontal',
			3: '3D'
		};

		return vals[this.config.dfd2];
	}


	/**
	 * @description Set fan direction for mode 2
	 * @param {string} direction
	 * @returns {void}
	 */
	setDfd2(direction)
	{
		const vals = {
			0: 'Off',
			1: 'Vertical',
			2: 'Horizontal',
			3: '3D'
		};

		this.config.dfd2 = DaikinConfig.getKeyByValue(vals, direction);
	}


	/**
	 * @description Get filter warning
	 * @returns {Boolean}
	 */
	getFiltersigninfo()
	{
		if (!('filter_sign_info' in this.config)) this.setFiltersigninfo(false);
		return parseInt(this.config.filter_sign_info) === 1 ? true : false;
	}


	/**
	 * @description Set filter warning
	 * @param {Boolean} enable
	 * @returns {void}
	 */
	setFiltersigninfo(enable)
	{
		this.config.filter_sign_info = enable ? 1 : 0;
	}


	/**
	 * @description Get cent ~ Assume this costing calc?
	 * @returns {Number}
	 */
	getCent()
	{
		if (!('cent' in this.config)) this.setCent(0);
		return this.config.cent;
	}


	/**
	 * @description Set cent ~ Assume this costing calc?
	 * @param {Number} value
	 * @returns {void}
	 */
	setCent(cent)
	{
		this.config.cent = cent;
	}


	/**
	 * @description Determine if cent is enabled
	 * @returns {Boolean}
	 */
	getEncent()
	{
		if (!('en_cent' in this.config)) this.setEncent(false);
		return parseInt(this.config.en_cent) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable cent
	 * @param {Boolean} enable
	 * @returns {void}
	 */
	setEncent(enable)
	{
		this.config.en_cent = enable ? 1 : 0;
	}


	/**
	 * @description Get number of remotes/controllers?
	 * @returns {Number}
	 */
	getRemotes()
	{
		if (!('remo' in this.config)) this.setRemo(0);
		return parseInt(this.config.remo);
	}


	/**
	 * @description Set Remo
	 * @param {Number} value
	 * @returns {void}
	 */
	setRemo(remo)
	{
		this.config.remo = parseInt(remo);
	}


	/**
	 * @description Get model
	 * @returns {Number}
	 */
	getModel()
	{
		if (!('model' in this.config)) this.getModel(0);
		return this.config.model;
	}


	/**
	 * @description Set model
	 * @param {Number} value
	 * @returns {void}
	 */
	setModel(model)
	{
		this.config.model = model;
	}


	/**
	 * @description Get current humidity
	 * @returns {Number}
	 */
	getHumd()
	{
		if (!('humd' in this.config)) this.setHumd(0);
		return parseInt(this.config.humd);
	}


	/**
	 * @description Set current humidity
	 * @param {Number} value
	 * @returns {void}
	 */
	setHumd(hum)
	{
		this.config.humd = parseInt(hum);
	}


	/**
	 * @description Get target humidity
	 * @returns {Number}
	 */
	getShumd()
	{
		if (!('s_humd' in this.config)) this.getShumd(0);
		return parseInt(this.config.s_humd);
	}


	/**
	 * @description Set target humidity
	 * @param {Number} value
	 * @returns {void}
	 */
	setShumd(humidity)
	{
		this.config.s_humd = parseInt(humidity);
	}


	/**
	 * @description Determine if zones is enabled
	 * @returns {Boolean}
	 */
	getEnzone()
	{
		if (!('en_zone' in this.config)) this.setEnzone(false);
		return parseInt(this.config.en_zone) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable zone
	 * @param {Boolean} enable
	 * @returns {void}
	 */
	setEnzone(enable)
	{
		this.config.en_zone = enable ? 1 : 0;
	}


	/**
	 * @description Determine if Linear zone is enabled
	 * @returns {Boolean}
	 */
	getEnlinearzone()
	{
		if (!('en_linear_zone' in this.config)) this.setEnlinearzone(false);
		return parseInt(this.config.en_linear_zone) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Linear zone
	 * @param {Boolean} enable
	 * @returns {void}
	 */
	setEnlinearzone(enable)
	{
		this.config.en_linear_zone = enable ? 1 : 0;
	}


	/**
	 * @description Determine if Filter sign is enabled
	 * @returns {Boolean}
	 */
	getEnfiltersign()
	{
		if (!('en_filter_sign' in this.config)) this.setEnfiltersign(false);
		return parseInt(this.config.en_filter_sign) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Filter sign
	 * @param {Boolean} enable
	 * @returns {void}
	 */
	setEnfiltersign(enable)
	{
		this.config.en_filter_sign = enable ? 1 : 0;
	}


	/**
	 * @description Get AC Led
	 * @returns {Number}
	 */
	getAcled()
	{
		if (!('acled' in this.config)) this.setAcled(false);
		return parseInt(this.config.acled) === 1 ? true : false;
	}


	/**
	 * @description Set AC Led
	 * @param {Number} value
	 * @returns {void}
	 */
	setAcled(led)
	{
		this.config.acled = led ? 1 : 0;
	}


	/**
	 * @description Get Land
	 * @returns {Number}
	 */
	getLand()
	{
		if (!('land' in this.config)) this.setLand(0);
		return this.config.land;
	}


	/**
	 * @description Set Land
	 * @param {Number} value
	 * @returns {void}
	 */
	setLand(land)
	{
		this.config.land = land;
	}


	/**
	 * @description Get Elec
	 * @returns {Number}
	 */
	getElec()
	{
		if (!('elec' in this.config)) this.setElec(0);
		return this.config.elec;
	}


	/**
	 * @description Set Elec
	 * @param {Number} value
	 * @returns {void}
	 */
	setElec(elec)
	{
		this.config.elec = elec;
	}


	/**
	 * @description Temp
	 * @returns {Number}
	 */
	getTemp()
	{
		if (!('temp' in this.config)) this.setTemp(0);
		return this.config.temp;
	}


	/**
	 * @description Set Temp
	 * @param {Number} value
	 * @returns {void}
	 */
	setTemp(temp)
	{
		this.config.temp = temp;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getMdtct()
	{
		if (!('m_dtct' in this.config)) this.setMdtct(0);
		return this.config.m_dtct
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setMdtct(dtct)
	{
		this.config.m_dtct = dtct;
	}


	/**
	 * @description Get Acdst
	 * @returns {Number}
	 */
	getAcdst()
	{
		if (!('ac_dst' in this.config)) this.setAcdst(0);
		return this.config.ac_dst;
	}


	/**
	 * @description Set Acdst
	 * @param {Number} value
	 * @returns {void}
	 */
	setAcdst(value)
	{
		this.config.ac_dst = value;
	}


	/**
	 * @description Fetch Demand?
	 * @returns {Number}
	 */
	getDmnd()
	{
		if (!('dmnd' in this.config)) this.setDmnd(0);
		return this.config.dmnd;
	}


	/**
	 * @description Set demand?
	 * @param {Number} value
	 * @return {void}
	 */
	setDmnd(value)
	{
		this.config.dmnd = value;
	}


	/**
	 * @description Determines if Temp setting is enabled
	 * @returns {Boolean}
	 */
	getEnTempSetting()
	{
		if (!('en_temp_setting' in this.config)) this.setEnTempSetting(false);
		return parseInt(this.config.en_temp_setting) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable temp setting
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnTempSetting(enabled)
	{
		this.config.en_temp_setting = enabled ? 1 : 0;
	}


	/**
	 * @description Determines if Fan rate is enabled
	 * @returns {boolean}
	 */
	getEnfrate()
	{
		if (!('en_frate' in this.config)) this.setEnfrate(false);
		return parseInt(this.config.en_frate) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Fan rate
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnfrate(enabled)
	{
		this.config.en_frate = enabled ? 1 : 0;
	}


	/**
	 * @description Determines if Fan direction is enabled
	 * @returns {Boolean}
	 */
	getEnfdir()
	{
		if (!('en_fdir' in this.config)) this.setEnfdir(false);
		return parseInt(this.config.en_fdir) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Fan direction
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnfdir(enabled)
	{
		this.config.en_fdir = enabled ? 1 : 0;
	}


	/**
	 * @description Determines if rtempa is enabled
	 * @returns {Boolean}
	 */
	getEnrtempa()
	{
		if (!('en_rtemp_a' in this.config)) this.setEnrtempa(false);
		return parseInt(this.config.en_rtemp_a) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable rtempa
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnrtempa(enabled)
	{
		this.config.en_rtemp_a = enabled ? 1 : 0;
	}


	/**
	 * @description Determines if SP mode is enabled
	 * @returns {Boolean}
	 */
	getEnspmode()
	{
		if (!('en_spmode' in this.config)) this.setEnspmode(false);
		return parseInt(this.config.en_spmode) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable SP mode
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnspmode(enabled)
	{
		this.config.en_spmode = enabled ? 1 : 0;
	}


	/**
	 * @description Determine if ipwsep is enabled
	 * @returns {Boolean}
	 */
	getEnipwsep()
	{
		if (!('en_ipw_sep' in this.config)) this.setEnipwsep(false);
		return parseInt(this.config.en_ipw_sep) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable ipwsep
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnipwsep(enabled)
	{
		this.config.en_ipw_sep = enabled ? 1 : 0;
	}


	/**
	 * @description Determines if Scd timer is enabled
	 * @returns {boolean}
	 */
	getEnscdltmr()
	{
		if (!('en_scdltmr' in this.config)) this.setEnscdltmr(false);
		return parseInt(this.config.en_scdltmr) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Scd timer
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnscdltmr(enabled)
	{
		this.config.en_scdltmr = enabled ? 1 : 0;
	}


	/**
	 * @description Determines if monpow is enabled
	 * @returns {Boolean}
	 */
	getEnmompow()
	{
		if (!('en_mompow' in this.config)) this.setEnmompow(false);
		return parseInt(this.config.en_mompow) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable mompow
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnmompow(enabled)
	{
		this.config.en_mompow = enabled ? 1 : 0;
	}


	/**
	 * @description Determines if Patrol is enabled
	 * @returns {Boolean}
	 */
	getEnpatrol()
	{
		if (!('en_patrol' in this.config)) this.setEnpatrol(false);
		return parseInt(this.config.en_patrol) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Patrol
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnpatrol(enabled)
	{
		this.config.en_patrol = enabled ? 1 : 0;
	}


	/**
	 * @description Determines if Air side is enabled
	 * @returns {Boolean}
	 */
	getEnairside()
	{
		if (!('en_airside' in this.config)) this.setEnairside(false);
		return parseInt(this.config.en_airside) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Air side
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnairside(enabled)
	{
		this.config.en_airside = enabled ? 1 : 0;
	}


	/**
	 * @description Determines if Quick timer is enabled
	 * @returns {Boolean}
	 */
	getEnquicktimer()
	{
		if (!('en_quick_timer' in this.config)) this.setEnquicktimer(false);
		return parseInt(this.config.en_quick_timer) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Quick timer
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnquicktimer(enabled)
	{
		this.config.en_quick_timer = enabled ? 1 : 0;
	}


	/**
	 * @description Determine if Auto mode is enabled
	 * @returns {Boolean}
	 */
	getEnauto()
	{
		if (!('en_auto' in this.config)) this.setEnauto(false);
		return parseInt(this.config.en_auto) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Auto mode
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnauto(enabled)
	{
		this.config.en_auto = enabled ? 1 : 0;
	}

	/**
	 * @description Determines if Dry mode is enabled
	 * @returns {Boolean}
	 */
	getEndry()
	{
		if (!('en_dry' in this.config)) this.setEndry(false);
		return parseInt(this.config.en_dry) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Dry mode
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEndry(enabled)
	{
		this.config.en_dry = enabled ? 1 : 0;
	}


	/**
	 * @description Determine if Common zone is enabled
	 * @returns {Boolean}
	 */
	getEnCommonZone()
	{
		if (!('en_common_zone' in this.config)) this.setEnCommonZone(false);
		return parseInt(this.config.en_common_zone) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable Common zone
	 * @param {Boolean} enabled
	 * @returns {void}
	 */
	setEnCommonZone(enabled)
	{
		this.config.en_common_zone = enabled ? 1 : 0;
	}


	/**
	 * @description Get low cool
	 * @returns {Number}
	 */
	getCoolL()
	{
		if (!('cool_l' in this.config)) this.setCoolL(0);
		return parseInt(this.config.cool_l);
	}


	/**
	 * @description Set low cool
	 * @param {Number} low
	 * @return {void}
	 */
	setCoolL(low)
	{
		this.config.cool_l = parseInt(low);
	}


	/**
	 * @description Get high cool
	 * @returns {Number}
	 */
	getCoolH()
	{
		if (!('cool_h' in this.config)) this.setCoolH(0);
		return parseInt(this.config.cool_h);
	}


	/**
	 * @description Set high Cool
	 * @param {Number} high
	 * @returns {void}
	 */
	setCoolH(high)
	{
		this.config.cool_h = parseInt(high);
	}


	/**
	 * Get low heat
	 * @returns {Number}
	 */
	getHeatL()
	{
		if (!('heat_l' in this.config)) this.setHeatL(0);
		return parseInt(this.config.heat_l);
	}


	/**
	 * Set low heat
	 * @param {Number} low
	 * @returns {void}
	 */
	setHeatL(low)
	{
		this.config.heat_l = parseInt(low);
	}


	/**
	 * @description Get high Heat
	 * @returns {Number}
	 */
	getHeatH()
	{
		if (!('heat_h' in this.config)) this.setHeatH(0);
		return parseInt(this.config.heat_h);
	}


	/**
	 * @description Set high heat
	 * @param {Number} high
	 * @returns {void}
	 */
	setHeatH(high)
	{
		this.config.heat_h = parseInt(high);
	}


	/**
	 * @description Get fan rate steps
	 * @returns {Number}
	 */
	getFratesteps()
	{
		if (!('frate_steps' in this.config)) this.setFratesteps(0);
		return parseInt(this.config.frate_steps);
	}


	/**
	 * @description Set fan rate steps
	 * @param {Number} steps
	 * @returns {void}
	 */
	setFratesteps(steps)
	{
		this.config.frate_steps = parseInt(steps);
	}


	/**
	 * @description Determine if auto fan rate is enabled
	 * @returns {Boolean}
	 */
	getEnFrateAuto()
	{
		if (!('en_frate_auto' in this.config)) this.getEnSpMode(false);
		return parseInt(this.config.en_frate_auto) === 1 ? true : false;
	}


	/**
	 * @description Determine if special mode enabled
	 * @returns {Boolean}
	 */
	getEnSpMode()
	{
		if (!('en_spmode' in this.config)) this.config.en_spmode = 0;
		return parseInt(this.config.en_spmode) === 1 ? true : false;
	}


	/**
	 * @description Enable/disable special mode
	 * @param {Boolean} enable
	 * @returns {void}
	 */
	setEnSpMode(enable)
	{
		this.config.en_spmode = enable ? 1 : 0;
	}


	/**
	 * @description Get special mode
	 * @returns {String}
	 */
	getSpMode()
	{
		if (!('spmode' in this.config)) this.setSpMode(0);
		return this.config.spmode;
	}


	/**
	 * @description Set special mode
	 * @returns {String}
	 */
	setSpMode(mode)
	{
		this.config.spmode = mode;
	}


	/**
	 * @description Get special mode kind
	 * @returns {string}
	 */
	getSpModeKind()
	{
		if (!('spmode_kind' in this.config)) this.setSpModeKind('');

		const kinds = {
			'': 'N/A',
			0: 'Streamer',
			1: 'Powerful',
			2: 'Eco',
		};

		return kinds[this.config.spmode_kind];
	}


	/**
	 * @description Set special mode kind
	 * @param {String|Boolean} mode
	 * @returns {void}
	 */
	setSpModeKind(mode)
	{
		const kinds = {
			'': 'N/A',
			0: 'Streamer',
			1: 'Powerful',
			2: 'Eco',
		};

		this.config.spmode_kind = DaikinConfig.getKeyByValue(kinds, mode);
	}


	/**
	 * @description Get advanced special mode kind
	 * @returns {string}
	 */
	getAdvanced()
	{
		if (!('adv' in this.config)) this.config.adv = '';

		const modes = {
			'': 'N/A',
			'2': 'Powerful',
			'12': 'Eco',
			'13': 'Streamer',
			'2/13': 'Powerful streamer',
			'12/13': 'Eco streamer',
		};

		return modes[this.config.adv];
	}


	/**
	 * @description Set advanced special mode kind
	 * @param {String} mode
	 * @return {void}
	 */
	setAdvanced(mode)
	{
		const modes = {
			'': 'N/A',
			'2': 'Powerful',
			'12': 'Eco',
			'13': 'Streamer',
			'2/13': 'Powerful streamer',
			'12/13': 'Eco streamer',
		};

		this.config.adv = DaikinConfig.getKeyByValue(modes, mode);
	}


	/**
	 * @description Get zone names
	 * @returns {string[]}
	 */
	getZoneNames()
	{
		if (!('zone_name') in this.config) this.setZoneNames([]);
		return this.config.zone_name;
	}


	/**
	 * @description Set zone names
	 * @param {array} names
	 * @returns {void}
	 */
	setZoneNames(names)
	{
		if (!('zone_name') in this.config) this.config.zone_name = [];

		for (key in names)
		{
			this.config.zone_name[key] = names[key];
		}
	}


	/**
	 * @description Get zone open/close status
	 * @returns {boolean[]}
	 */
	getZoneStates()
	{
		if (!('zone_onoff') in this.config) this.setZoneStates([]);

		let out = [];

		this.config.zone_onoff.forEach((value) => out.push(parseInt(value) === 1 ? true : false));

		return out;
	}


	/**
	 * @description Set zone open/close status
	 * @param {boolean[]} values
	 * @returns {void}
	 */
	setZoneStates(values)
	{
		if (!('zone_onoff') in this.config) this.config.zone_onoff = [];

		for (key in values)
		{
			this.config.zone_onoff[key] = values[key] ? 1 : 0;
		}
	}


	/**
	 * @description Fetch object key for given value
	 * @static
	 * @param {Object} object
	 * @param {String} value
	 * @returns {String}
	 */
	static getKeyByValue(object, value)
	{
		return Object.keys(object).find(key => object[key] === value);
	}


	/**
	 * @description Returns a new DaikinConfig instance from a JSON object
	 * @memberof DaikinConfig
	 * @static
	 * @param {Object} options JSON object containing the Daikin config
	 * @returns {DaikinConfig} Returns a new DaikinConfig instance
	 */
	static fromJSON(json)
	{
		return new DaikinConfig(json);
	}
}

module.exports = DaikinConfig;
