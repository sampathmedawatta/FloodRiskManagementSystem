from fastapi import APIRouter, HTTPException
from models.weatherHistory import WeatherHistory 
from schemas.weatherHistory import serializeDict, serializeList
from bson import ObjectId
from config.db import location_data_CLK, location_data_CC, location_data_SK, location_data_ST, location_data_YMT
from datetime import datetime, date, timedelta
import requests
import json

weatherHistory = APIRouter() 


@weatherHistory.get('/weather/history/update')
async def find_all_weather_history(location: str):
    try:
        Geo = {"latitude": 52.52,
        "longitude": 13.41}

        if(location == 'CLK'):
            Geo = {"latitude": 52.52,
        "longitude": 13.41}
        elif(location == 'CC'):
             Geo = {"latitude": 52.52,
        "longitude": 13.41}
        elif(location == 'SK'):
             Geo = {"latitude": 52.52,
        "longitude": 13.41}
        elif(location == 'ST'):
             Geo = {"latitude": 52.52,
        "longitude": 13.41}
        elif(location == 'YMT'):
             Geo = {"latitude": 52.52,
        "longitude": 13.41}

        today = date.today()
        three_days_ago = today - timedelta(days=3)
        date_string = three_days_ago
        end_date = datetime.now().date() #- timedelta(days=3)

        # TODO get records for current month aand check missing data

        weather_history_data = await find_all_weather_history(location, today.year, today.month)

        date_diff = 0
        if(weather_history_data):
            # Extract year, month, and day from each entry and store them in a list of tuples
            dates = [(entry['year'], entry['month'], entry['day']) for entry in weather_history_data]
            
            # Find the maximum date
            max_date = max(dates)

            # Convert max_date to a datetime object
            last_date = datetime(*max_date)

            # Calculate the difference
            date_diff = end_date - last_date.date()

            if(date_diff.days > 0):
                date_string = last_date.date() + timedelta(days=1)
        else:
            date_string = datetime(*(today.year, today.month, 1)).date()

        if(date_string < end_date):
            # get missing data from realtime api and update table 
            url = "https://archive-api.open-meteo.com/v1/archive"
            params = {
                "latitude": Geo["latitude"],
                "longitude": Geo["longitude"],
                "start_date": date_string,
                "end_date":  end_date,
                "hourly": "relative_humidity_2m",
                "daily": ["temperature_2m_mean", "rain_sum", "precipitation_hours", "wind_speed_10m_max", "wind_direction_10m_dominant"]
            }

            response = requests.get(url, params=params)
            response.raise_for_status()  
            weather_data = response.json()
    
            try:
                # Initialize dictionaries
                total_humidity_per_day = {}

                # Iterate through the hourly data
                for i in range(len(weather_data['hourly']['time'])):
                    # Extract the date from the timestamp
                    item_date = weather_data['hourly']['time'][i][:10]
                    
                    # Get the weather for the current hour
                    humidity = weather_data['hourly']['relative_humidity_2m'][i]

                    if(humidity):
                        # Add the weather data to the total for the corresponding date
                        total_humidity_per_day[item_date] = total_humidity_per_day.get(item_date, 0) + humidity
                
                # Iterate through the hourly data
                for i in range(len(weather_data['daily']['time'])):
                    # Extract the date from the timestamp
                    date_ = weather_data['daily']['time'][i][:10]
                    year, month, day = str(date_).split('-')

                    rain = weather_data['daily']['rain_sum'][i]

                    if rain is not None:
                        w_data = WeatherHistory(
                            location= location,
                            year=year,
                            month=month,
                            day=day,
                            humidity = int("{:.0f}".format(total_humidity_per_day.get(date_) / 24)),  
                            mean_windspeed= float("{:.2f}".format(weather_data['daily']['wind_speed_10m_max'][i])),  
                            wind_direction= int("{:.0f}".format(weather_data['daily']['wind_direction_10m_dominant'][i])), 
                            mean_tempurature= float("{:.2f}".format(weather_data['daily']['temperature_2m_mean'][i])),  
                            rainfall= float("{:.2f}".format(weather_data['daily']['rain_sum'][i])), 
                            duration= int("{:.0f}".format(weather_data['daily']['precipitation_hours'][i])),  
                            color="Green"  
                        )

                        res = await add_weather_history(w_data)
                    else:
                        print ('null data: ' + str(date_))

            except requests.exceptions.RequestException as e:
                print( e)
        else:
            return 'Weather data upto date'

        return weather_data

    except requests.exceptions.RequestException as e:
        print(e)    

# get weather history records

@weatherHistory.get('/weather/history')
async def find_all_weather_history(location: str, year: int, month: int):
    try:
        query = {"year": year, "month": month}
        if(location == 'CLK'):
            return serializeList(location_data_CLK.find(query))
        elif(location == 'CC'):
            return serializeList(location_data_CC.find(query))
        elif(location == 'SK'):
            return serializeList(location_data_SK.find(query))
        elif(location == 'ST'):
            return serializeList(location_data_ST.find(query))
        elif(location == 'YMT'):
            return serializeList(location_data_YMT.find(query))
        else:
            return []
    except requests.exceptions.RequestException as e:
        print(e)   

# save weather history record

@weatherHistory.post('/weather/history')
async def add_weather_history(weatherHistory: WeatherHistory):

    query = {"year": weatherHistory.year, "month": weatherHistory.month , "day": weatherHistory.day}
    
    if(weatherHistory.location == 'CLK'):
        res = serializeList(location_data_CLK.find(query))
        if res:
            return res
        else:
            location_data_CLK.insert_one(dict(weatherHistory))
    elif(weatherHistory.location == 'CC'):
        res = serializeList(location_data_CC.find(query))
        if res:
            return res
        else:
            location_data_CC.insert_one(dict(weatherHistory))
    elif(weatherHistory.location == 'SK'):
        res = serializeList(location_data_SK.find(query))
        if res:
            return res
        else:
            location_data_SK.insert_one(dict(weatherHistory))
    elif(weatherHistory.location == 'ST'):
        res = serializeList(location_data_ST.find(query))
        if res:
            return res
        else:
            location_data_ST.insert_one(dict(weatherHistory))
    elif(weatherHistory.location == 'YMT'):

        res = serializeList(location_data_YMT.find(query))
        if res:
            return res
        else:
            location_data_YMT.insert_one(dict(weatherHistory))
    else:
        return []


# find weather history record

# @weatherHistory.get('/{id}')
# async def find_one_weather_history(id):
#     return serializeDict(history_data.find_one({"_id":ObjectId(id)}))


# update weather history record

# @weatherHistory.put('/weather/history/{id}')
# async def update_weather_history(id,weatherHistory: WeatherHistory):
#     chistory_data.find_one_and_update({"_id":ObjectId(id)},{
#         "$set":dict(weatherHistory)
#     })
#     return serializeDict(history_data.find_one({"_id":ObjectId(id)}))

# delete weather history record

# @weatherHistory.delete('/weather/history/{id}')
# async def delete_weather_history(id,weatherHistory: WeatherHistory):
#     return serializeDict(history_data.find_one_and_delete({"_id":ObjectId(id)}))