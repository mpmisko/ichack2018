#!flask/bin/python

from time import time
from flask import Flask, send_file, request
import json
from threading import Thread


app = Flask(__name__, static_url_path='')
frontend_test_json = {
  "name": "batman",
  "picutre": "https://goo.gl/kqBGik",
  "avg_color": "#FF0000",
  "emotions": {
    "anger": 0.15,
    "contempt": 0.05,
    "disgust": 0.1,
    "fear": 0.04,
    "happiness": 0.4,
    "neutral": 0.23,
    "sadness": 0.1,
    "surprise": 0.02
  },
  "words": ["war", "fast", "mjolnir", "earth", "conquer"],
  "objects": ["batmobile", "clown", "car", "gun", "villain"]
}

@app.route('/frontend_test')
def index():
    return frontend_test_json

@app.route('/process')
def process():
    return "not ready yet"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', threaded=True)
    #index()
