# coding=utf-8

from sqlalchemy import Column, String, Integer, Date, Time
from .entity import Entity, Base
from marshmallow import Schema, fields

# ... other import statements ...

# ... Data Twitter class definition ...



class Data_tweet(Entity, Base):
    __tablename__ = 'data_tweet'
    
    id = Column(Integer, primary_key=True)
    conversation_id= Column(Integer)
    created_at= Column(Integer)
    date= Column(Date)
    time= Column(Time)
    timezone= Column(String)
    user_id= Column(Integer)
    username= Column(String)
    name= Column(String)
    place= Column(String)
    tweet= Column(String)
    replies_count= Column(Integer)
    retweets_count= Column(Integer)
    likes_count= Column(Integer)
    link= Column(String)
    retweet= Column(String)
    quote_url= Column(String)
    video= Column(Integer)

    def __init__(id,  conversation_id, created_at, date, time, timezone, user_id, username, name, place, tweet, replies_count, retweets_count, likes_count, link, retweet, quote_url, video):
        Entity.__init__(self, created_by)
        self.conversation_id = title
        self.created_at = description
        self.date = date
        self.time = time
        self.timezone = timezone
        self.user_id = user_id
        self.username = username
        self.name = name
        self.place = place
        self.tweet = tweet
        self.replies_count = replies_count
        self.retweets_count = retweet_count
        self.likes_count = likes_count
        self.link = link
        self.retweet = retweet
        self.quote_url = quote_url
        self.video = video

class Data_tweetSchema(Schema):
    conversation_id= fields.Number()
    created_at= fields.Number()
    date= fields.Date()
    time= fields.Time()
    timezone= fields.Str()
    user_id= fields.Number()
    username= fields.Str()
    name= fields.Str()
    place= fields.Str()
    tweet= fields.Str()
    replies_count= fields.Number()
    retweets_count= fields.Number()
    likes_count= fields.Number()
    link= fields.Str()
    retweet= fields.Str()
    quote_url= fields.Str()
    video= fields.Number()
