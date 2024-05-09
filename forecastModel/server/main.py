from fastapi import FastAPI
from routes.weather import weather 
from routes.weatherHistory import weatherHistory 
from routes.realTimeWeather import realTimeWeather
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins='*',
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(weather)
app.include_router(weatherHistory)
app.include_router(realTimeWeather)