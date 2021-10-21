import { get5DayForecast } from "../services/weatherservice"
import { useState, useQuery } from "react";

export const use5DayForecast = (woeid) => 
{
  const query = useQuery(['data', woeid], async () =>
  {
    const response = await get5DayForecast( woeid )
    console.log(response)
    return response
  })

  return { ...query }
}

// export const useRepository = (name, author) => {
  
//   const query = useQuery(['repository', name, author], async () => {
//     const repo = await getRepository({ name, author });
//     return await getSecondaryRepositoryData(repo);
//   });
  
//   return { ...query };
// };