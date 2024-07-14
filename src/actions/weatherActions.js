import {api_key, base_url} from "../utils/constants.jsx";

export const PUT_WEATHER = 'PUT_WEATHER'
export const PENDING_WEATHER = 'PENDING_WEATHER'
export const ERROR_WEATHER =  'ERROR_WEATHER'

export const putWeather = weather => ({
    type: PUT_WEATHER,
    payload:weather
});

export const pendingWeather = () => ({
    type: PENDING_WEATHER
});

export const errorWeather = () => ({
    type: ERROR_WEATHER
})

export const fetchWeather =  (city) => {
 return(dispatch) => {
     dispatch(pendingWeather())
     fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
         .then(response => response.json())
         .then(data =>  {
             const weatherInfo = {
             city: data.name,
             temp: data.main.temp,
             pressure: data.main.pressure
         }
         dispatch(putWeather(weatherInfo))
         })
         .catch(e => dispatch(errorWeather()))

 }
}
