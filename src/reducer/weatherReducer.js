import {PUT_WEATHER, PENDING_WEATHER, ERROR_WEATHER} from "../actions/weatherActions.js";

export const weatherReducer = (state, action) => {
    switch (action.type) {
        case PUT_WEATHER:
            return {...state, weather: action.payload};
        case PENDING_WEATHER:
            return {...state, weather: 'Pending...'}
        case ERROR_WEATHER:
            return  {...state, weather: 'Error!'}
        default:
            return state

    }
};