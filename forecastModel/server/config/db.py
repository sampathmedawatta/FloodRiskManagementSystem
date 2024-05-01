from pymongo import MongoClient
from urllib.parse import quote_plus

username = "MongoAdmin"
password = "P@ssf0rM0ng0"
cluster_address = "mongoadmin.z3yl9qy.mongodb.net"
database_name = "Flood_history_db"

url = f"mongodb+srv://{quote_plus(username)}:{quote_plus(password)}@{cluster_address}/?retryWrites=true&w=majority&appName=MongoAdmin"

client = MongoClient(url)

# Access a database
db = client['hong_kong_weather_db']

# Access a history_data
location_data_CLK = db['location_data_CLK']
location_data_CC = db['location_data_CC']
location_data_SK = db['location_data_SK']
location_data_ST = db['location_data_ST']
location_data_YMT = db['location_data_YMT']
