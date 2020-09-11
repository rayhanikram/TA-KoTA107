from flask import Flask, jsonify, request
from flask_socketio import SocketIO,Namespace
import tweepy
from tweepy import Stream
from tweepy import OAuthHandler
from tweepy.streaming import StreamListener

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)



class MyStreamListener(tweepy.StreamListener):
    def on_status(self, status):
        MyCustomNamespace.tweet_received(status.text)


class MyCustomNamespace(Namespace):
    def on_connect(self):
        auth = tweepy.OAuthHandler("umheF0belv19yP4olgGSgwfw8", "riR1pGgZcojr2HYcnHrhV4NgrkpmSyiazeF1kqmA0rEHoD3eRx")
        auth.set_access_token("1295706370184892416-5XmXFS9xJocmP4LJoYmoK8QncdZcqB", "3mSCAwK1un6ZFvAe2GtMpCRewBfqkGHa49QZUHCBkVV8G")
        api = tweepy.API(auth)
        myStreamListener = MyStreamListener()
        global myStream
        myStream = tweepy.Stream(auth = api.auth, listener=myStreamListener)
        myStream.filter(locations=[107.534180,-7.032068,107.745323,-6.848032], async=True)

    def on_disconnect(self):
        pass

    @staticmethod
    def tweet_received(text):
        emit('tweet_response', {'text': text}, broadcast=True, namespace='/')

socketio.on_namespace(MyCustomNamespace('/'))
