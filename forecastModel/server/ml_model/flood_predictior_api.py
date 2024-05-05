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
loaded_model_CLK = pickle.load(open('flood_forecast_model_CLK.sav', 'rb'))
loaded_model_CC = pickle.load(open('flood_forecast_model_CLK.sav', 'rb'))
loaded_model_SK = pickle.load(open('flood_forecast_model_CLK.sav', 'rb'))
loaded_model_ST = pickle.load(open('flood_forecast_model_CLK.sav', 'rb'))
loaded_model_YMT = pickle.load(open('flood_forecast_model_CLK.sav', 'rb'))

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