from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import json
import pandas as pd
import uvicorn
from typing import List

app = FastAPI()

class model_input(BaseModel):
    
    mean_windspeed :  List[float]
    wind_direction :  List[int]
    mean_tempurature :  List[float]
    humidity : List[int]
    duration : List[int]
    rainfall :  List[float]

# loading the saved models for each location
try:
    with open('data/models/flood_forecast_model_CLK.sav', 'rb') as model_file_CLK:
        loaded_model_CLK = pickle.load(model_file_CLK)

    with open('data/models/flood_forecast_model_CC.sav', 'rb') as model_file_CC:
        loaded_model_CC = pickle.load(model_file_CC)

    with open('data/models/flood_forecast_model_SK.sav', 'rb') as model_file_SK:
        loaded_model_SK = pickle.load(model_file_SK)
    
    with open('data/models/flood_forecast_model_ST.sav', 'rb') as model_file_ST:
        loaded_model_ST = pickle.load(model_file_ST)
    
    with open('data/models/flood_forecast_model_YMT.sav', 'rb') as model_file_YMT:
        loaded_model_YMT = pickle.load(model_file_YMT)

except FileNotFoundError:
    print("Model file not found. Please check the file path.")
except Exception as e:
    print("An error occurred while loading the model:", e)

@app.post('/flood_prediction')
async def flood_predd(input_parameters : model_input, location : str):
    
    input_data = input_parameters.model_dump_json()
    input_dictionary = json.loads(input_data)
    
    try:
       # new_data = pd.DataFrame(input_data.dict())
        new_data = pd.DataFrame(input_dictionary)

        if(location =='CLK'): #Cheung Chau
            predicted_rainfall = loaded_model_CLK.predict(new_data)
        elif(location =='CC'): # Chek Lap Kok
            predicted_rainfall = loaded_model_CC.predict(new_data)
        elif(location =='SK'): # Shek Kong
            predicted_rainfall = loaded_model_SK.predict(new_data)
        elif(location =='ST'): # Sha Tin
            predicted_rainfall = loaded_model_ST.predict(new_data)
        elif(location =='YMT'): # Yau Ma Tei
            predicted_rainfall = loaded_model_YMT.predict(new_data)
        else:
            predicted_rainfall = loaded_model_CLK.predict(new_data)   

        # Convert predicted_rainfall to list
        predicted_rainfall_list = predicted_rainfall.tolist()

        return {"forecast": predicted_rainfall_list}
    
    except Exception as e:
        return {'error': str(e)}