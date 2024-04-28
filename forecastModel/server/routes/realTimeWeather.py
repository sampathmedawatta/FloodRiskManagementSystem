from fastapi import APIRouter, HTTPException
import requests

realTimeWeather = APIRouter() 

@realTimeWeather.get('/realtime')
async def get_weather_record():
    url = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en"
    params = {
        "dataType": "rhrread",
        "lang": "en"
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()  # Raise an exception for 4xx or 5xx status codes
        weather_data = response.json()
        return weather_data
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail="Failed to fetch weather data")
    
  
  #Locations
  #Chek Lap Kok - international airport
  #Cheung Chau
  #Shek Kong
  #Sha Tin
  #Sham shui po