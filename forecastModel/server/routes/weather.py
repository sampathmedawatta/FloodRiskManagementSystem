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
    
 
class input_pra(BaseModel):
    period : int
    location :  str


@weather.get('/weather/forecast/{forecast_days}')
async def get_weather_record(forecast_days: int ):

    #open metro url
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

        # Initialize dictionaries
        total_rainfall_per_day = {}
        total_humidity_per_day = {}
        total_temperature_per_day = {}
        total_wind_speed_per_day = {}
        total_wind_direction_per_day = {}
        total_duration_per_day = {}

        # Iterate through the hourly data
        for i in range(len(weather_data['hourly']['time'])):
            # Extract the date from the timestamp
            date = weather_data['hourly']['time'][i][:10]

            # Get the weather for the current hour

            rainfall = weather_data['hourly']['rain'][i]
            humidity = weather_data['hourly']['relative_humidity_2m'][i]
            temperature = weather_data['hourly']['temperature_2m'][i]
            wind_speed = weather_data['hourly']['wind_speed_10m'][i]
            wind_direction = weather_data['hourly']['wind_direction_10m'][i]

            # Add the weather data to the total for the corresponding date
            total_rainfall_per_day[date] = total_rainfall_per_day.get(date, 0) + rainfall
            total_humidity_per_day[date] = total_humidity_per_day.get(date, 0) + humidity
            total_temperature_per_day[date] = total_temperature_per_day.get(date, 0) + temperature
            total_wind_speed_per_day[date] = total_wind_speed_per_day.get(date, 0) + wind_speed
            total_wind_direction_per_day[date] = total_wind_direction_per_day.get(date, 0) + wind_direction

            if rainfall > 0:
               total_duration_per_day[date]  = total_duration_per_day.get(date, 0) + 1
            else:
                total_duration_per_day[date]  = total_duration_per_day.get(date, 0) + 0
        # Convert total weather data to the specified format

        total_hours_per_day = 24
        weather_list = {'Rainfall': [float("{:.2f}".format(total_rainfall_per_day[date]/total_hours_per_day)) for date in total_rainfall_per_day],
                        'Humidity': [int("{:.0f}".format(total_humidity_per_day[date]/total_hours_per_day)) for date in total_humidity_per_day],
                        'Mean_Tempurature': [float("{:.2f}".format(total_temperature_per_day[date]/total_hours_per_day)) for date in total_temperature_per_day],
                        'Mean_Windspeed': [float("{:.2f}".format(total_wind_speed_per_day[date]/total_hours_per_day)) for date in total_wind_speed_per_day],
                        'Wind_Direction': [int("{:.0f}".format(total_wind_direction_per_day[date]/total_hours_per_day)) for date in total_wind_direction_per_day],
                        'Duration': [int(total_duration_per_day[date]) for date in total_duration_per_day],
                        }
    
        # Remove backslashes
        res = json.dumps(weather_list)
        json_string_without_backslashes = res.replace("\\", "")

        return json.loads(json_string_without_backslashes) 
    
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail="Failed to fetch weather data")


@weather.get('/flood/forecast')
async def find_weather():
    try:
        url ='http://127.0.0.1:8001/flood_prediction'
        
        # geta weather data from realtime api
        forecast_weather_data = await get_weather_record(7)

        # get response from ML model
        response = requests.post(url, data=json.dumps(forecast_weather_data))
       
       # load json str to object
        json_object = json.loads(response.text)

        # Get the current date
        current_date = datetime.now()

        #forecast_data =json.loads(forecast_weather_data)

        # Add date to each line with an increment
        incremented_dates = []
        for i, value in enumerate(json_object["forecast"]):
            incremented_date = current_date + timedelta(days=i)
            day_of_week = incremented_date.strftime("%A")

            incremented_dates.append({
                    "date": incremented_date.strftime("%Y-%m-%d"), 
                    "dayofweek":day_of_week,
                    "riskLevel":"Moderate",
                    "flood": value,
                    "rainfall": forecast_weather_data['Rainfall'][i],
                    "rainfall": forecast_weather_data['Rainfall'][i],
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
 