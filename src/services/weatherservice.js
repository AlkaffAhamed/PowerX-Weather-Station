import { fetchJson } from "../lib/fetch-json"

export const URL_5_DAY = "https://www.metaweather.com/api/location/"

export const get5DayForecast = async (woeid) => 
{
    return fetchJson(URL_5_DAY + woeid)
}
