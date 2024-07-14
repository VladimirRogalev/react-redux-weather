import {applyMiddleware, legacy_createStore} from "@reduxjs/toolkit";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";
import {weatherReducer} from "../reducer/weatherReducer.js";
import {thunkEnhancer} from "../middleWare/thunkEnhancer.js";
import {loggerEnhancer} from "../middleWare/loggerEnhancer.js";

const initialState = {
    weather: ''
};

export const store = legacy_createStore(weatherReducer, initialState, applyMiddleware(/*thunkEnhancer, loggerEnhancer*/ thunk, logger));