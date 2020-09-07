import pandas as pd
from entities.entity import Session, engine, Base
from entities.geocode import Geocode, GeocodeSchema
from geopy.geocoders import GoogleV3
import time
import requests

Base.metadata.create_all(engine)

session = Session()
r = requests.get('http://0.0.0.0:5000/enrichments/tempat').json()
df=pd.DataFrame({'Address':['stasiun cimekar','Kawasan Industri Dwipapuri Abadi','fly over paspati','MTC','stasiun cimekar']}) 
        
Latitude= None
Longitude= None
Place_id= None
Atribute_tempat_fasilitas= None
Address= None


loc = [...]*len(df)
def GeocodePY(i):
 locator = GoogleV3(api_key='Hello World')
 loc= df.loc[i,'Address']
 location = locator.geocode(loc,bounds=[-7.032068,107.534180,-6.848032,107.745323])
 Place_id= location.raw['place_id']
 Atribute_tempat_fasilitas= loc
 Address = location.address
 Latitude = location.latitude   
 Longitude = location.longitude
 
 print (Place_id,Atribute_tempat_fasilitas,Address,Latitude,Longitude)
 python_geocode = Geocode(Place_id,Atribute_tempat_fasilitas,Address,Latitude,Longitude,"HTTP Request")
 session.add(python_geocode)
 session.commit()
 session.close()
 time.sleep(1) 

for i, row in df.iterrows():
 GeocodePY(i)
 time.sleep(2) 




