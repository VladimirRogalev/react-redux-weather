import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fetchWeather} from "../actions/weatherActions.js";

const Form = () => {
    const [city, setCity] = useState('');
    const dispatch = useDispatch();

    const getCity = e => {
        e.preventDefault();
        dispatch(fetchWeather(city));
        setCity("");
    };

    const handleChange = e => {
        setCity(e.target.value);

    };

    return (
        <form onSubmit={getCity}>
            <input type={'text'} placeholder="City" value={city} onChange={handleChange}/>
            <button type="submit">Get weather</button>
        </form>
    );
};

export default Form;