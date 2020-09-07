# coding=utf-8

from sqlalchemy import Column, String, Integer, Date, Float, Time
from .entity import Entity, Base
from marshmallow import Schema, fields

# ... other import statements ...

# ... Geocode class definition ...



class Geocode(Entity, Base):
    __tablename__ = 'data_lokasi'

    place_id = Column(String, primary_key=True)
    atribute_tempat_fasilitas = Column(String)
    address = Column(String)
    lat= Column(Float)
    lon= Column(Float)
    
    def __init__(self,place_id, atribute_tempat_fasilitas, address, lat, lon, created_by):
        Entity.__init__(self, created_by)
        self.place_id = place_id
        self.address = address
        self.atribute_tempat_fasilitas = atribute_tempat_fasilitas
        self.lat = lat
        self.lon = lon


class GeocodeSchema(Schema):

    atribute_tempat_fasilitas= fields.Str()
    lat= fields.Number()
    lon= fields.Number()
    address= fields.Str()