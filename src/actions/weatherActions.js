import {api_key, base_url} from "../utils/constants.jsx";
import {errorWeather, pendingWeather, putWeather} from "../slices/weatherSlice.js";


export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch(pendingWeather());
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = {
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure
                };
                dispatch(putWeather(weatherInfo));
            })
            .catch(e => dispatch(errorWeather()));

    };
};
