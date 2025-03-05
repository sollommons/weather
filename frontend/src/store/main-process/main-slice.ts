import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '../../types/state/state-types';

const initialState: AppState = {
  activeCityName: 'Saint-Petersburg',
  date: Date(),
  temperature: 0,
  weatherInfo: {
    "Wind speed": 0,
    "Visibility": 0,
    "Pressure": 0,
    "Humidity": 0,
    "Sunrise": Date(),
    "Sunset": Date(),
  },
  forecast: [],
  darkTheme: false,
  isLoading: true,
};

export const mainSlice = createSlice({
  name: 'Main',
  initialState,
  reducers: {
    loadInfo: (state, action: PayloadAction<AppState>) => {
      state.activeCityName = action.payload.activeCityName;
      state.date = action.payload.date;
      state.temperature = action.payload.temperature;
      state.weatherInfo = action.payload.weatherInfo;
      state.forecast = action.payload.forecast;
      state.isLoading = false;
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.activeCityName = action.payload;
    },
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const {
  loadInfo,
  changeCity,
  toggleTheme,
} = mainSlice.actions;

export default mainSlice;
