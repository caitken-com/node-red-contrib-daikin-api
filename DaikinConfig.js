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
	 * Get power mode
	 * @returns {Bool}
	 */
	getPower()
	{
		if (!('pow' in this.config)) this.config.pow = 0;
		return this.config.pow == 0 ? false : true;
	}


	/**
	 * Set power mode
	 * @param {Bool}
	 * @return {void}
	 */
	setPower(bool)
	{
		this.config.pow = bool ? 1 : 0;
	}


	/**
	 * Get type
	 * @returns {String}
	 */
	getType()
	{
		if (!('type' in this.config)) this.config.type = 0;
		return this.config.type;
	}


	/**
	 * Set type
	 * @param {String}
	 * @return {void}
	 */
	setType(str)
	{
		this.config.type = str;
	}


	/**
	 * Get country code
	 * @returns {String}
	 */
	getReg()
	{
		if (!('reg' in this.config)) this.config.reg = '';
		return this.config.reg;
	}


	/**
	 * Set country code
	 * @param {String} str
	 * @returns {void}
	 */
	setReg(str)
	{
		this.config.reg = str;
	}


	getDst()
	{
		if (!('dst' in this.config)) this.config.dst = 0;
		return this.config.dst;
	}


	setDst(dst)
	{
		this.config.dst = dst;
	}


	getVer()
	{
		if (!('ver' in this.config)) this.config.ver = 0;
		return this.config.ver;
	}


	setVer(ver)
	{
		this.config.ver = ver;
	}


	getRev()
	{
		if (!('rev' in this.config)) this.config.rev = 0;
		return this.config.rev;
	}


	setRev(rev)
	{
		this.config.rev = rev;
	}


	getErr()
	{
		if (!('err' in this.config)) this.config.err = 0;
		return this.config.err;
	}


	setErr(err)
	{
		this.config.err = err;
	}


	/**
	 * Get country code
	 * @returns {String}
	 */
	getLocation()
	{
		if (!('location' in this.config)) this.config.location = '';
		return this.config.location;
	}


	/**
	 * Set country code
	 * @param {String} str
	 * @returns {void}
	 */
	setLocation(str)
	{
		this.config.location = str;
	}


	/**
	 * Get model name
	 *
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
	 * Set model name
	 *
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


	getIcon()
	{
		if (!('icon' in this.config)) this.config.icon = 0;
		return this.config.icon;
	}


	setIcon(icon)
	{
		this.config.icon = icon;
	}


	getMethod()
	{
		if (!('method' in this.config)) this.config.method = 0;
		return this.config.method;
	}


	setMethod(method)
	{
		this.config.method = method;
	}


	getPort()
	{
		if (!('port' in this.config)) this.config.port = 0;
		return this.config.port;
	}


	setPort(port)
	{
		this.config.port = port;
	}


	getId()
	{
		if (!('id' in this.config)) this.config.id = 0;
		return this.config.id;
	}


	setId(id)
	{
		this.config.id = id;
	}


	getLpwflag()
	{
		if (!('lpw_flag' in this.config)) this.config.lpw_flag = 0;
		return this.config.lpw_flag;
	}


	setLpwflag(flag)
	{
		this.config.lpw_flag = flag;
	}


	getAdpkind()
	{
		if (!('adp_kind' in this.config)) this.config.adp_kind = 0;
		return this.config.adp_kind;
	}


	setAdpkind(kind)
	{
		this.config.adp_kind = kind;
	}


	/**
	 * Get LED status
	 * @returns {Boolean}
	 */
	getLed()
	{
		if (!('led' in this.config)) this.config.led = 0;
		return this.config.led == 0 ? false : true;
	}


	/**
	 * Set LED status
	 * @returns {void}
	 */
	setLed(bool)
	{
		this.config.led = bool ? 1 : 0;
	}


	/**
	 * Get enable set zone
	 * @returns {Boolean}
	 */
	getEnSetZone()
	{
		if (!('en_setzone' in this.config)) this.config.en_setzone = 0;
		return this.config.en_setzone == 0 ? false : true;
	}


	/**
	 * Set enable set zone
	 * @returns {void}
	 */
	setEnSetZone(bool)
	{
		this.config.en_setzone = bool ? 1 : 0;
	}


	getMac()
	{
		if (!('mac' in this.config)) this.config.mac = 0;
		return this.config.mac;
	}


	setMac(mac)
	{
		this.config.mac = mac;
	}


	getAdpmode()
	{
		if (!('adp_mode' in this.config)) this.config.adp_mode = 0;
		return this.config.adp_mode;
	}


	setAdpmode(mode)
	{
		this.config.adp_mode = mode;
	}


	getSsid()
	{
		if (!('ssid' in this.config)) this.config.ssid = 0;
		return this.config.ssid;
	}


	setSsid(id)
	{
		this.config.ssid = id;
	}


	getErrtype()
	{
		if (!('err_type' in this.config)) this.config.err_type = 0;
		return this.config.err_type;
	}


	setErrtype(type)
	{
		this.config.err_type = type;
	}


	getErrcode()
	{
		if (!('err_code' in this.config)) this.config.err_code = 0;
		return this.config.err_code;
	}


	setErrcode(code)
	{
		this.config.err_code = code;
	}


	getEnch()
	{
		if (!('ench' in this.config)) this.config.ench = 0;
		return this.config.ench == 0 ? false : true;
	}


	setEnch(bool)
	{
		this.config.ench = bool ? 1 : 0;
	}


	/**
	 * Get holiday mode
	 * @return {Boolean}
	 */
	getHoliday()
	{
		if (!('holiday' in this.config)) this.config.holiday = 0;
		return this.config.holiday == 0 ? false : true;
	}


	/**
	 * Set holiday mode
	 * @param {Boolean} bool
	 * @return {void}
	 */
	setHoliday(bool)
	{
		this.config.holiday = bool ? 1 : 0;
	}


	/**
	 * Get enable holiday mode
	 * @return {Boolean}
	 */
	getEnhol()
	{
		if (!('en_hol' in this.config)) this.config.en_hol = 0;
		return this.config.en_hol == 0 ? false : true;
	}


	/**
	 * Set enable holiday mode
	 * @param {Boolean} bool
	 * @return {void}
	 */
	setEnhol(bool)
	{
		this.config.en_hol = bool ? 1 : 0;
	}


	getSynctime()
	{
		if (!('sync_time' in this.config)) this.config.sync_time = 0;
		return this.config.sync_time;
	}


	setSynctime(time)
	{
		this.config.sync_time = time;
	}


	getNoticeIpInt()
	{
		if (!('notice_ip_int' in this.config)) this.config.notice_ip_int = 0;
		return parseInt(this.config.notice_ip_int);
	}


	settNoticeIpInt(int)
	{
		this.config.notice_ip_int = parseInt(int);
	}


	getNoticesyncint()
	{
		if (!('notice_sync_int' in this.config)) this.config.notice_sync_int = 0;
		return parseInt(this.config.notice_sync_int);
	}


	setNoticesyncint(int)
	{
		this.config.notice_sync_int = parseInt(int);
	}


	getMode()
	{
		if (!('mode' in this.config)) this.config.mode = 0;
		return parseInt(this.config.mode);
	}


	setMode(mode)
	{
		this.config.mode = parseInt(mode);
	}


	getOperate()
	{
		if (!('operate' in this.config)) this.config.operate = 0;
		return this.config.operate == 0 ? false : true;
	}


	setOperate(bool)
	{
		this.config.operate = bool ? 1 : 0;
	}


	getBkauto()
	{
		if (!('bk_auto' in this.config)) this.config.bk_auto = 0;
		return parseInt(this.config.bk_auto);
	}


	setBkauto(int)
	{
		this.config.bk_auto = parseInt(int);
	}


	/**
	 * @description Get Target temperature
	 * @package DaikinConfig
	 * @returns {number}
	 */
	getStemp()
	{
		if (!('stemp' in this.config)) this.config.stemp = '-';
		return parseInt(this.config.stemp);
	}


	/**
	 * @description Set Target temperature
	 * @package DaikinConfig
	 * @param {number} int
	 * @returns {void}
	 */
	setStemp(int)
	{
		this.config.stemp = isNaN(parseInt(int)) ? '-' : parseInt(int);
	}


	/**
	 * @description Get outside temperature
	 * @returns {int}
	 */
	getOtemp()
	{
		if (!('otemp' in this.config)) this.config.otemp = '-';
		return parseInt(this.config.otemp);
	}


	/**
	 * @description Set outside temperature
	 * @param {int} int
	 */
	setOtemp(int)
	{
		this.config.otemp = isNaN(parseInt(int)) ? '-' : parseInt(int);
	}


	/**
	 * @description Get inside temperature
	 * @returns {int}
	 */
	getHtemp()
	{
		if (!('htemp' in this.config)) this.config.htemp = '-';
		return parseInt(this.config.htemp);
	}


	/**
	 * @description Set inside temperature
	 * @param {int} int
	 */
	setHtemp(int)
	{
		this.config.htemp = isNaN(parseInt(int)) ? '-' : parseInt(int);
	}


	getDt1()
	{
		if (!('dt1' in this.config)) this.config.dt1 = 0;
		return this.config.dt1;
	}


	setDt1(dt)
	{
		this.config.dt1 = dt;
	}


	getDt2()
	{
		if (!('dt2' in this.config)) this.config.dt2 = 0;
		return this.config.dt2;
	}


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

		this.config.f_rate = vals.indexOf(rate);
	}


	getDfr1()
	{
		if (!('dfr1' in this.config)) this.config.dfr1 = 0;
		return this.config.dfr1;
	}


	setDfr1(rate)
	{
		this.config.dfr1 = rate;
	}


	getDfr2()
	{
		if (!('dfr2' in this.config)) this.config.dfr2 = 0;
		return this.config.dfr2;
	}


	setDfr2(rate)
	{
		this.config.dfr2 = rate;
	}


	getFairside()
	{
		if (!('f_airside' in this.config)) this.config.f_airside = 0;
		return this.config.f_airside;
	}


	setFairside(side)
	{
		this.config.f_airside = side;
	}


	getAirside1()
	{
		if (!('airside1' in this.config)) this.config.airside1 = 0;
		return this.config.airside1;
	}


	setAirside1(side)
	{
		this.config.airside1 = side;
	}


	getAirside2()
	{
		if (!('airside2' in this.config)) this.config.airside2 = 0;
		return this.config.airside2;
	}


	setAirside2(side)
	{
		this.config.airside2 = side;
	}


	getFauto()
	{
		if (!('f_auto' in this.config)) this.config.f_auto = 0;
		return this.config.f_auto;
	}


	setFauto(auto)
	{
		this.config.f_auto = auto;
	}


	getAuto1()
	{
		if (!('auto1' in this.config)) this.config.auto1 = 0;
		return this.config.auto1;
	}


	setAuto1(auto)
	{
		this.config.auto1 = auto;
	}


	getAuto2()
	{
		if (!('auto2' in this.config)) this.config.auto2 = 0;
		return this.config.auto2;
	}


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
		this.config.f_dir = vals.indexOf(direction);
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
		this.config.dfd1 = vals.indexOf(direction);
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
		this.config.dfd2 = vals.indexOf(direction);
	}


	/**
	 * @description is filter warning showing
	 * @returns {bool}
	 */
	getFiltersigninfo()
	{
		if (!('filter_sign_info' in this.config)) this.config.filter_sign_info = 0;
		return this.config.filter_sign_info == 0 ? false : true;
	}


	/**
	 * @description Set filter warning
	 * @param {bool} show
	 * @returns {void}
	 */
	setFiltersigninfo(show)
	{
		this.config.filter_sign_info = show ? 1 : 0;
	}


	getCent()
	{
		if (!('cent' in this.config)) this.config.cent = 0;
		return this.config.cent;
	}


	setCent(cent)
	{
		this.config.cent = cent;
	}


	getEncent()
	{
		if (!('en_cent' in this.config)) this.config.en_cent = 0;
		return this.config.en_cent;
	}


	setEncent(cent)
	{
		this.config.en_cent = cent;
	}


	getRemo()
	{
		if (!('remo' in this.config)) this.config.remo = 0;
		return this.config.remo;
	}


	setRemo(remo)
	{
		this.config.remo = remo;
	}


	getModel()
	{
		if (!('model' in this.config)) this.config.model = 0;
		return this.config.model;
	}


	setModel(model)
	{
		this.config.model = model;
	}


	getHumd()
	{
		if (!('humd' in this.config)) this.config.humd = 0;
		return this.config.humd;
	}


	setHumd(hum)
	{
		this.config.humd = hum;
	}


	getShumd()
	{
		if (!('s_humd' in this.config)) this.config.s_humd = 0;
		return this.config.s_humd;
	}


	setShumd(hum)
	{
		this.config.s_humd = hum;
	}


	getEnzone()
	{
		if (!('en_zone' in this.config)) this.config.en_zone = 0;
		return this.config.en_zone;
	}


	setEnzone(zone)
	{
		this.config.en_zone = zone;
	}


	getEnlinearzone()
	{
		if (!('en_linear_zone' in this.config)) this.config.en_linear_zone = 0;
		return this.config.en_linear_zone;
	}


	setEnlinearzone(zone)
	{
		this.config.en_linear_zone = zone;
	}


	getEnfiltersign()
	{
		if (!('en_filter_sign' in this.config)) this.config.en_filter_sign = 0;
		return this.config.en_filter_sign;
	}


	setEnfiltersign(sign)
	{
		this.config.en_filter_sign = sign;
	}


	getAcled()
	{
		if (!('acled' in this.config)) this.config.acled = 0;
		return this.config.acled;
	}


	setAcled(led)
	{
		this.config.acled = led;
	}


	getLand()
	{
		if (!('land' in this.config)) this.config.land = 0;
		return this.config.land;
	}


	setLand(land)
	{
		this.config.land = land;
	}


	getElec()
	{
		if (!('elec' in this.config)) this.config.elec = 0;
		return this.config.elec;
	}


	setElec(elec)
	{
		this.config.elec = elec;
	}


	getTemp()
	{
		if (!('temp' in this.config)) this.config.temp = 0;
		return this.config.temp;
	}


	setTemp(temp)
	{
		this.config.temp = temp;
	}


	getMdtct()
	{
		if (!('m_dtct' in this.config)) this.config.m_dtct = 0;
		return this.config.m_dtct
	}


	setMdtct(dtct)
	{
		this.config.m_dtct = dtct;
	}


	getAcdst()
	{
		if (!('ac_dst' in this.config)) this.config.ac_dst = 0;
		return this.config.ac_dst;
	}


	setAcdst(dst)
	{
		this.config.ac_dst = dst;
	}


	getDmnd()
	{
		if (!('dmnd' in this.config)) this.config.dmnd = 0;
		return this.config.dmnd;
	}


	setDmnd(dmnd)
	{
		this.config.dmnd = dmnd;
	}


	getEnTempSetting()
	{
		if (!('en_temp_setting' in this.config)) this.config.en_temp_setting = 0;
		return this.config.en_temp_setting == 0 ? false : true;
	}


	setEnTempSetting(bool)
	{
		this.config.en_temp_setting = bool ? 1 : 0;
	}


	getEnfrate()
	{
		if (!('en_frate' in this.config)) this.config.en_frate = 0;
		return this.config.en_frate == 0 ? false : true;
	}


	setEnfrate(bool)
	{
		this.config.en_frate = bool ? 1 : 0;
	}


	getEnfdir()
	{
		if (!('en_fdir' in this.config)) this.config.en_fdir = 0;
		return this.config.en_fdir == 0 ? false : true;
	}


	setEnfdir(bool)
	{
		this.config.en_fdir = bool ? 1 : 0;
	}


	getEnrtempa()
	{
		if (!('en_rtemp_a' in this.config)) this.config.en_rtemp_a = 0;
		return this.config.en_rtemp_a == 0 ? false : true;
	}


	setEnrtempa(bool)
	{
		this.config.en_rtemp_a = bool ? 1 : 0;
	}


	getEnspmode()
	{
		if (!('en_spmode' in this.config)) this.config.en_spmode = 0;
		return this.config.en_spmode == 0 ? false : true;
	}


	setEnspmode(bool)
	{
		this.config.en_spmode = bool ? 1 : 0;
	}


	getEnipwsep()
	{
		if (!('en_ipw_sep' in this.config)) this.config.en_ipw_sep = 0;
		return this.config.en_ipw_sep == 0 ? false : true;
	}


	setEnipwsep(bool)
	{
		this.config.en_ipw_sep = bool ? 1 : 0;
	}


	getEnscdltmr()
	{
		if (!('en_scdltmr' in this.config)) this.config.en_scdltmr = 0;
		return this.config.en_scdltmr == 0 ? false : true;
	}


	setEnscdltmr(bool)
	{
		this.config.en_scdltmr = bool ? 1 : 0;
	}


	getEnmompow()
	{
		if (!('en_mompow' in this.config)) this.config.en_mompow = 0;
		return this.config.en_mompow == 0 ? false : true;
	}


	setEnmompow(bool)
	{
		this.config.en_mompow = bool ? 1 : 0;
	}


	getEnpatrol()
	{
		if (!('en_patrol' in this.config)) this.config.en_patrol = 0;
		return this.config.en_patrol == 0 ? false : true;
	}


	setEnpatrol(bool)
	{
		this.config.en_patrol = bool ? 1 : 0;
	}


	getEnairside()
	{
		if (!('en_airside' in this.config)) this.config.en_airside = 0;
		return this.config.en_airside ? true : false;
	}


	setEnairside(bool)
	{
		this.config.en_airside = bool ? 1 : 0;
	}


	getEnquicktimer()
	{
		if (!('en_quick_timer' in this.config)) this.config.en_quick_timer = 0;
		return this.config.en_quick_timer == 0 ? false : true;
	}


	setEnquicktimer(bool)
	{
		this.config.en_quick_timer = bool ? 1 : 0;
	}


	getEnauto()
	{
		if (!('en_auto' in this.config)) this.config.en_auto = 0;
		return this.config.en_auto == 0 ? false : true;
	}


	setEnauto(bool)
	{
		this.config.en_auto = bool ? 1 : 0;
	}


	getEndry()
	{
		if (!('en_dry' in this.config)) this.config.en_dry = 0;
		return this.config.en_dry ? true : false;
	}


	setEndry(bool)
	{
		this.config.en_dry = bool ? 1 : 0;
	}


	getEnCommonZone()
	{
		if (!('en_common_zone' in this.config)) this.config.en_common_zone = 0;
		return this.config.en_common_zone == 0 ? false : true;
	}


	setEnCommonZone(bool)
	{
		this.config.en_common_zone = bool ? 1 : 0;
	}


	getCoolL()
	{
		if (!('cool_l' in this.config)) this.config.cool_l = 0;
		return this.config.cool_l;
	}


	setCoolL(cool)
	{
		this.config.cool_l = cool;
	}


	getCoolH()
	{
		if (!('cool_h' in this.config)) this.config.cool_h = 0;
		return this.config.cool_h;
	}


	setCoolH(cool)
	{
		this.config.cool_h = cool;
	}


	getHeatL()
	{
		if (!('heat_l' in this.config)) this.config.heat_l = 0;
		return this.config.heat_l;
	}


	setHeatl(heat)
	{
		this.config.heat_l = heat;
	}


	getHeatH()
	{
		if (!('heat_h' in this.config)) this.config.heat_h = 0;
		return this.config.heat_h;
	}


	setHeatH(heat)
	{
		this.config.heat_h = heat;
	}


	getFratesteps()
	{
		if (!('frate_steps' in this.config)) this.config.frate_steps = 0;
		return this.config.frate_steps;
	}


	setFratesteps(steps)
	{
		this.config.frate_steps = steps;
	}


	getEnFrateAuto()
	{
		if (!('en_frate_auto' in this.config)) this.config.en_frate_auto = 0;
		return this.config.en_frate_auto == 0 ? false : true;
	}


	/**
	 * @description Is special mode enabled
	 * @returns {bool}
	 */
	getEnSpMode()
	{
		if (!('en_spmode' in this.config)) this.config.en_spmode = 0;
		return this.config.en_spmode == 0 ? false : true;
	}


	/**
	 * @description Get special mode
	 * @returns {bool}
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
	 * @description Get special mode kind
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
