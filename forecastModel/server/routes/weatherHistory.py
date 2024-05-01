from fastapi import APIRouter
from models.weatherHistory import WeatherHistory 
from schemas.weatherHistory import serializeDict, serializeList
from bson import ObjectId
from config.db import history_data 

weatherHistory = APIRouter() 

# get weather history records

@weatherHistory.get('/weather/history')
async def find_all_weather_history():
    return serializeList(history_data.find())

# save weather history record

@weatherHistory.post('/weather/history')
async def add_weather_history(weatherHistory: WeatherHistory):
    history_data.insert_one(dict(weatherHistory))
    return serializeList(history_data.find())

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