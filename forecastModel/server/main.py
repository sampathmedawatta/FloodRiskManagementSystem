from fastapi import FastAPI
from routes.weather import weather 
from routes.weatherHistory import weatherHistory 
from routes.realTimeWeather import realTimeWeather

app = FastAPI()

app.include_router(weather)
app.include_router(weatherHistory)
app.include_router(realTimeWeather)