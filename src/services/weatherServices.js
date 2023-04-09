
import { DateTime } from "luxon";
const API_KEY="4d41983770d12a265e32e63d8323c6b3";
const BASE_URL="https://api.openweathermap.org/data/2.5/";

//  why we are not using async await here ??
  
const getWeatherData =( infoType , searchParams) =>{
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new  URLSearchParams({...searchParams,appid:API_KEY});
    console.log(url);

    return fetch(url)
    .then((res)=>res.json())
    // .then((data)=>data);

}


const formatCurrentWeather = (data) =>{
    const {
        coord:{lat,lon},
        main:{temp,temp_min,temp_max,humidity},
        name,
        dt,
        sys:{country,sunrise,sunset},
        weather,
        wind:{speed}
    }= data
    //   main is renaming to details
    const {main:details ,icon} = weather[0];

    return {lat,lon,temp,temp_min,temp_max,humidity,name,
        dt,country,sunrise,sunset,speed,details,icon}
}

const getFormattedWeatherData =  async (searchParams) => {
    const formattedCurrentWeather = await  getWeatherData('weather' , searchParams).then(formatCurrentWeather)

    return formattedCurrentWeather;
}


const formatToLocalTime = (secs , zone , format="cccc,dd, LLL yyyy' | Local time: 'hh:mm a") => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const iconUrlFromCode = (code) => ` https://openweathermap.org/img/wn/${code}@2x.png`;

export default getFormattedWeatherData;

export {formatToLocalTime , iconUrlFromCode}