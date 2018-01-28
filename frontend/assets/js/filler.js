function filler(data){
	alert("Adam");

	$("[data-gf=anger]").animate({
                height: 100*data.emotions.anger +"%"
            }, 2000);
	//$("[data-gf=anger]").html(100*data.emotions.anger+"%");
	//$("[data-gf=anger]").hide();//css("height","100%;");
	//$("[data-gf=happiness]").height(80);
	// $("[data-gf=compassion]").css("height","70%;");
	/*$("[data-gf=contempt]").css("height",data.emotions.contempt*100+"%");
	$("[data-gf=disgust]").css("height",data.emotions.disgust*100+"%");
	$("[data-gf=fear]").css("height",data.emotions.fear*100+"%");
	$("[data-gf=happiness]").css("height",data.emotions.happiness*100+"%");
	$("[data-gf=neutral]").css("height",data.emotions.neutral*100+"%");
	$("[data-gf=sadness]").css("height",data.emotions.sadness*100+"%");
	$("[data-gf=surprise]").css("height",data.emotions.surprise*100+"%");

*/

}
filmValues = {
 "name": "batman",
 "picutre": "https://goo.gl/kqBGik",
 "avg_color": "#FF0000",
 "emotions": {
   "anger": 0.10,
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

//$( document ).ready(function() {
		
	    filler(filmValues);
//});
