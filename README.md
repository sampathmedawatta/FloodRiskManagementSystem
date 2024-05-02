# FloodRiskManagementSystem
This project is proposed to aim at developing a smart digital system that would be useful for flood risk management in some critical regions.

## Steps to run the application

### Clone the repository

- follow the give oder beloow to run the applications

1. ML model - python code
2. Forecast API - Python API
3. API server - node.js API
4. Client APP - React app

### ML Model - Python/ Jupyter notebook
- Open terminal
- Move to ML project folder -> cd forecastModel/server/ml_model
- install dependancies (check setup.txt)
- run command -> uvicorn flood_predictior_api:app  --reload --port 8001
- copy the url and replace under .env "ML_model_URL"

### Forecast API - Python
- Open terminal
- Move to ML project folder -> cd forecastModel/server
- install dependancies (check setup.txt)
- run command -> uvicorn main:app  --reload --port 8000
- copy the url and run it on borwser/postman

### Client - React app
- Open another terminal
- Move to server folder: cd server
- Install packages: npm install
- Run the server : npm run dev

### Server Node.js api
- Open another  terminal 
- Move to client folder: cd client
- Install packages: npm install
- run -> node swagger.js
- Run the client: npm start



