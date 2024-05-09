from fastapi import APIRouter, HTTPException
from models.weather import Weather 
import requests
import json
from pydantic import BaseModel
from datetime import datetime, timedelta
from ml_model.api.flood_predictior_api import flood_predd

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
        weather_list = {'rainfall': [float("{:.2f}".format(total_rainfall_per_day[date]/total_hours_per_day)) for date in total_rainfall_per_day],
                        'humidity': [int("{:.0f}".format(total_humidity_per_day[date]/total_hours_per_day)) for date in total_humidity_per_day],
                        'mean_tempurature': [float("{:.2f}".format(total_temperature_per_day[date]/total_hours_per_day)) for date in total_temperature_per_day],
                        'mean_windspeed': [float("{:.2f}".format(total_wind_speed_per_day[date]/total_hours_per_day)) for date in total_wind_speed_per_day],
                        'wind_direction': [int("{:.0f}".format(total_wind_direction_per_day[date]/total_hours_per_day)) for date in total_wind_direction_per_day],
                        'duration': [int(total_duration_per_day[date]) for date in total_duration_per_day],
                        }
    
        # Remove backslashes
        res = json.dumps(weather_list)
        json_string_without_backslashes = res.replace("\\", "")

        return json.loads(json_string_without_backslashes) 
    
    except requests.exceptions.RequestException as e:
        raise HTTPException(status_code=500, detail="Failed to fetch weather data")


@weather.get('/flood/forecast')
async def find_weather(location: str, days: int):
    try:
        url ='http://127.0.0.1:8001/flood_prediction?location&=' + location
        
        # geta weather data from realtime api
        forecast_weather_data = await get_weather_record(days)
       
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
                    "riskLevel":riskLevel(value),
                    "flood": value,
                    "rainfall": forecast_weather_data['rainfall'][i],
                    "rainfall": forecast_weather_data['rainfall'][i],
                    "duration": forecast_weather_data["duration"][i],
                    "humidity": forecast_weather_data["humidity"][i],
                    "meanTempurature": forecast_weather_data["mean_tempurature"][i],
                    "meanWindspeed": forecast_weather_data["mean_windspeed"][i],
                    "windDirection": forecast_weather_data["wind_direction"][i],
                    })

        # Construct the JSON object with incremented dates
        json_object_with_dates = {'forecast': incremented_dates}

        return json_object_with_dates
    
    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error" , )
 
@weather.get('/flood/forecast/all')
async def find_forecast( days: int):
    try:

        locations = ['CLK', 'CC', 'SK', 'ST', 'YMT']
        data = await fetch_weather_data(locations, days)

        return data

    except Exception as e:
        raise HTTPException(status_code=500, detail="Internal server error" , )
    

async def fetch_weather_data(locations, days):
    data = []
    for location in locations:
        response = await find_weather(location, days)
        data.append({
            "location": location,
            "data": [response]
        })
    return data

def riskLevel(flood):
    if (flood >= 50) :
      return "High"
    elif (flood >= 40) :
      return "Moderate"
    elif (flood >= 20) :
      return "low"
    else :
      return "low"
