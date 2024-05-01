from pydantic import BaseModel
from datetime import date

class WeatherHistory(BaseModel):
    location: str
    year: int
    month: int
    date: int
    humidity: int
    mean_windspeed: float
    wind_direction: int
    mean_tempurature: float
    rainfall: float
    duration: int
    color: str
    
