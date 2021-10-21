import { Link } from "react-router-dom"
import {BsThermometerLow, BsThermometerHigh, BsHeart, BsHeartFill, BsChevronDoubleRight} from "react-icons/bs"

//export const CityItem = ({CityName, woeid, MinTemp, MaxTemp, isFav}) => {
export const CityItem = ({data}) => {
  return (
      <div className="flex flex-row border-2 p-4 m-2 rounded-xl">
        <div className="m-2 flex-grow">
          <h2>{data.title}</h2>
        </div>
        <div className="m-2">
          <BsThermometerLow size={"1.5em"} />
        </div>
        <div className="m-2">
          {data.consolidated_weather[0].min_temp.toFixed(1)}
        </div>
        <div className="m-2">
          <BsThermometerHigh size={"1.5em"} />
        </div>
        <div className="m-2">
          {data.consolidated_weather[0].min_temp.toFixed(1)}
        </div>
        <div className="m-2">
          {/*data.isFav ? <button><BsHeartFill size={"1.5em"} /></button> : <button><BsHeart size={"1.5em"} /></button> */}
          <button onClick={() => {data.isFav = !data.isFav}}> {data.isFav ? <BsHeartFill size={"1.5em"} /> : <BsHeart size={"1.5em"} />} </button>
        </div>
        <div className="m-2">
          <Link to={`/w/${data.woeid}`}>
            <BsChevronDoubleRight size={"1.5em"} />
          </Link>
        </div>
      </div>
  );
};