# coding=utf-8
from flask import Flask, jsonify, request
from .entities.entity import Session, engine, Base
from .entities.data_tweet import Data_tweet, Data_tweetSchema
from .entities.geocode import Geocode, GeocodeSchema
from .entities.enrichment import Enrichment, EnrichmentSchema
from flask_cors import CORS
from sqlalchemy import or_



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


@app.route('/enrichments')
def get_enrichments():
    # fetching from the database
    session = Session()
    enrichment_objects = session.query(Enrichment).all()

    # transforming into JSON-serializable objects
    schema = EnrichmentSchema(many=True)
    enrichment2 = schema.dump(enrichment_objects)

    # serializing as JSON
    session.close()
    return jsonify(enrichment2)

@app.route('/enrichments/tempat')
def get_enrichments_tempat():
    # fetching from the database
    session = Session()
    enrichment_objects_tempat = session.query(Enrichment,Geocode).filter(
         or_(Enrichment.atribut_tempat[1] == Geocode.atribute_tempat_fasilitas, Enrichment.atribut_tempat[2] == Geocode.atribute_tempat_fasilitas, Enrichment.atribut_fasilitas[1] == Geocode.atribute_tempat_fasilitas) ).with_entities(Enrichment.data_text,Enrichment.atribut_event,Enrichment.atribut_tempat,Enrichment.atribut_tanggal,Enrichment.atribut_waktu,Enrichment.atribut_fasilitas,Enrichment.atribut_penyebab,Geocode.lat,Geocode.lon)

    # transforming into JSON-serializable objects
    schema = EnrichmentSchema(many=True)
    enrichment_tempat = schema.dump(enrichment_objects_tempat)

    # serializing as JSON
    session.close()
    return jsonify(enrichment_tempat)


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
    posted_geocode = GeocodeSchema(only=( 'data_text', 'atribut_event', 'atribut_tempat', 'atribut_tanggal', 'atribut_waktu', 'atribut_fasilitas', 'atribut_penyebab'))\
        .load(request.get_json())

    geocode = Geocode(**posted_geocode.data, created_by="HTTP post request")

    # persist geocode
    session = Session()
    session.add(geocode)
    session.commit()

    # return created geocode
    new_geocode = GeocodeSchema().dump(geocode).data
    session.close()
    return jsonify(new_geocode), 201


@app.route('/enrichments', methods=['POST'])
def add_enrichment():
    # mount geocode object
    posted_enrichment = EnrichmentSchema(only=( 'atribute_tempat_fasilitas', 'address', 'lat', 'lon'))\
        .load(request.get_json())

    enrichment = Enrichment(**posted_enrichment.data, created_by="HTTP post request")

    # persist geocode
    session = Session()
    session.add(geocode)
    session.commit()

    # return created geocode
    new_enrichment = EnrichmentSchema().dump(enrichment).data
    session.close()
    return jsonify(new_enrichment), 201