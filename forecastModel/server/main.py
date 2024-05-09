from fastapi import FastAPI
from routes.weather import weather 
from routes.weatherHistory import weatherHistory 
from routes.realTimeWeather import realTimeWeather
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:8001",
    "http://localhost:8000",
    "http://127.0.0.1:8001",
    "http://127.0.0.1:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(weather)
app.include_router(weatherHistory)
app.include_router(realTimeWeather)