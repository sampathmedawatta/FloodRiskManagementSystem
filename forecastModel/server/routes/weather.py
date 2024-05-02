from fastapi import APIRouter, HTTPException
from models.weather import Weather 
import requests
import json
from pydantic import BaseModel
from datetime import datetime, timedelta

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


class input_pra(BaseModel):
    period : int
    location :  str

@weather.get('/flood/forecast')
async def find_weather(input_parameters : input_pra):
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
        if (input_parameters.period == 14):
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
        
        json_object = json.loads(response.text)

        # Get the current date
        current_date = datetime.now()

        # Add date to each line with an increment
        incremented_dates = []
        for i, value in enumerate(json_object["forecast"]):
            incremented_date = current_date + timedelta(days=i)
            day_of_week = incremented_date.strftime("%A")

            incremented_dates.append({
                    "date": incremented_date.strftime("%Y-%m-%d"), 
                    "day":i+1,
                    "dayofweek":day_of_week,
                    "riskLevel":"Moderate",
                    "flood": value,
                    "rainfall": forecast_weather_data["Rainfall"][i],
                    "duration": forecast_weather_data["Duration"][i],
                    "humidity": forecast_weather_data["Humidity"][i],
                    "meanTempurature": forecast_weather_data["Mean_Tempurature"][i],
                    "meanWindspeed": forecast_weather_data["Mean_Windspeed"][i],
                    "windDirection": forecast_weather_data["Wind_Direction"][i],
                    })

        # Construct the JSON object with incremented dates
        json_object_with_dates = {"forecast": incremented_dates}

        return json_object_with_dates
    
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error" , )
 