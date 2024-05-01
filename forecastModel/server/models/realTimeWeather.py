from pydantic import BaseModel
from datetime import date

class RealTimeWeather(BaseModel):
    Date: date
    Humidity: int
    Mean_Windspeed: float
    Wind_Direction: int
    Mean_Tempurature: float
    Rainfall: float
