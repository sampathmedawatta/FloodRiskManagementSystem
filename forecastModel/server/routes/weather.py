from fastapi import APIRouter, HTTPException
from models.weather import Weather 
import requests
import json

weather = APIRouter() 

@weather.get('/weather')
async def find_weather():
    try:
        return {'Flood Forecast model API'}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")
    
 
@weather.get('/weather/forecast/{period}')
async def find_weather(period: int):
    try:
        if period == 1:
            return {"message": "7 Day Forecast"}
        elif period == 2:
            return {"message": "14 Day forecast"}
        else:
            return {"message": "Invalid period."}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")


@weather.get('/flood/forecast/{period}')
async def find_weather(period: int):
    try:
        url ='http://127.0.0.1:8001/flood_prediction'
        
        # TODO: get data from realtime weather api

        # 7 days
        forecast_weather_data = {
                    "Mean_Windspeed": [10, 23, 23, 224, 34, 224, 34],
                    "Wind_Direction": [100, 124, 134, 253, 56, 111, 54],
                    "Mean_Tempurature": [25, 34, 45, 56, 77, 54, 65],
                    "Humidity": [60, 23, 56, 77, 88, 33, 65],
                    "Duration": [160, 203, 556, 177, 10, 100, 230],
                    "Rainfall": [124, 46, 70, 21, 0.5, 120, 132]
                }
        # 14 days
        if period == 14:
            forecast_weather_data = {
                    "Mean_Windspeed": [10, 23, 23, 224, 34, 10,11, 32, 23, 23, 224, 34, 224, 34],
                    "Wind_Direction": [100, 124, 134, 253, 56,90, 87, 100, 124, 134, 253, 56, 111, 54],
                    "Mean_Tempurature": [25, 34, 45, 56, 77, 25,87, 43, 34, 45, 56, 77, 54, 65],
                    "Humidity": [60, 23, 56, 77, 88, 60, 76, 37, 23, 56, 77, 88, 33, 65],
                    "Duration": [160, 203, 556, 177, 10, 300, 54, 160, 203, 556, 177, 10, 100, 230],
                    "Rainfall": [124, 46, 70, 21, 0.5, 11, 32, 65, 46, 70, 21, 0.5, 120, 132]
                }
        

               
        input_json = json.dumps(forecast_weather_data)

        response = requests.post(url, data=input_json)

        return {response.text}
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error")
 