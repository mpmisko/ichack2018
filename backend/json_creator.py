import json
from imdbapi import getURL
from movie_processer import MovieProcesser
from keywords import analyse_keywords
from avg_clr import avg_clr_process
import sys
from youtubelink import trailer_link
from EmotionsClient import EmotionsClient

OUTPUT = "/Users/mackopes/Desktop/processedmovie/pic"
OUTPUTPICS = "/Users/mackopes/Desktop/processedmovie/"

movie_name = sys.argv[1]
movie_input_path = sys.argv[2]
subtitle_input = sys.argv[3]
json_name = sys.argv[4]

#MovieProcesser().video_to_frames(movie_input_path, OUTPUT)

print("Images generated")

movie = dict()

for k, v in EmotionsClient().process_movie().items():
    movie[k] = v

print("Emotions analysed")

for k, v in avg_clr_process(OUTPUTPICS).items():
    movie[k] = v

print("average color calculated")

for k, v in getURL(movie_name).items():
    movie[k] = v

print("movie info obtained")

for k, v in analyse_keywords(subtitle_input).items():
    movie[k] = v

print("keywords analysed")

for k, v in trailer_link(movie_name).items():
    movie[k] = v

print("trailer link discovered")

json_write = json.dumps(movie, indent = 4)
f = open("json/" + json_name + ".json", "w")
f.write(json_write)

print("done, enjoy!")