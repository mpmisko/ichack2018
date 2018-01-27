import requests
import time
import os
import json
from threading import Thread

MULTITHREADING = False


class EmotionsClient:

    def __init__(self):
        self.url = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize'
        # https://westus.api.cognitive.microsoft.com/emotion/v1.0
        self.key = 'd4dac732849740fdb31c31b217463db2'
        self.maxNumRetries = 10

    def process_request(self, json, data, headers, params):
        retries = 0
        result = None

        while True:
            response = requests.request('post', self.url, json=json, data=data, headers=headers, params=params)

            if response.status_code == 429:
                if retries <= self.maxNumRetries:
                    time.sleep(1)
                    retries += 1
                    continue
                else:
                    break

            elif response.status_code == 200 or response.status_code == 201:
                if 'content-length' in response.headers and int(response.headers['content-length']) == 0:
                    result = None
                elif 'content-type' in response.headers and isinstance(response.headers['content-type'], str):
                    if 'application/json' in response.headers['content-type'].lower():
                        result = response.json() if response.content else None
                    elif 'image' in response.headers['content-type'].lower():
                        result = response.content
            else:
                print("Error code: %d" % (response.status_code))
                print("Message: %s" % (response.json()['error']['message']))
            break

        return result

    def process_image(self, path_to_img):
        with open(path_to_img, 'rb') as f:
            data = f.read()

        headers = dict()
        headers['Ocp-Apim-Subscription-Key'] = self.key
        headers['Content-Type'] = 'application/octet-stream'

        json = None
        params = None
        result = self.process_request(json, data, headers, params)
        return result

    def process_movie(self, pics_dir):
        responses = []
        for filename in os.listdir(pics_dir):
            print("sending request to Microsoft: " + filename)
            response = self.process_image(pics_dir + filename)
            print(response)
            responses.append(response)
        return self._compute(responses)

    def _avg(self, frame):
        feeling = {
            'anger': 0,
            'contempt': 0,
            'disgust': 0,
            'fear': 0,
            'happiness': 0,
            'neutral': 0,
            'sadness': 0,
            'surprise': 0
        }
        if len(frame) == 0: return feeling

        for person in frame:
            for k, v in person['scores'].items():
                feeling[k] += v

        for k, v in feeling.items():
            feeling[k] /= len(frame)

        return feeling

    def _compute(self, responses):
        feeling = {
            'anger': 0,
            'contempt': 0,
            'disgust': 0,
            'fear': 0,
            'happiness': 0,
            'neutral': 0,
            'sadness': 0,
            'surprise': 0
        }

        averages = list(filter(lambda l: self._are_zero(l), list(map(lambda fr: self._avg(fr), responses))))
        print(averages)

        if len(averages) == 0:
            return {}

        for f in averages:
            for k, v in f.items():
                feeling[k] += v

            for k, v in feeling.items():
                feeling[k] = v / len(averages)

        return feeling

    def _are_zero(self, average):
        for k, v in average.items():
            if v != 0:
                return True
        return False

# example use:
#   path_to_img = "/Users/mpmisko/Downloads/IMG_20180120_131159.jpg"
#   ac = EmotionsClient()
#   response = ac.process_image(path_to_img)

eClient = EmotionsClient()
print(eClient.process_movie('/Users/michal/Desktop/pics/dunkirk/'))
