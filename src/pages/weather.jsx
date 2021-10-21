import { WeatherItem } from "../components/weatheritem"
import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/usefetch"
import { URL_5_DAY } from "../services/weatherservice";

export const Weather = () => {
  const { woeid } = useParams()
  console.log(woeid)
  const { data } = useFetch(URL_5_DAY + woeid)

  return (
    <>
      <header className="text-center">
        <h1>6 Days Forecast</h1>
        <h2> {data.length === 0 ? "Loading..." : data.title} </h2>
      </header>
      <main className="grid grid-cols-8">
        <div></div>
        <div className="col-span-6">
          {data.length === 0 ? <div className="text-center">Loading...</div> : 
          <div className="grid grid-cols-3">
            <div className="m-2">
              <WeatherItem data={data.consolidated_weather[0]} />
            </div>
            <div className="m-2">
              <WeatherItem data={data.consolidated_weather[1]} />
            </div>
            <div className="m-2">
              <WeatherItem data={data.consolidated_weather[2]} />
            </div>
            <div className="m-2">
              <WeatherItem data={data.consolidated_weather[3]} />
            </div>
            <div className="m-2">
              <WeatherItem data={data.consolidated_weather[4]} />
            </div>
            <div className="m-2">
              <WeatherItem data={data.consolidated_weather[5]} />
            </div>
          </div>
          }
        </div>
        <div></div>
        {/* <div className="w-2/3 grid grid-cols-3 justify-items-center">
          <div className="border-2 p-4 m-2">1</div>
          <div className="border-2 p-4 m-2">2</div>
          <div className="border-2 p-4 m-2">3</div>
          <div className="border-2 p-4 m-2">1</div>
          <div className="border-2 p-4 m-2">2</div>
          <div className="border-2 p-4 m-2">3</div>
        </div> */}
      </main>
    </>
  )





  // const whoidlist = [1062617]
  // const r = get5DayForecast(1062617)
  // return (
  //   <>
  //     <header className="text-center">
  //       <h1>6 Days Forecast</h1>
  //       <h2> {data.length === 0 ? "loading" : data.title} </h2>
  //     </header>
  //     <main className="grid grid-cols-5">
  //       <div></div>
  //       <div className="col-span-3">
  //         <CityItem CityName={"Singapore"} woeid={1062617} MinTemp={r.MinTemp} MaxTemp={33.5} isFav={true} />
  //         <CityItem CityName={"Singapore"} woeid={1062617} MinTemp={23.5} MaxTemp={33.5} isFav={false} />
  //         {//console.log(r)
  //         }
  //         <div></div>

  //       </div>
  //     </main>
  //   </>
  // );
};