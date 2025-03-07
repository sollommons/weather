import { store } from '../../store';

export type ForecastItem = {
  date: string;
  temperature: number;
}

export type WeatherInfo = {
  "Wind speed": number,
  "Visibility": number,
  "Pressure": number,
  "Humidity": number,
  "Sunrise": string,
  "Sunset": string,
};

export type AppState = {
  activeCityName: string;
  date: string;
  temperature: number;
  weatherInfo: {
    "Wind speed": number,
    "Visibility": number,
    "Pressure": number,
    "Humidity": number,
    "Sunrise": string,
    "Sunset": string,
  };
  forecast: ForecastItem[];
  darkTheme: boolean;
  isLoading: boolean;
  isError: boolean;
}

export type State = ReturnType<typeof store.getState>;
