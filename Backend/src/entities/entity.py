# coding=utf-8

from datetime import datetime
from sqlalchemy import create_engine, Column, String, Integer, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

db_url = 'localhost:5432'
db_name = 'traffic_monitor'
db_user = 'postgres'
db_password = 'raihan'
engine = create_engine(f'postgresql://{db_user}:{db_password}@{db_url}/{db_name}',isolation_level="READ UNCOMMITTED")
Session = sessionmaker(bind=engine)

Base = declarative_base()


class Entity():

    def __init__(self, created_by):
        self.last_updated_by = created_by

