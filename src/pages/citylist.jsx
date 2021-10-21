import { Link } from "react-router-dom"
import { CityItem } from "../components/cityitem"
//import { get5DayForecast } from "../services/weatherservice"
import { useState, useEffect } from 'react';
import { useFetch } from "../hooks/usefetch"
import { URL_5_DAY } from "../services/weatherservice";
//import { use5DayForecast } from "../hooks/use5dayforecast"

// const useFetch = (woeid) => 
// {
//   console.log("WOEID")
//   console.log(woeid)
//   const [data, setData] = useState(null)
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     fetch(URL_5_DAY + woeid)
//       .then(res => {
//         return res.json();
//       })
//       .then(data => {
//         setData(data);
//         setIsLoading(false);
//       })
//   }, [woeid])
//   return {data, isLoading}
// }
export const CityList = () => {
  //const [data, setData] = useState([])
  //const r = get5DayForecast(1062617)

  //const {data1, loading1} = useFetch(1062617)

  // const { data, status } = use5DayForecast(1062617)

  // const [data1, setData1] = useState(null)

  // useEffect(() => {
  //   // GET request using fetch inside useEffect React hook
  //   fetch(URL_5_DAY + "1062617")
  //       .then(response => response.json())
  //       .then(data => 
  //         {
  //           setData1(data)
  //           console.log(data)
  //         });
  // // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  const {data: data1} = useFetch(URL_5_DAY + 1062617) // SG
  const {data: data2} = useFetch(URL_5_DAY + 1154781) // Kuala Lumpur
  const {data: data3} = useFetch(URL_5_DAY + 2295424) // Chennai
  const {data: data4} = useFetch(URL_5_DAY + 2151330) // Beijing
  const {data: data5} = useFetch(URL_5_DAY + 1252431) // Ho Chi Minh City


  return (
    <>
      <header className="text-center">
        <h1>Select a City</h1>
      </header>
      <main className="grid grid-cols-5">
        <div></div>
        <div className="col-span-3">
          {/* loading ? <div>LOADING...</div> : <CityItem CityName={"Singapore"} woeid={1062617} MinTemp={data1.consolidated_weather[0].min_temp} MaxTemp={33.5} isFav={true} />
          <CityItem CityName={"Singapore"} woeid={1062617} MinTemp={data1.length === 0 ? ".." : data1.consolidated_weather[0].min_temp.toFixed(1)} MaxTemp={33.5} isFav={true} />
          {data1 && console.log("data1",data1)}
          <CityItem CityName={"Singapore"} woeid={1062617} MinTemp={23.5} MaxTemp={33.5} isFav={false} />
          {//console.log(r)
          } */}
          {data1.length === 0 ? <div className="text-center">Loading...</div> : <CityItem data={data1} />}
          {data2.length === 0 ? <div className="text-center">Loading...</div> : <CityItem data={data2} />}
          {data3.length === 0 ? <div className="text-center">Loading...</div> : <CityItem data={data3} />}
          {data4.length === 0 ? <div className="text-center">Loading...</div> : <CityItem data={data4} />}
          {data5.length === 0 ? <div className="text-center">Loading...</div> : <CityItem data={data5} />}



        </div>
        <div></div>
      </main>
    </>
  );
};