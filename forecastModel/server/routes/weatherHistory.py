from fastapi import APIRouter
from models.weatherHistory import WeatherHistory 
from schemas.weatherHistory import serializeDict, serializeList
from bson import ObjectId
from config.db import location_data_CLK, location_data_CC, location_data_SK, location_data_ST, location_data_YMT

weatherHistory = APIRouter() 

# get weather history records

@weatherHistory.get('/weather/history')
async def find_all_weather_history(location: str, year: int):
    try:
        query = {"year": year}
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
    except:
        print("")   

# save weather history record

@weatherHistory.post('/weather/history')
async def add_weather_history(weatherHistory: WeatherHistory):
    if(weatherHistory.location == 'CLK'):
        location_data_CLK.insert_one(dict(weatherHistory))
        return serializeList(location_data_CLK.find())
    elif(weatherHistory.location == 'CC'):
        location_data_CC.insert_one(dict(weatherHistory))
        return serializeList(location_data_CC.find())
    elif(weatherHistory.location == 'SK'):
        location_data_SK.insert_one(dict(weatherHistory))
        return serializeList(location_data_SK.find())
    elif(weatherHistory.location == 'ST'):
        location_data_ST.insert_one(dict(weatherHistory))
        return serializeList(location_data_ST.find())
    elif(weatherHistory.location == 'YMT'):
        location_data_YMT.insert_one(dict(weatherHistory))
        return serializeList(location_data_YMT.find())
    
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