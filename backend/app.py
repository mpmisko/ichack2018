#!flask/bin/python

from time import time
from flask import Flask, send_file, request
import json
from threading import Thread

@app.route('/')
def index():
    return "Nothing here :)"

@app.route('/process')
def process():
    return "Some json"


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', threaded=True)
    #index()
