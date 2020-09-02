import pandas as pd
from entities.entity import Session, engine, Base
from entities.geocode import Geocode, GeocodeSchema
from geopy.geocoders import Nominatim
import time

Base.metadata.create_all(engine)

session = Session()

df=pd.DataFrame({'Address':['Dago']}) 
        
Latitude= None
Longitude= None
Place_id= None
Osm_type= None
Osm_id= None
Boundingbox_0= None
Boundingbox_1= None
Boundingbox_2= None
Boundingbox_3= None
Class= None
Type= None
Importance= None
Display_name= None
Icon= None
Licence= None

loc = [...]*len(df)
def GeocodePY(i):
 locator = Nominatim(user_agent="myGeocoder")
 loc= df.loc[i,'Address']
 location = locator.geocode(loc,limit=3,bounded=True,viewbox=[107.534180,-7.032068,107.745323,-6.848032])
 Display_name = location.raw['display_name']
 Latitude = location.latitude   
 Longitude = location.longitude
 Place_id = location.raw['place_id']
 Licence = location.raw['licence']
 Osm_type = location.raw['osm_type']
 Osm_id = location.raw['osm_id']
 Class = location.raw['class']
 Type = location.raw['type']
 Importance = location.raw['importance']
 print (Display_name,Latitude,Longitude,Class)
 python_geocode = Geocode(Place_id,Licence,Osm_type,Osm_id,0,0,0,0,Latitude,Longitude,Display_name,Class,Type,Importance,"Icon","HTTP Request")
 session.add(python_geocode)
 session.commit()
 session.close()
 time.sleep(1) 

for i, row in df.iterrows():
 GeocodePY(i)
 time.sleep(1) 




