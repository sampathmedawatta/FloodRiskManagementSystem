from pydantic import BaseModel
import pickle
import json
import pandas as pd
from typing import List


class model_input(BaseModel):
    
    Mean_Windspeed :  List[float]
    Wind_Direction :  List[int]
    Mean_Tempurature :  List[float]
    Humidity : List[int]
    Duration : List[int]
    Rainfall :  List[float]

# loading the saved model
loaded_model = pickle.load(open('flood_forecast_model.sav', 'rb'))

def flood_predd(input_parameters : model_input):
    
    input_data = input_parameters.model_dump_json()
    input_dictionary = json.loads(input_data)
    
    try:
       # new_data = pd.DataFrame(input_data.dict())
        new_data = pd.DataFrame(input_dictionary)

        predicted_rainfall = loaded_model.predict(new_data)
        # Assuming loaded_model.predict() returns a list of predicted values
        # Convert predicted_rainfall to list
        predicted_rainfall_list = predicted_rainfall.tolist()

        return {'predicted_rainfall': predicted_rainfall_list}
    
    except Exception as e:
        return {'error': str(e)}