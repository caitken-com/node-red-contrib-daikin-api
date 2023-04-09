# JSON to Daikin BRP15B61 Wifi controller

Controls Daikin air-conditioner wifi controller/adaptor via Node Red. *Tested with BRP15B61.*

## daikin-server (config node)

**IP Address:** *[string]* Local IP of your BRP15B61 Wifi adaptor. Eg: `192.168.1.123`
**Auto mode** *[int]* ID of auto mode.
**Fan mode:** *[int]* ID of Fan mode.
**Heat mode:** *[int]* ID of Heating mode.
**Cool mode:** *[int]* ID of Cooling mode.
**Dry mode:** *[int]* ID of Drying.
**Dehumidifier mode:** *[int]* ID Dehumidifier mode.

Each aircon-unit maybe be setup with different IDs for the various modes. Here's some [documentation on possible values](https://github.com/ael-code/daikin-control), although my IDs don't match that which is why I've made it a config.

## daikin-api node (command node)

On initial deploy the node will automatically sync with the wifi controller. But won't know the correct mode(s) till you set the IDs within the config node.

### Commands:

*General use only requires these two commands: `getControlInfo`  `setControlInfo`*

## Get control info:
Use this to sync with wifi controller. After the initial sync you'll need this do this command periodically to keep the node / your flows in sync with the wifi controller.
```
{
	"cmd": "getControlInfo"
}
```
The above payload will return something similar to this:
```
{"Power":false,"Mode":"Heat","TargetTemperature":22,"FanRate":"Low","FanDirection":"Disabled"}
```

## Set control info:
Use this to send commands to the wifi controller. At least **one** of the following must be set: `Power, Mode, TargetTemperature, FanRate, FanDirection`
```
{
	"cmd": "setControlInfo",
	"Power": true,
	"Mode": "Heat",
	"TargetTemperature": 22
	"FanRate": "Low"
	"FanDirection": "Off"
}
```
**Power:** *[bool]* `true|false`
**Mode:** *[string]* `Auto|Heat|Cool|Dry|Dehumidifier|Fan` (!)
**TargetTemperature:** *[int]* `0-100` degrees celsius
**FanRate:** [string] `Auto|Silence|Low|1|2|3|4|5|Auto low|Auto mid|Auto high|` (!)
**FanDirection:** [string] `Off|Vertical|Horizontal|3D` (!)

(!) Not all options are available on every system.

## Get sensor info:
Fetches temperature sensor info.
```
{
	"cmd": "getSensorInfo"
}
```
The above payload will return something similar to this:
```
{"OutsideTemperature":"Disabled","InsideTempature":16}
```
On my unit `InsideTempature` is measuring from a sensor within the roof space where the machine is. And  `OutsideTemperature` is disabled. So not useful to determine indoor/outdoor temperatures.

## Get raw:
Get or set raw values on the wifi controller, using json. Useful for debugging your *Mode IDs* for the config node.
```
{
	"cmd: "getRaw",
	"endpoint": "get_control_info"
	"data": null
}
```
**Known endpoints:**

 - basic_info
 - get_remote_method
 - set_remote_method
 - get_model_info
 - get_timer
 - set_timer
 -  get_target
 - set_target
 -  get_week_power
 -  get_year_power
 -  get_program
 -  set_program
 - get_scdltimer
 -  set_scdltimer
 -  get_sensor_info
 - set_control_info
 -  get_control_info

The above payload will return something similar to this. Use this [documentation](https://github.com/ael-code/daikin-control) to determine their meaning:
```
{"ret":"OK","pow":"0","mode":"1","operate":"1","bk_auto":"2","stemp":"22","dt1":"22","dt2":"22","f_rate":"1","dfr1":"1","dfr2":"1","f_airside":"0","airside1":"0","airside2":"0","f_auto":"0","auto1":"0","auto2":"0","f_dir":"0","dfd1":"0","dfd2":"0","filter_sign_info":"0","cent":"0","en_cent":"0","remo":"2"}
```

If anyone has a unit with vents controllable via the wifi controller, or other values that need setting/getting, I'd like to work with you in extending this node: Open an Issue on github!
