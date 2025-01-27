# JSON to Daikin Wifi controller/adaptor

Controls Daikin air-conditioner wifi controller/adaptor via Node Red. *Tested with BRP15B61.*

## daikin-server (config node)

| Mode | Description |
| - | - |
| IP Address: | *{string}* Local IP of your Daikin Wifi adaptor. Eg: `192.168.1.123` |
| Auto mode | *{int}* ID of Auto mode. Eg: `0` |
| Fan mode | *{int}* ID of Fan mode. Eg: `3` |
| Heat mode | *{int}* ID of Heating mode. Eg: `1`|
| Cool mode | *{int}* ID of Cooling mode. Eg: `2`|
| Dry mode | *{int}* ID of Drying mode. Eg: `6`| 
| Dehumidifier mode | *{int}* ID of Dehumidifier mode. Eg: `3` |


Each aircon-unit maybe be setup with different IDs for the various modes. Here's some [documentation on possible values](https://github.com/ael-code/daikin-control), although my IDs don't match those docs, which is why I've made it user configurable.

## daikin-api node (command node)

On initial deploy the node will automatically sync with the wifi controller. But won't know the correct mode(s) till you set the IDs within the config node.

### Commands:

*General use only requires these two commands: `getControlInfo`  `setControlInfo`*

## Get control info:
Use this to fetch the status from the wifi controller. After the initial automatic sync you'll need to do this command periodically to keep the node / your flows in sync with the wifi controller.
```json
{
	"cmd": "getControlInfo"
}
```
The above payload will return something similar to this:
```json
{"Power":false,"Mode":"Heat","TargetTemperature":22,"FanRate":"Low","FanDirection":"Disabled"}
```

## Set control info:
Use this to send commands (set values) to the wifi controller. At least **one** of the following must be set: `Power, Mode, TargetTemperature, FanRate, FanDirection`
```json
{
	"cmd": "setControlInfo",
	"Power": true,
	"Mode": "Heat",
	"TargetTemperature": 22,
	"FanRate": "Low",
	"FanDirection": "Off"
}
```

| Param | Type | Description |
| - | - | - |
| Power | *{bool}* | `true/false` |
| Mode | *{string}* | `Auto/Heat/Cool/Dry/Dehumidifier/Fan` (!) |
| TargetTemperature | *{int}* | `0-100` degrees celsius |
| FanRate | *{string}* | `Auto/Silence/Low/1/2/3/4/5/Auto low/Auto mid/Auto high` (!) |
| FanDirection | *{string}* | `Off/Vertical/Horizontal/3D` (!) |

(!) Not all values are available on every system.

## Get sensor info:
Fetches temperature sensor info.
```json
{
	"cmd": "getSensorInfo"
}
```
The above payload will return something similar to this:
```json
{"OutsideTemperature":"Disabled","InsideTemperature":16}
```
On my unit `InsideTemperature` is measuring from a sensor within the roof space where the machine is. And `OutsideTemperature` is disabled. So not useful to determine indoor/outdoor temperatures, at least on my unit.

## Get zone setting
Fetches zone names, and ON/OFF status
```json
{
	"cmd": "getZoneSetting"
}
```
The above payload will return something similar to this:
```json
{"Zones": [0:"-",1:"-",2:"-",3:"-",4:"-",5:"-",6:"-",7:"-"],"On":[0:false,1:false,2:false,3:false,4:false,5:false,6:false,7:false]}
```


## Get config

Syncs with wifi controller, then returns all cached values of this node in human/pretty values

```json
{
	"cmd": "getConfig"
}
```

The above payload will return something similar to this:

```json
{"Power":true,"Mode":"Cool","TargetTemperature":22,"FanRate":"Low","FanDirection":"Disabled","OutsideTemperature":"Disabled","InsideTemperature":22,"ZoneNames":["-","-","-","-","-","-","-","-"],"ZoneStates":[false,false,false,false,false,false,false,false],"EnableZones":false,"EnableLinearZones":false,"EnableSetZones":true,"EnableCommonZone":false,"EnableAutoMode":false,"EnableDryMode":true,"EnableQuickTimer":true,"EnableFanRate":true,"EnableFanRateAuto":false,"EnableFanDirection":false,"EnableSpecialMode":false,"EnableCh":false,"EnableHolidayMode":false,"EnableCent":false,"EnableFilterSign":true,"EnableTemperatureSetting":true,"EnablePatrol":false,"EnableAirSide":false,"SpecialMode":"Disabled","Model":"NOTSUPPORT","Type":"aircon","Version":"1.2.1","Revision":23,"Name":"DaikinAP88703","ID":"Disabled","Errors":false,"Location":"Disabled","CountryCode":"au","Method":"home only","SSID":"DaikinAP88703","Mac":"DC:F5:05:F0:26:21","Port":30050,"AdapterKind":3,"AdaptorMode":"run","LED":true,"AcLED":true,"ErrorType":0,"ErrorCode":0,"HolidayMode":"Disabled","Operate":2,"LowPowerFlag":0,"SyncTime":0,"NoticeIpInt":0,"NoticeSyncInt":0,"BkAuto":2,"Dt1":22,"Dt2":22,"FanSteps":2,"FanDirection1":"Disabled","FanAirSide":"Disabled","AirSide1":"Disabled","AirSide2":"Disabled","FanAuto":"Disabled","Auto1":"Disabled","Auto2":"Disabled","FanDirection2":"Disabled","FilterSign":false,"Cent":"Disabled","NumRemotes":2,"Humidity":0,"TargetHumidity":7,"CoolTemperatureMin":16,"CoolTemperatureMax":32,"HeatTemperatureMin":16,"HeatTemperatureMax":32,"SpecialModeKind":"Disabled","AdvancedMode":"N/A"}
```

