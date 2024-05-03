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


@realTimeWeather.get('/weather/forecast/byType/{forecast_days}')
async def get_weather_record(forecast_days: int ):

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

        # Initialize a dictionary
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
        weather_list = {'Rainfall': ["{:.2f}".format(total_rainfall_per_day[date]/total_hours_per_day) for date in total_rainfall_per_day],
                        'Humidity': ["{:.0f}".format(total_humidity_per_day[date]/total_hours_per_day) for date in total_humidity_per_day],
                        'Mean_Tempurature': ["{:.2f}".format(total_temperature_per_day[date]/total_hours_per_day) for date in total_temperature_per_day],
                        'Mean_Windspeed': ["{:.2f}".format(total_wind_speed_per_day[date]/total_hours_per_day) for date in total_wind_speed_per_day],
                        'Wind_Direction': ["{:.0f}".format(total_wind_direction_per_day[date]/total_hours_per_day) for date in total_wind_direction_per_day],
                        'Duration': [total_duration_per_day[date] for date in total_duration_per_day],
                        }
    
        # Remove backslashes
        res = json.dumps(weather_list)
        json_string_without_backslashes = res.replace("\\", "")

        return json_string_without_backslashes
    
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