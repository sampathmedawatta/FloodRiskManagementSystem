from fastapi import APIRouter, HTTPException
import requests
import json

realTimeWeather = APIRouter() 

@realTimeWeather.get('/weather/forecast/realtime/{forecast_days}')
async def get_weather_record(forecast_days: int):

    url = "https://api.open-meteo.com/v1/forecast"
    params = {
        "latitude": 52.52,
        "longitude": 13.41,
        "hourly":  ["temperature_2m", "relative_humidity_2m", "rain", "wind_speed_10m", "wind_direction_10m"],
	    "forecast_days": forecast_days
    }
    try:
        response = requests.get(url, params=params)
        response.raise_for_status()  
        weather_data = response.json()

        return weather_data
    
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail="Failed to fetch weather data")


# https://open-meteo.com/en/docs#current=&hourly=temperature_2m,relative_humidity_2m,rain,showers,weather_code,pressure_msl,wind_speed_10m,wind_direction_10m&forecast_days=14 

 
    # url1 = "https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en"
    # params1 = {
    #     "dataType": "rhrread",
    #     "lang": "en"
    # }     
# [ 
# {'location_name':'Cheung Chau' , 'code':'CC', 'weather_center':'Cheung Chau'},
# {'location_name':'Chek Lap Kok' , 'code':'CLK', 'weather_center':'International Airport'},
# {'location_name':'Shek Kong' , 'code':'SK', 'weather_center':'Shek Kong'},
# {'location_name':'Sha Tin' , 'code':'ST', 'weather_center':'Sha Tin'},
# {'location_name':'Yau Ma Tei' , 'code':'YMT', 'weather_center':'Hong Kong Observatory'},
# ]

  #Locations
  #Chek Lap Kok - international airport
  #Cheung Chau
  #Shek Kong
  #Sha Tin
  #Sham shui po