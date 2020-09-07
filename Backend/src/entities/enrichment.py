# coding=utf-8

from sqlalchemy import Column, String, Integer, Date, Float, Time,ARRAY
from sqlalchemy.orm import relationship
from .entity import Entity, Base
from marshmallow import Schema, fields

# ... other import statements ...

# ... Geocode class definition ...



class Enrichment(Entity, Base):
    __tablename__ = 'data_enrichment'

    conversation_id = Column(Integer, primary_key=True)
    data_text = Column(String)
    atribut_event = Column(ARRAY(String))
    atribut_tempat = Column(ARRAY(String))
    atribut_tanggal = Column(Date)
    atribut_waktu = Column(Time)
    atribut_fasilitas = Column(ARRAY(String))
    atribut_penyebab = Column(ARRAY(String))
    
    def __init__(self,conversation_id, data_text, atribut_event, atribut_tempat, atribut_tanggal, atribut_waktu, atribut_fasilitas, atribut_penyebab, created_by):
        Entity.__init__(self, created_by)
        self.conversation_id = conversation_id
        self.data_text = data_text
        self.atribut_event = atribut_event
        self.atribut_tempat = atribut_tempat
        self.atribut_tanggal = atribut_tanggal
        self.atribut_waktu = atribut_waktu
        self.atribut_fasilitas = atribut_fasilitas
        self.atribut_penyebab = atribut_penyebab


class EnrichmentSchema(Schema):

    atribute_tempat_fasilitas= fields.Str()
    lat= fields.Number()
    lon= fields.Number()
    address= fields.Str()
    data_text = fields.Str()
    atribut_event = fields.List(fields.Str())
    atribut_tempat = fields.List(fields.Str())
    atribut_tanggal = fields.Date()
    atribut_waktu = fields.Time()
    atribut_fasilitas = fields.List(fields.Str())
    atribut_penyebab = fields.List(fields.Str())