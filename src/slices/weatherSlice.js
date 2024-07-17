import {createSlice} from "@reduxjs/toolkit";


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {city: '', temp: '', pressure: ''},
    reducers: {
        putWeather(state, action) {
            state.city = action.payload.city;
            state.temp = action.payload.temp;
            state.pressure = action.payload.pressure;

        },
        pendingWeather(state) {
            state.text = 'Pending...';
        },
        errorWeather(state) {
            state.text = 'Error!!!';
        }
    }
});
export const {putWeather, pendingWeather, errorWeather} = weatherSlice.actions;
export default weatherSlice.reducer;