import React from 'react';
import Form from "./Form.jsx";
import Weather from "./Weather.jsx";
import {useSelector} from "react-redux";

const Data = () => {
    const weatherInfo = useSelector(state => state.weather);

    return (
        <div>
            <Form/>
            <Weather weather={weatherInfo}/>
        </div>);
};

export default Data;