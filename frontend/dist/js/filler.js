function filler(id, filmData){
	$("[data-gf-id="+id+"][data-gf=title]").text(filmData.name);
	$("[data-gf-id="+id+"][data-gf=img]").attr("src",filmData.picture);
	$("[data-gf-id="+id+"][data-gf=desc]").text("adam");
	$("[data-gf-id="+id+"][data-gf=color]").css("background-color",filmData.avg_color);

	for(i=0;i<filmData.words.length;i++){
		$("[data-gf-id="+id+"][data-gf=words]").append("<span class=\"tags__tag--word\" >"+filmData.words[i]+ " </span>");
	}
	for(i=0;i<filmData.objects.length;i++){
		$("[data-gf-id="+id+"][data-gf=objects]").append("<span class=\"tags__tag--word\" >"+filmData.objects[i]+ " </span>");
	}
}


$( document ).ready(function() {
	var film0= {
	 "name": "batman",
	 "picture": "http://mynameismatthieu.com/WOW/img/wow-4.gif",
	 "avg_color": "#FF00F0",
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
   	filler(0,film0);

});

