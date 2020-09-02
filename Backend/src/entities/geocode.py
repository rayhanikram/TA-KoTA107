# coding=utf-8

from sqlalchemy import Column, String, Integer, Date, Float, Time
from .entity import Entity, Base
from marshmallow import Schema, fields

# ... other import statements ...

# ... Geocode class definition ...



class Geocode(Entity, Base):
    __tablename__ = 'geocode'

    place_id = Column(Integer, primary_key=True)
    licence = Column(String)
    osm_type = Column(String)
    osm_id = Column(Integer)
    boundingbox_0= Column(Float)
    boundingbox_1= Column(Float)
    boundingbox_2= Column(Float)
    boundingbox_3= Column(Float)
    lat= Column(Float)
    lon= Column(Float)
    display_name = Column(String)
    classg = Column(String)
    typeg = Column(String)
    importance= Column(Integer)
    icon = Column(String)
    
    def __init__(self,place_id, licence, osm_type, osm_id, boundingbox_0, boundingbox_1, boundingbox_2, boundingbox_3, lat, lon, display_name, classg, typeg, importance, icon, created_by):
        Entity.__init__(self, created_by)
        self.place_id = place_id
        self.licence = licence
        self.osm_type = osm_type
        self.osm_id = osm_id
        self.boundingbox_0 = boundingbox_0
        self.boundingbox_1 = boundingbox_1
        self.boundingbox_2 = boundingbox_2
        self.boundingbox_3 = boundingbox_3
        self.lat = lat
        self.lon = lon
        self.display_name = display_name
        self.classg = classg
        self.typeg = typeg
        self.importance = importance
        self.icon = icon


class GeocodeSchema(Schema):

    licence= fields.Str()
    osm_type= fields.Str()
    osm_id= fields.Number()
    boundingbox_0= fields.Number()
    boundingbox_1= fields.Number()
    boundingbox_2= fields.Number()
    boundingbox_3= fields.Number()
    lat= fields.Number()
    lon= fields.Number()
    display_name= fields.Str()
    classg= fields.Str()
    typeg= fields.Str()
    importance= fields.Number()
    icon= fields.Str()