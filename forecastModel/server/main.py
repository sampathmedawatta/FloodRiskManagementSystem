from fastapi import FastAPI
from routes.weather import weather 
from routes.realTimeWeather import realTimeWeather

app = FastAPI()

app.include_router(weather)
app.include_router(realTimeWeather)