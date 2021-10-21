import { Link } from "react-router-dom"
import { BsThermometerLow, BsThermometerHigh, BsExclamationTriangle } from "react-icons/bs"
import { WiHumidity, WiStrongWind, WiBarometer, WiDaySnowWind, WiDaySleet, WiDayHail, WiDayThunderstorm, WiDayRainWind, WiDayShowers, WiDaySprinkle, WiDayCloudy, WiDaySunnyOvercast, WiDaySunny, WiCloudy } from "react-icons/wi";

const selectCloud = (type, size) =>
{
  switch(type)
  {
    case "sn":
      return <WiDaySnowWind size={size} />
    case "sl":
      return <WiDaySleet size={size} />
    case "h":
      return <WiDayHail size={size} />
    case "t":
      return <WiDayThunderstorm size={size} />
    case "hr":
      return <WiDayRainWind size={size} />
    case "lr":
      return <WiDayShowers size={size} />
    case "s":
      return <WiDaySprinkle size={size} />
    case "hc":
      return <WiCloudy size={size} />
    case "lc":
      return <WiDayCloudy size={size} />
    case "c":
      return <WiDaySunny size={size} />
    default:
      return <BsExclamationTriangle size={size} />
  }
}

const iconFieldSet = (icon, text) => 
{
  return(
    <div className="flex flex-row">
      <div className="m-1">
        {icon}
      </div>
      <div className="m-1">
        {text}
      </div>
    </div>
  )
}

const convertDate = function (d) 
{
  let e = new Date(d)
  return e.toLocaleString('en-GB', { day: 'numeric', month: 'short' })
}

export const WeatherItem = ({data}) => 
{
  return (
      <div className="flex flex-col border-2 p-4 m-2 rounded-xl">
        <div className="m-2 flex-grow">
          <h2 className="text-center">{convertDate(data.applicable_date) }</h2>
        </div>
        <div className="m-2 flex justify-center">
          {selectCloud(data.weather_state_abbr, "8em")}
        </div>

        {/* <div className="m-2">
          {iconFieldSet(<BsThermometerLow size={"1.5em"} />, data.min_temp.toFixed(1))}
        </div>
        <div className="m-2">
          {iconFieldSet(<BsThermometerHigh size={"1.5em"} />, data.max_temp.toFixed(1))}
        </div>
        <div className="m-2">
          {iconFieldSet(<WiHumidity size={"1.5em"} />, data.humidity )}
        </div>
        <div className="m-2">
          {iconFieldSet(<WiStrongWind size={"1.5em"} />, data.wind_speed.toFixed(1)*1.6 + " kmh (" + data.wind_direction_compass + ")")}
        </div> */}



        <div className="flex flex-row">
          <div className="m-2">
            {iconFieldSet(<BsThermometerLow size={"1.5em"} />, data.min_temp.toFixed(1))}
          </div>
          <div className="m-2">
            {iconFieldSet(<BsThermometerHigh size={"1.5em"} />, data.max_temp.toFixed(1))}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="m-2">
            {iconFieldSet(<WiHumidity size={"1.5em"} />, data.humidity )}
          </div>
          <div className="m-2">
            {iconFieldSet(<WiBarometer size={"1.5em"} />, data.air_pressure.toFixed(1))}
          </div>
        </div>
        <div className="flex flex-row">
          <div className="m-2">
            {iconFieldSet(<WiStrongWind size={"1.5em"} />, (data.wind_speed*1.6).toFixed(1) + " kmh (" + data.wind_direction_compass + ")")}
          </div>
        </div>
        <div className="m-2">
        </div>
      </div>
  );
};