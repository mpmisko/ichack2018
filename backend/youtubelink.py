import urllib.parse
import urllib.request
from bs4 import BeautifulSoup

def trailer_link(film_name):
    query = urllib.parse.quote(film_name)
    url = "https://www.youtube.com/results?search_query=" + query
    response = urllib.request.urlopen(url)
    html = response.read()
    soup = BeautifulSoup(html, "html5lib")
    return {"trailer" : 'https://www.youtube.com' + soup.findAll(attrs={'class':'yt-uix-tile-link'})[0]['href']}