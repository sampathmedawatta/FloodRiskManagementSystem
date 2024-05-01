from fastapi import APIRouter, HTTPException
from models.weather import Weather 
import requests

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

  