import requests
from dotenv import load_dotenv
import os
from dataclasses import dataclass
from datetime import datetime, timezone
from timezonefinder import TimezoneFinder
import pytz

load_dotenv()
api_key = os.getenv('keyWeather')

@dataclass
class WeatherData:
    description: str
    temperature: float
    icon: str
    wind_speed: float
    visibility: float
    sunrise: int
    sunset: int
    humidity: int
    pressure: int

def get_lan_lon(API_key, city_name, region):
    if region:
        location = f"{city_name},{region}"
    else:
        location = city_name
    country_name = "RU"
    resp = requests.get(f'http://api.openweathermap.org/geo/1.0/direct?q={location},{country_name}&appid={API_key}')
    print(resp.status_code)
    if resp.status_code == 200:
        data = resp.json()
        print(data)
        return (data[0].get('lat'), data[0].get('lon'), 200) if data else (None, None, 201) 
    else:
        return None, None, resp.status_code  

def get_current_weather(lat, lon, API_key):
    resp = requests.get(f'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API_key}&units=metric').json()
    
    visibility_km = resp.get('visibility') / 1000 
 
    tf = TimezoneFinder()
    timezone_str = tf.timezone_at(lat=lat, lng=lon)  # Определяем часовой пояс по координатам
    local_tz = pytz.timezone(timezone_str)

    sunrise_timestamp = resp.get('sys').get('sunrise')
    sunset_timestamp = resp.get('sys').get('sunset')
    
    sunrise_hour = datetime.fromtimestamp(sunrise_timestamp, tz=pytz.utc).astimezone(local_tz).strftime('%H:%M')
    sunset_hour = datetime.fromtimestamp(sunset_timestamp, tz=pytz.utc).astimezone(local_tz).strftime('%H:%M')

    data = WeatherData(
        description=resp.get('weather')[0].get('description'),
        icon=resp.get('weather')[0].get('icon'),
        temperature=int(resp.get('main').get('temp')),
        wind_speed=resp.get('wind').get('speed'),
        visibility=visibility_km,
        sunrise=sunrise_hour,
        sunset=sunset_hour,
        humidity=resp.get('main').get('humidity'),
        pressure=resp.get('main').get('pressure')
    )
    return data


@dataclass
class WeatherForecastData:
    temperature: float

def get_weather_forecast(lat, lon, API_key):
    resp = requests.get(f'https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API_key}&units=metric').json()
    forecasts = []
    
    for entry in resp.get('list', [])[:5]:
        forecast = WeatherForecastData(
            temperature=int(entry.get('main').get('temp'))
        )
        forecasts.append(forecast)
    
    return forecasts

def main(city_name, region):
    lat, lon, status_code = get_lan_lon(api_key, city_name, region)
    print(status_code)
    if status_code == 200:
        weather_data = get_current_weather(lat, lon, api_key)
        forecast_data = get_weather_forecast(lat, lon, api_key)
        return {"weather": weather_data, "forecast": forecast_data}, status_code
    elif status_code == 201:
         return {"error": f"Error location "}, status_code
    else:
        return {"error": f"Error response "}, status_code

