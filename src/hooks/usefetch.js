//useFetch.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useFetch = url => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState([]);
    
    useEffect(() => {
        setLoading(true)
        setData([]);
        setError(null);
        const source = axios.CancelToken.source();

        axios.get(url, { cancelToken: source.token })
        .then(res => {
            setLoading(false);
            res.data["isFav"] = false
            console.log("res.data",res.data)
            res.data && setData(res.data);
            // res.conent && setData(res.content);
            
        })
        .catch(err => {
            setLoading(false)
            setError('An error occured. Awkward..')
        })

        // axios.get(url)
        // .then(res => 
        //   {
        //     setLoading(false)
        //     console.log("res",res)
        //     console.log("res.data", res.data)
        //     console.log("res.data.content",res.data.content)
        //     console.log("res.content",res.content)
        //   })

        // const res = await axios.get(url);
        // let data = await res.json() //if the response is json

        // return () => {
        //     source.cancel();
        // }
    }, [url])

    return { data, loading, error }
}

//export default useFetch;

// import { useState, useEffect } from "react";
// import { fetchJson } from "../lib/fetch-json"
// import { URL_5_DAY } from "../services/weatherservice";

// // const Home = () => {
// //   const [blogs, setBlogs] = useState(null)

// //   useEffect(() => {
// //     fetch('http://localhost:8000/blogs')
// //       .then(res => {
// //         return res.json();
// //       })
// //       .then(data => {
// //         setBlogs(data);
// //       })
// //   }, [])

// //   return (
// //     <div className="home">
// //       {blogs && <BlogList blogs={blogs} />}
// //     </div>
// //   );
// // }

// export const useFetch = (woeid) => 
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

//   // useEffect(() =>
//   // {
//   //   fetchJson(URL_5_DAY + woeid)
//   //   .then()
//   //   console.log("useEffect()")
//   //   console.log(response)
//   //   setData(response)
//   //   setIsLoading(false)
//   // }, [woeid])

//   // useEffect(() => {
//   //   async function fetchData() {
//   //     const response = await fetch(URL_5_DAY + woeid);
//   //     const data = await response.json();
//   //     setData(data)
//   //     setIsLoading(false)
//   //     console.log("useEffect()")
//   //     console.log(data)
//   //     console.log(isLoading)
//   //   }
//   //   fetchData();
//   // }, [data, isLoading, woeid]);

//   // useEffect(async () => 
//   // {
//   //   //const response = fetchJson(URL_5_DAY + woeid)
//   //   const response = await fetch(URL_5_DAY + woeid);
//   //   const data = await response.json();
//   //   setData(data)
//   //   setIsLoading(false)
//   //   console.log("useEffect()")
//   //   console.log(data)
//   // }, [])

//   // useEffect((woeid) => {
//   //   async function fetchData(woeid) {
//   //     const response = fetchJson(URL_5_DAY + woeid)
//   //     setData(response)
//   //     setIsLoading(false)
//   //     console.log("useEffect()")
//   //     console.log(response)
//   //   }
//   //   fetchData();
//   // }, []);
  

//   return {data, isLoading}
// }