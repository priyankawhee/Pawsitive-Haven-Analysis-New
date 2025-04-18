import pandas as pd
from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["pet_dashboard"]
collection = db["pets"]

df = pd.read_csv("Lost__found__adoptable_pets.csv")  # Or whatever your file name is

# Clean and convert
records = df.to_dict(orient='records')
collection.insert_many(records)
print("Data inserted successfully!")
