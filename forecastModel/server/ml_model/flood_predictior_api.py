from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
import pandas as pd
import uvicorn
from typing import List

app = FastAPI()

class model_input(BaseModel):
    
    Mean_Windspeed :  List[float]
    Wind_Direction :  List[int]
    Mean_Tempurature :  List[float]
    Humidity : List[int]
    Duration : List[int]
    Rainfall :  List[float]

# loading the saved model
loaded_model = pickle.load(open('flood_forecast_model.sav', 'rb'))

@app.post('/flood_prediction')
async def flood_predd(input_parameters : model_input):
    
    input_data = input_parameters.model_dump_json()
    input_dictionary = json.loads(input_data)
    
    try:
       # new_data = pd.DataFrame(input_data.dict())
        new_data = pd.DataFrame(input_dictionary)

        predicted_rainfall = loaded_model.predict(new_data)
        # Assuming loaded_model.predict() returns a list of predicted values
        # Convert predicted_rainfall to list
        predicted_rainfall_list = predicted_rainfall.tolist()

        return {'flood_forecast': predicted_rainfall_list}
    
    except Exception as e:
        return {'error': str(e)}