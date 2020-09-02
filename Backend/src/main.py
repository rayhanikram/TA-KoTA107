# coding=utf-8
from flask import Flask, jsonify, request
from .entities.entity import Session, engine, Base
from .entities.data_tweet import Data_tweet, Data_tweetSchema
from .entities.geocode import Geocode, GeocodeSchema
from flask_cors import CORS



# creating the Flask application
app = Flask(__name__)
CORS(app)

# if needed, generate database schema
Base.metadata.create_all(engine)


@app.route('/data_tweets')
def get_data_tweets():
    # fetching from the database
    session = Session()
    data_tweet_objects = session.query(Data_tweet).all()

    # transforming into JSON-serializable objects
    schema = Data_tweetSchema(many=True)
    data_tweets2 = schema.dump(data_tweet_objects)

    # serializing as JSON
    session.close()
    return jsonify(data_tweets2)


@app.route('/geocodes')
def get_geocodes():
    # fetching from the database
    session = Session()
    geocode_objects = session.query(Geocode).all()

    # transforming into JSON-serializable objects
    schema = GeocodeSchema(many=True)
    geocodes2 = schema.dump(geocode_objects)

    # serializing as JSON
    session.close()
    return jsonify(geocodes2)


@app.route('/data_tweets', methods=['POST'])
def add_tweet():
    # mount tweet object
    posted_data_tweet = Data_tweetSchema(only=('date', 'time', 'timezone', 'username', 'name', 'place', 'tweet', 'replies_count', 'retweet_count', 'likes_count', 'link', 'retweet', 'quote_url', 'video'))\
        .load(request.get_json())

    data_tweet = Data_tweet(**posted_data_tweet.data, created_by="HTTP post request")

    # persist tweet
    session = Session()
    session.add(data_tweet)
    session.commit()

    # return created tweet
    new_data_tweet = Data_tweetSchema().dump(data_tweet).data
    session.close()
    return jsonify(new_data_tweet), 201


@app.route('/geocodes', methods=['POST'])
def add_geocode():
    # mount geocode object
    posted_geocode = GeocodeSchema(only=('place_id','licence', 'osm_type', 'osm_id', 'boundingbox_0', 'boundingbox_1', 'boundingbox_2', 'boundingbox_3', 'lat', 'lon', 'display_name', 'classg', 'typeg', 'importance', 'icon'))\
        .load(request.get_json())

    geocode = Data_tweet(**posted_geocode.data, created_by="HTTP post request")

    # persist geocode
    session = Session()
    session.add(geocode)
    session.commit()

    # return created geocode
    new_geocode = Data_tweetSchema().dump(geocode).data
    session.close()
    return jsonify(new_geocode), 201
