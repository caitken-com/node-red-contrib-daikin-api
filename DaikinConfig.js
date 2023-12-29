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
		if (!('pow' in this.config)) this.config.pow = 0;
		return this.config.pow == 0 ? false : true;
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
		if (!('type' in this.config)) this.config.type = 0;
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
		if (!('reg' in this.config)) this.config.reg = '';
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
		if (!('dst' in this.config)) this.config.dst = 0;
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
	 * @returns {Number}
	 */
	getVer()
	{
		if (!('ver' in this.config)) this.config.ver = 0;
		return this.config.ver;
	}


	/**
	 * @description Set Version
	 * @param {Number} ver
	 * @returns {void}
	 */
	setVer(ver)
	{
		this.config.ver = ver;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getRev()
	{
		if (!('rev' in this.config)) this.config.rev = 0;
		return this.config.rev;
	}


	/**
	 * @description Set revision
	 * @param {Number} rev
	 * @returns {void}
	 */
	setRev(rev)
	{
		this.config.rev = rev;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getErr()
	{
		if (!('err' in this.config)) this.config.err = 0;
		return this.config.err;
	}


	/**
	 * @description Set Error
	 * @param {Number} err
	 * @returns {void}
	 */
	setErr(err)
	{
		this.config.err = err;
	}


	/**
	 * @description Get country code
	 * @returns {String}
	 */
	getLocation()
	{
		if (!('location' in this.config)) this.config.location = '';
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
		if (!('name' in this.config)) this.config.name = '';

		// Hex to ascii
		return this.config.name.match(/.{1,2}/g).map(function(v){
			return String.fromCharCode(parseInt(v, 16));
		}).join('');
	}


	/**
	 * @description Set model name
	 * @param {string} name
	 * @returns {void}
	 */
	setName(name)
	{
		for (let i = 0; i < String(name).length; i++)
		{
			let c = name.charCodeAt(i);
			let d = "00" + c.toString(16);
			let e = d.substr(d.length-2);
		}

		this.config.name = name;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getIcon()
	{
		if (!('icon' in this.config)) this.config.icon = 0;
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
	 * @returns {Number}
	 */
	getMethod()
	{
		if (!('method' in this.config)) this.config.method = 0;
		return this.config.method;
	}


	/**
	 * @description Set Method
	 * @param {Number} method
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
		if (!('port' in this.config)) this.config.port = 0;
		return this.config.port;
	}


	/**
	 * @description Set Port
	 * @param {Number} port
	 * @returns {void}
	 */
	setPort(port)
	{
		this.config.port = port;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getId()
	{
		if (!('id' in this.config)) this.config.id = 0;
		return this.config.id;
	}


	/**
	 * @description Set ID
	 * @param {Number} id
	 * @returns {void}
	 */
	setId(id)
	{
		this.config.id = id;
	}


	/**
	 * @description Get low power flag
	 * @returns {Number}
	 */
	getLpwflag()
	{
		if (!('lpw_flag' in this.config)) this.config.lpw_flag = 0;
		return this.config.lpw_flag;
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
		if (!('adp_kind' in this.config)) this.config.adp_kind = 0;
		return this.config.adp_kind;
	}


	/**
	 * @description Set Adaptor kind
	 * @param {Number} dst
	 * @returns {void}
	 */
	setAdpkind(kind)
	{
		this.config.adp_kind = kind;
	}


	/**
	 * @description Get LED status
	 * @returns {Boolean}
	 */
	getLed()
	{
		if (!('led' in this.config)) this.config.led = 0;
		return this.config.led == 0 ? false : true;
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
		if (!('en_setzone' in this.config)) this.config.en_setzone = 0;
		return this.config.en_setzone == 0 ? false : true;
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
	 * @returns {Number}
	 */
	getMac()
	{
		if (!('mac' in this.config)) this.config.mac = 0;
		return this.config.mac;
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
	 * @returns {Number}
	 */
	getAdpmode()
	{
		if (!('adp_mode' in this.config)) this.config.adp_mode = 0;
		return this.config.adp_mode;
	}


	/**
	 * @description Set adaptor mode
	 * @param {Number} mode
	 * @returns {void}
	 */
	setAdpmode(mode)
	{
		this.config.adp_mode = mode;
	}


	/**
	 * @description Get SSID
	 * @returns {Number}
	 */
	getSsid()
	{
		if (!('ssid' in this.config)) this.config.ssid = 0;
		return this.config.ssid;
	}


	/**
	 * @description Set SSID
	 * @param {Number} dst
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
		if (!('err_type' in this.config)) this.config.err_type = 0;
		return this.config.err_type;
	}


	/**
	 * @description Set error type
	 * @param {Number} dst
	 * @returns {void}
	 */
	setErrtype(type)
	{
		this.config.err_type = type;
	}


	/**
	 * @description Get error code
	 * @returns {Number}
	 */
	getErrcode()
	{
		if (!('err_code' in this.config)) this.config.err_code = 0;
		return this.config.err_code;
	}


	/**
	 * @description Set error code
	 * @param {Number} dst
	 * @returns {void}
	 */
	setErrcode(code)
	{
		this.config.err_code = code;
	}


	/**
	 * @description Determine if Ch is enabled
	 * @returns {Number}
	 */
	getEnch()
	{
		if (!('ench' in this.config)) this.config.ench = 0;
		return this.config.ench == 0 ? false : true;
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
		if (!('holiday' in this.config)) this.config.holiday = 0;
		return this.config.holiday == 0 ? false : true;
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
		if (!('en_hol' in this.config)) this.config.en_hol = 0;
		return this.config.en_hol == 0 ? false : true;
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
		if (!('sync_time' in this.config)) this.config.sync_time = 0;
		return this.config.sync_time;
	}


	/**
	 * @description Set Sync time
	 * @param {Number} time
	 * @returns {void}
	 */
	setSynctime(time)
	{
		this.config.sync_time = time;
	}


	/**
	 * @description Get Notice IP int
	 * @returns {Number}
	 */
	getNoticeIpInt()
	{
		if (!('notice_ip_int' in this.config)) this.config.notice_ip_int = 0;
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
	getNoticesyncint()
	{
		if (!('notice_sync_int' in this.config)) this.config.notice_sync_int = 0;
		return parseInt(this.config.notice_sync_int);
	}


	/**
	 * @description Set Notice sync Int
	 * @param {Number} value
	 * @returns {void}
	 */
	setNoticesyncint(value)
	{
		this.config.notice_sync_int = parseInt(value);
	}


	/**
	 * @description Get mode
	 * @returns {Number}
	 */
	getMode()
	{
		if (!('mode' in this.config)) this.config.mode = 0;
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
		if (!('operate' in this.config)) this.config.operate = 0;
		return this.config.operate == 0 ? false : true;
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
	 * @description
	 * @returns {Number}
	 */
	getBkauto()
	{
		if (!('bk_auto' in this.config)) this.config.bk_auto = 0;
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
		if (!('stemp' in this.config)) this.config.stemp = '-';
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
		if (!('otemp' in this.config)) this.config.otemp = '-';
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
		if (!('htemp' in this.config)) this.config.htemp = '-';
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
	 * @description
	 * @returns {Number}
	 */
	getDt1()
	{
		if (!('dt1' in this.config)) this.config.dt1 = 0;
		return this.config.dt1;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setDt1(dt)
	{
		this.config.dt1 = dt;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getDt2()
	{
		if (!('dt2' in this.config)) this.config.dt2 = 0;
		return this.config.dt2;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setDt2(dt)
	{
		this.config.dt2 = dt;
	}


	/**
	 * @description Get fan rate
	 * @return {string}
	 */
	getFrate()
	{
		if (!('f_rate' in this.config)) this.config.f_rate = 0;

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
	 * @description
	 * @returns {Number}
	 */
	getDfr1()
	{
		if (!('dfr1' in this.config)) this.config.dfr1 = 0;
		return this.config.dfr1;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setDfr1(rate)
	{
		this.config.dfr1 = rate;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getDfr2()
	{
		if (!('dfr2' in this.config)) this.config.dfr2 = 0;
		return this.config.dfr2;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setDfr2(rate)
	{
		this.config.dfr2 = rate;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getFairside()
	{
		if (!('f_airside' in this.config)) this.config.f_airside = 0;
		return this.config.f_airside;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setFairside(side)
	{
		this.config.f_airside = side;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getAirside1()
	{
		if (!('airside1' in this.config)) this.config.airside1 = 0;
		return this.config.airside1;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setAirside1(side)
	{
		this.config.airside1 = side;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getAirside2()
	{
		if (!('airside2' in this.config)) this.config.airside2 = 0;
		return this.config.airside2;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setAirside2(side)
	{
		this.config.airside2 = side;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getFauto()
	{
		if (!('f_auto' in this.config)) this.config.f_auto = 0;
		return this.config.f_auto;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setFauto(auto)
	{
		this.config.f_auto = auto;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getAuto1()
	{
		if (!('auto1' in this.config)) this.config.auto1 = 0;
		return this.config.auto1;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setAuto1(auto)
	{
		this.config.auto1 = auto;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getAuto2()
	{
		if (!('auto2' in this.config)) this.config.auto2 = 0;
		return this.config.auto2;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setAuto2(auto)
	{
		this.config.auto2 = auto;
	}


	/**
	 * @description Get fan direction
	 * @returns {string}
	 */
	getFdir()
	{
		if (!('f_dir' in this.config)) this.config.f_dir = 0;
		let vals = {0: 'Off', 1: 'Vertical', 2: 'Horizontal', 3: '3D'};
		return vals[this.config.f_dir];
	}


	/**
	 * @description Set Fan direction
	 * @param {string} direction
	 * @returns {void}
	 */
	setFdir(direction)
	{
		let vals = {0: 'Off', 1: 'Vertical', 2: 'Horizontal', 3: '3D'};
		this.config.f_dir = DaikinConfig.getKeyByValue(vals, direction);
	}


	/**
	 * @description Get fan direction for mode 1
	 * @returns {string}
	 */
	getDfd1()
	{
		if (!('dfd1' in this.config)) this.config.dfd1 = 0;
		let vals = {0: 'Off', 1: 'Vertical', 2: 'Horizontal', 3: '3D'};
		return vals[this.config.dfd1];
	}


	/**
	 * @description Set fan direction for mode 1
	 * @param {string} direction
	 * @returns {void}
	 */
	setDfd1(direction)
	{
		let vals = {0: 'Off', 1: 'Vertical', 2: 'Horizontal', 3: '3D'};
		this.config.dfd1 = DaikinConfig.getKeyByValue(vals, direction);
	}


	/**
	 * @description Get fan direction for mode 2
	 * @returns {string}
	 */
	getDfd2()
	{
		if (!('dfd2' in this.config)) this.config.dfd2 = 0;
		let vals = {0: 'Off', 1: 'Vertical', 2: 'Horizontal', 3: '3D'};
		return vals[this.config.dfd2];
	}


	/**
	 * @description Set fan direction for mode 2
	 * @param {string} direction
	 * @returns {void}
	 */
	setDfd2(direction)
	{
		let vals = {0: 'Off', 1: 'Vertical', 2: 'Horizontal', 3: '3D'};
		this.config.dfd2 = DaikinConfig.getKeyByValue(vals, direction);
	}


	/**
	 * @description is filter warning showing
	 * @returns {Boolean}
	 */
	getFiltersigninfo()
	{
		if (!('filter_sign_info' in this.config)) this.config.filter_sign_info = 0;
		return this.config.filter_sign_info == 0 ? false : true;
	}


	/**
	 * @description Set filter warning
	 * @param {Boolean} show
	 * @returns {void}
	 */
	setFiltersigninfo(show)
	{
		this.config.filter_sign_info = show ? 1 : 0;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getCent()
	{
		if (!('cent' in this.config)) this.config.cent = 0;
		return this.config.cent;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setCent(cent)
	{
		this.config.cent = cent;
	}


	/**
	 * @description
	 * @returns {Boolean}
	 */
	getEncent()
	{
		if (!('en_cent' in this.config)) this.config.en_cent = false;
		return this.config.en_cent ? true : false;
	}


	/**
	 * @description Set
	 * @param {Boolean} enable
	 * @returns {void}
	 */
	setEncent(enable)
	{
		this.config.en_cent = enable ? 1 : 0;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getRemo()
	{
		if (!('remo' in this.config)) this.config.remo = 0;
		return this.config.remo;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setRemo(remo)
	{
		this.config.remo = remo;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getModel()
	{
		if (!('model' in this.config)) this.config.model = 0;
		return this.config.model;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setModel(model)
	{
		this.config.model = model;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getHumd()
	{
		if (!('humd' in this.config)) this.config.humd = 0;
		return this.config.humd;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setHumd(hum)
	{
		this.config.humd = hum;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getShumd()
	{
		if (!('s_humd' in this.config)) this.config.s_humd = 0;
		return this.config.s_humd;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setShumd(hum)
	{
		this.config.s_humd = hum;
	}


	/**
	 * @description
	 * @returns {Boolean}
	 */
	getEnzone()
	{
		if (!('en_zone' in this.config)) this.config.en_zone = 0;
		return this.config.en_zone ? true : false;
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
		if (!('en_linear_zone' in this.config)) this.config.en_linear_zone = 0;
		return this.config.en_linear_zone ? true : false;
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
		if (!('en_filter_sign' in this.config)) this.config.en_filter_sign = 0;
		return this.config.en_filter_sign ? true : false;
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
	 * @description Get Acled
	 * @returns {Number}
	 */
	getAcled()
	{
		if (!('acled' in this.config)) this.config.acled = 0;
		return this.config.acled;
	}


	/**
	 * @description Set Acled
	 * @param {Number} value
	 * @returns {void}
	 */
	setAcled(led)
	{
		this.config.acled = led;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getLand()
	{
		if (!('land' in this.config)) this.config.land = 0;
		return this.config.land;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setLand(land)
	{
		this.config.land = land;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getElec()
	{
		if (!('elec' in this.config)) this.config.elec = 0;
		return this.config.elec;
	}


	/**
	 * @description Set
	 * @param {Number} value
	 * @returns {void}
	 */
	setElec(elec)
	{
		this.config.elec = elec;
	}


	/**
	 * @description
	 * @returns {Number}
	 */
	getTemp()
	{
		if (!('temp' in this.config)) this.config.temp = 0;
		return this.config.temp;
	}


	/**
	 * @description Set
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
		if (!('m_dtct' in this.config)) this.config.m_dtct = 0;
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
		if (!('ac_dst' in this.config)) this.config.ac_dst = 0;
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
		if (!('dmnd' in this.config)) this.config.dmnd = 0;
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
		if (!('en_temp_setting' in this.config)) this.config.en_temp_setting = 0;
		return this.config.en_temp_setting == 0 ? false : true;
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
		if (!('en_frate' in this.config)) this.config.en_frate = 0;
		return this.config.en_frate == 0 ? false : true;
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
		if (!('en_fdir' in this.config)) this.config.en_fdir = 0;
		return this.config.en_fdir == 0 ? false : true;
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
		if (!('en_rtemp_a' in this.config)) this.config.en_rtemp_a = 0;
		return this.config.en_rtemp_a == 0 ? false : true;
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
		if (!('en_spmode' in this.config)) this.config.en_spmode = 0;
		return this.config.en_spmode == 0 ? false : true;
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
		if (!('en_ipw_sep' in this.config)) this.config.en_ipw_sep = 0;
		return this.config.en_ipw_sep == 0 ? false : true;
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
		if (!('en_scdltmr' in this.config)) this.config.en_scdltmr = 0;
		return this.config.en_scdltmr == 0 ? false : true;
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
		if (!('en_mompow' in this.config)) this.config.en_mompow = 0;
		return this.config.en_mompow == 0 ? false : true;
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
		if (!('en_patrol' in this.config)) this.config.en_patrol = 0;
		return this.config.en_patrol == 0 ? false : true;
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
		if (!('en_airside' in this.config)) this.config.en_airside = 0;
		return this.config.en_airside ? true : false;
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
		if (!('en_quick_timer' in this.config)) this.config.en_quick_timer = 0;
		return this.config.en_quick_timer == 0 ? false : true;
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
		if (!('en_auto' in this.config)) this.config.en_auto = 0;
		return this.config.en_auto == 0 ? false : true;
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
		if (!('en_dry' in this.config)) this.config.en_dry = 0;
		return this.config.en_dry ? true : false;
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
		if (!('en_common_zone' in this.config)) this.config.en_common_zone = 0;
		return this.config.en_common_zone == 0 ? false : true;
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
		if (!('cool_l' in this.config)) this.config.cool_l = 0;
		return this.config.cool_l;
	}


	/**
	 * @description Set low cool
	 * @param {Number} low
	 * @return {void}
	 */
	setCoolL(low)
	{
		this.config.cool_l = low;
	}


	/**
	 * @description Get high cool
	 * @returns {Number}
	 */
	getCoolH()
	{
		if (!('cool_h' in this.config)) this.config.cool_h = 0;
		return this.config.cool_h;
	}


	/**
	 * @description Set high Cool
	 * @param {Number} high
	 * @returns {void}
	 */
	setCoolH(high)
	{
		this.config.cool_h = high;
	}


	/**
	 * Get low heat
	 * @returns {Number}
	 */
	getHeatL()
	{
		if (!('heat_l' in this.config)) this.config.heat_l = 0;
		return this.config.heat_l;
	}


	/**
	 * Set low heat
	 * @param {Number} low
	 * @returns {void}
	 */
	setHeatL(low)
	{
		this.config.heat_l = low;
	}


	/**
	 * @description Get high Heat
	 * @returns {Number}
	 */
	getHeatH()
	{
		if (!('heat_h' in this.config)) this.config.heat_h = 0;
		return this.config.heat_h;
	}


	/**
	 * @description Set high heat
	 * @param {Number} high
	 * @returns {void}
	 */
	setHeatH(high)
	{
		this.config.heat_h = high;
	}


	/**
	 * @description Get fan rate steps
	 * @returns {Number}
	 */
	getFratesteps()
	{
		if (!('frate_steps' in this.config)) this.config.frate_steps = 0;
		return this.config.frate_steps;
	}


	/**
	 * @description Set fan rate steps
	 * @param {Number} steps
	 * @returns {void}
	 */
	setFratesteps(steps)
	{
		this.config.frate_steps = steps;
	}


	/**
	 * @description Determine if auto fan rate is enabled
	 * @returns {Boolean}
	 */
	getEnFrateAuto()
	{
		if (!('en_frate_auto' in this.config)) this.config.en_frate_auto = 0;
		return this.config.en_frate_auto == 0 ? false : true;
	}


	/**
	 * @description Determine if special mode enabled
	 * @returns {Boolean}
	 */
	getEnSpMode()
	{
		if (!('en_spmode' in this.config)) this.config.en_spmode = 0;
		return this.config.en_spmode == 0 ? false : true;
	}


	/**
	 * @description Get special mode
	 * @returns {Boolean}
	 */
	getSpMode()
	{
		if (!('spmode' in this.config)) this.config.spmode = 0;
		return this.config.spmode == 0 ? false : true;
	}


	/**
	 * @description Get special mode kind
	 * @returns {string}
	 */
	getSpModeKind()
	{
		if (!('spmode_kind' in this.config)) return false;
		let kinds = ['Streamer', 'Powerful', 'Eco'];
		return kinds[this.config.spmode_kind];
	}


	/**
	 * @description Get advanced special mode kind
	 * @returns {string}
	 */
	getAdvanced()
	{
		if (!('adv' in this.config)) this.config.adv = '';
		let modes = {
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
