# coding=utf-8

from sqlalchemy import Column, String, Integer, Date, Float, Time,ARRAY
from sqlalchemy.orm import relationship
from .entity import Entity, Base
from marshmallow import Schema, fields

# ... other import statements ...

# ... Geocode class definition ...



class Rekapitulasi(Entity, Base):
    __tablename__ = 'Rekapitulasi'

    id = Column(Integer, primary_key=True)
    jenis_rekap = Column(String)
    lable = Column(ARRAY(String))
    datas = Column(ARRAY(String))
    Tahun = Column(ARRAY(Date))
    
    def __init__(self,id, jenis_rekap, lable, datas, Tahun, created_by):
        Entity.__init__(self, created_by)
        self.id = id
        self.jenis_rekap = jenis_rekap
        self.lable = lable
        self.datas = datas
        self.Tahun = Tahun


class RekapitulasiSchema(Schema):

    id = fields.Number()
    jenis_rekap = fields.Str()
    lable = fields.List(fields.Str())
    datas = fields.List(fields.Number())
    Tahun = fields.List(fields.Date())