## Get raw config

Syncs with wifi controller, then returns all cached values of this in raw json

```json
{"ret":"OK","pow":"1","mode":"2","operate":"2","bk_auto":"2","stemp":"22","dt1":"22","dt2":"22","f_rate":"1","dfr1":"1","dfr2":"1","f_airside":"0","airside1":"0","airside2":"0","f_auto":"0","auto1":"0","auto2":"0","f_dir":"0","dfd1":"0","dfd2":"0","filter_sign_info":"0","cent":"0","en_cent":"0","remo":"2","err":"0","model":"NOTSUPPORT","type":"aircon","humd":"0","s_humd":"7","en_zone":"0","en_linear_zone":"0","en_filter_sign":"1","acled":"1","land":"0","elec":"0","temp":"1","m_dtct":"0","ac_dst":"au","dmnd":"0","en_temp_setting":"1","en_frate":"1","en_fdir":"0","en_rtemp_a":"0","en_spmode":"0","en_ipw_sep":"0","en_scdltmr":"0","en_mompow":"0","en_patrol":"0","en_airside":"0","en_quick_timer":"1","en_auto":"0","en_dry":"1","en_common_zone":"0","cool_l":"16","cool_h":"32","heat_l":"16","heat_h":"32","frate_steps":"2","en_frate_auto":"0","reg":"au","dst":"1","ver":"1_2_1","rev":"23","location":"0","name":"DaikinAP88703","icon":"0","method":"home only","port":"30050","id":"","pw":"","lpw_flag":"0","adp_kind":"3","led":"1","en_setzone":"1","mac":"DCF505F02621","adp_mode":"run","ssid":"DaikinAP88703","err_type":"0","err_code":"0","en_ch":"1","holiday":"0","en_hol":"0","sync_time":"0","htemp":"22","otemp":"-","zone_name":["-","-","-","-","-","-","-","-"],"zone_onoff":["0","0","0","0","0","0","0","0"]}
```

## Get raw:
Get or set raw values on the wifi controller, using json. *Useful for debugging your `Mode IDs` for the config node.*

If anyone has a unit with vents controllable via the wifi controller, or other values that need setting/getting. I'd like to work with you in updating this package, by opening an Issue on github!

| Endpoint | Description |
| - | - |
| basic_info | Provides Daikin account information (security issue!), software version, mac address and generic info |
| get_remote_method | Provides information about polling system |
| set_remote_method | Set information on the polling system (reduce remote time update ??) |
| get_model_info | Provides model information |
| set_control_info | Main endpoint to set status parameters (control almost all) |
| get_control_info | Main endpoint to request all current status parameters |
| get_sensor_info | Provides information on sensors (temperatures, humidity, power consumption) |
| get_timer | Provides information on timer  |
| set_timer | Set timer |
| get_price | Provides information about cost of running? |
| set_price | Set value/s about cost of running?  |
| get_target | ? |
| set_target | ? |
| get_week_power | Provides weekly and today runtime information (in mn) |
| get_year_power | Provides yearly runtime information |
| get_program | Get schedule information |
| set_program | Set schedule |
| get_scdltimer | Provides information about on/off weekly timer |
| set_scdltimer | Set on/off weekly timer |
| get_notify | ? |
| set_notify | ? |
| set_regioncode | Set region code |
| set_led | Set LED but doesn't work? |
| reboot | Reboot the Wifi controller |
| get_zone_setting | Provides zone names, and ON/OFF status |
| set_zone_setting | Set zone names, and ON/OFF status |


```json
{
	"cmd": "getRaw",
	"endpoint": "get_control_info",
	"data": null
}
```

The above payload will return something similar to what's shown below. Use this [documentation](https://github.com/ael-code/daikin-control) to determine their meaning:

```json
{"ret":"OK","pow":"0","mode":"1","operate":"1","bk_auto":"2","stemp":"22","dt1":"22","dt2":"22","f_rate":"1","dfr1":"1","dfr2":"1","f_airside":"0","airside1":"0","airside2":"0","f_auto":"0","auto1":"0","auto2":"0","f_dir":"0","dfd1":"0","dfd2":"0","filter_sign_info":"0","cent":"0","en_cent":"0","remo":"2"}
```
