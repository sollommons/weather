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
  isError: false,
};

export const mainSlice = createSlice({
  name: 'Main',
  initialState,
  reducers: {
    loadInfo: (state, action: PayloadAction<Omit<AppState, "isError" | "isLoading" | "darkTheme">>) => {
      state.activeCityName = action.payload.activeCityName;
      state.date = action.payload.date;
      state.temperature = action.payload.temperature;
      state.weatherInfo = action.payload.weatherInfo;
      state.forecast = action.payload.forecast;
    },
    setLoadingStatus: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    changeCity: (state, action: PayloadAction<string>) => {
      state.activeCityName = action.payload;
    },
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
    setError: (state) => {
      state.isError = true;
    },
  },
});

export const {
  loadInfo,
  changeCity,
  toggleTheme,
  setLoadingStatus,
  setError
} = mainSlice.actions;

export default mainSlice;
