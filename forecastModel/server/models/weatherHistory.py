from pydantic import BaseModel
from datetime import date

class WeatherHistory(BaseModel):
    Location: str
    Date: str
    Humidity: int
    Mean_Windspeed: float
    Wind_Direction: int
    Mean_Tempurature: float
    Rainfall: float
    
