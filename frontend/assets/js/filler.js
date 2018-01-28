function filler(data){
	
	$("[data-gf=title]").text(data.title);
	$("[data-gf=actor0]").text(data.cast[0]);
	$("[data-gf=actor1]").text(data.cast[1]);
	$("[data-gf=actor2]").text(data.cast[2]);

	var i=0; 
	for (var key in data.words){
		$("[data-gf=word"+i+"]").text(key);
		$("[data-gf=word"+i+"s]").text(data.words[key]);
		i++;
		console.log(key);
	console.log(data.words[key]);
	}

		 if ($(".custom-bar-chart")) {
		 	var j=0; 
        $(".bar").each(function () {

            var i = Math.floor(data.emotions[$(this).find(".value").attr("data-gf")] *300); 
            $(this).find(".value").attr("data-gf-finalvalue",i+"%");
           	console.log($(this).find(".value").attr("data-gf-finalvalue")); 
            j++; 
        }); 

	    if ($(".custom-bar-chart")) {
        $(".bar").each(function () {
            var i = $(this).find(".value").attr("data-gf-finalvalue");
             $(this).find(".value").height(i);
            /*$(this).find(".value").animate({
                height: i
            }, 1000); */


        }); 

         var doughnutData = [
         {
          value: data.rating/data.bestRating,
          color:"#772222"
        },
        {
          value : 1-data.rating/data.bestRating,
          color : "#e27c1d"
        }
        ];


        var myDoughnut = new Chart(document.getElementById("serverstatus02").getContext("2d")).Doughnut(doughnutData);
		$("[data-gf=imdbRating]").text(data.rating); 

          var doughnutData2 = [
            {
              value: data.sentiment,
              color:"#772222"
            },
            {
              value : 1-data.sentiment,
              color : "#e27c1d"
            }
            ];
            var myDoughnut = new Chart(document.getElementById("serverstatus03").getContext("2d")).Doughnut(doughnutData2);


            $("[data-gf=poster]").css("background-image", "url("+data.poster+")"); 
            $("[data-gf=avgColor]").css("background-color", data.avg_color); 
            $("[data-gf=avgColorText]").text(data.avg_color);
            $("[data-gf=trailer]").attr("src", data.trailer); 


    }
	}
}

var filmData;

$( document ).ready(function() {
   
  filler(filmData); 
});

filmData=filmData={
    "emotions": {
        "anger": 0.2608336415446551,
        "contempt": 0.02673979182452723,
        "disgust": 0.0582791574464255,
        "fear": 0.011234817311364076,
        "happiness": 0.12107871169938434,
        "sadness": 0.31659477612443998,
        "surprise": 0.2052391040492038
    },
    "avg_color": "#444C42",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "title": "Dunkirk (2017)",
    "rating": "8.1",
    "bestRating": "10",
    "votes": "328,864",
    "rated": "12A",
    "genre": [
        "Action",
        "Drama",
        "History"
    ],
    "description": "Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.",
    "cast": [
        "Fionn Whitehead",
        "Barry Keoghan",
        "Mark Rylance"
    ],
    "writers": [
        "Christopher Nolan",
        "Syncopy",
        "Warner Bros.",
        "Dombey Street Productions"
    ],
    "directors": [
       "Christopher Nolan"
    ],
    "trailer": "https://www.youtube.com/watch?v=F-eMt3SrfFU",  
    "words": {
        "back": 10,
        "fight": 8,
        "men": 6,
        "load": 5,
        "leave": 5,
        "keep": 5,
        "army": 5,
        "way": 5,
        "help": 5,
        "many": 4
    },
    "sentiment": 0.5471675470471382
}; 









$("#hp").click(function(){
	filmData={
    "writers": [
        "Steve Kloves (screenplay)",
        "J.K. Rowling (novel)",
        "Warner Bros.",
        "Heyday Films",
        "Moving Picture Company (MPC)"
    ],
    "title": "Harry Potter and the Deathly Hallows: Part 2\u00a0(2011)",
    "directors": [
        "David Yates"
    ],
    "votes": "625,308",
    "rated": "12A",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "genre": [
        "Adventure",
        "Drama",
        "Fantasy"
    ],
    "bestRating": "10",
    "emotions": {
        "contempt": 0.042656401905806655,
        "disgust": 0.05036311026675762,
        "sadness": 0.25689139794053106,
        "fear": 0.037543346165091106,
        "surprise": 0.20511691321214023,
        "happiness": 0.24148431124852973,
        "anger": 0.16594451926114356
    },
    "trailer": "https://www.youtube.com/embed/ieibsVyVYnU",
    "description": "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    "avg_color": "#1E231C",
    "cast": [
        "Daniel Radcliffe",
        "Emma Watson",
        "Rupert Grint"
    ],
    "rating": "8.1",
    "words": {
            "find": 17,
            "kill": 14,
            "tell": 10,
            "boy": 9,
            "she": 8,
            "talk": 7,
            "time": 7, 
            "thought": 7, 
            "help": 6,  
            "ask": 6
            },
    "sentiment": 0.5393474896748861
};
	filler(filmData);
}); 


$("#fc").click(function(){
	filmData={
    "emotions": {
        "anger": 0.12484974390969752,
        "contempt": 0.06928345849108136,
        "disgust": 0.047888783082251626,
        "fear": 0.017517684403515046,
        "happiness": 0.3111488170767161,
        "sadness": 0.12734911709050512,
        "surprise": 0.3019623959462332
    },
    "avg_color": "#1F231E",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "title": "Fight Club (1999)",
    "rating": "8.8",
    "bestRating": "10",
    "votes": "1,527,137",
    "rated": "18",
    "genre": [
        "Drama"
    ],
    "description": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.",
    "cast": [
        "Brad Pitt",
        "Edward Norton",
        "Meat Loaf"
    ],
    "writers": [
        "Chuck Palahniuk (novel)",
        "Jim Uhls (screenplay)",
        "Fox 2000 Pictures",
        "Regency Enterprises",
        "Linson Films"
    ],
    "directors": [
        "David Fincher"
    ],
   "words": {
        "thing" : 17,
        "people": 17,
        "rule" : 16,
        "time" : 15,
        "right" : 13,
        "tell" : 12,
        "talk" : 10,
        "two" : 8,
        "still" : 7,
        "fight" : 7
    },
    "sentiment": 0.22783506910006204,
    "trailer": "https://www.youtube.com/embed/SUXWAEX2jlg"
}; 
	filler(filmData);
}); 


$("#dk").click(function(){

	filmData={
    "emotions": {
        "anger": 0.2608336415446551,
        "contempt": 0.02673979182452723,
        "disgust": 0.0582791574464255,
        "fear": 0.011234817311364076,
        "happiness": 0.12107871169938434,
        "sadness": 0.31659477612443998,
        "surprise": 0.2052391040492038
    },
    "avg_color": "#444C42",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "title": "Dunkirk (2017)",
    "rating": "8.1",
    "bestRating": "10",
    "votes": "328,864",
    "rated": "12A",
    "genre": [
        "Action",
        "Drama",
        "History"
    ],
    "description": "Allied soldiers from Belgium, the British Empire and France are surrounded by the German Army, and evacuated during a fierce battle in World War II.",
    "cast": [
        "Fionn Whitehead",
        "Barry Keoghan",
        "Mark Rylance"
    ],
    "writers": [
        "Christopher Nolan",
        "Syncopy",
        "Warner Bros.",
        "Dombey Street Productions"
    ],
    "directors": [
       "Christopher Nolan"
    ],
    "trailer": "https://www.youtube.com/watch?v=F-eMt3SrfFU",  
    "words": {
        "back": 10,
        "fight": 8,
        "men": 6,
        "load": 5,
        "leave": 5,
        "keep": 5,
        "army": 5,
        "way": 5,
        "help": 5,
        "many": 4
    },
    "sentiment": 0.5471675470471382
}; 
	filler(filmData);
}); 

$("#js").click(function(){
filmData={
    "emotions": {
        "disgust": 0.06450033527107278,
        "surprise": 0.1724605907144232,
        "fear": 0.01686403601923335,
        "anger": 0.2046644246481925,
        "happiness": 0.3735164286126139,
        "contempt": 0.03461711882859173,
        "sadness": 0.13337706590587248
    },
    "rated": "15",
    "rating": "7.0",
    "writers": [
        "Michael Bacall (screenplay)",
        "Oren Uziel (screenplay)",
        "Columbia Pictures",
        "Metro-Goldwyn-Mayer (MGM)",
        "LStar Capital"
    ],
    "description": "After making their way through high school (twice), big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college.",
    "poster": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwNzAxMDU1M15BMl5BanBnXkFtZTgwNDE2NTU1MTE@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "cast": [
        "Channing Tatum",
        "Jonah Hill",
        "Ice Cube"
    ],
    "bestRating": "10",
    "votes": "295,427",
    "avg_color": "#42382C",
    "genre": [
        "Action",
        "Comedy",
        "Crime"
    ],
    "directors": [
        "Phil Lord",
        "Christopher Miller"
    ],
    "title": "22 Jump Street (2014)",
    "trailer": "https://www.youtube.com/watch?v=-Jdc3nidnAg",
    "words": {
        "right": 36,
        "two": 19,
        "good": 18,
        "time": 18,
        "turn": 16,
        "find": 15,
        "thing": 15,
        "thought": 14,
        "jump": 14,
        "back": 12
    },
    "sentiment": 0.4243352693669936
}; 
	filler(filmData);
});


$("#td").click(function(){
	filmData={
    "emotions": {
        "anger": 0.12633294954400992,
        "contempt": 0.06922162495249339,
        "disgust": 0.04787810447285736,
        "fear": 0.017500550512042898,
        "happiness": 0.31042924800010546,
        "sadness": 0.1272680520062708,
        "surprise": 0.30136947051222013
    },
    "avg_color": "#1F231E",
    "poster": "https://images-na.ssl-images-amazon.com/images/I/91DnBoRk-WL._SY445_.jpg",
    "title": "How to Train Your Dragon",
    "rating": "8.8",
    "bestRating": "10",
    "votes": "1,527,155",
    "rated": "18",
    "genre": [
        "Cartoon"
    ],
    "description": "",
    "cast": [
        "Brad Pitt",
        "Edward Norton",
        "Meat Loaf"
    ],
    "writers": [
        "Chuck Palahniuk (novel)",
        "Jim Uhls (screenplay)",
        "Fox 2000 Pictures",
        "Regency Enterprises",
        "Linson Films"
    ],
    "directors": [
        "David Fincher"
    ],
    "words": {
        "dragon" : 21,
        "kill" : 19,
        "back" : 19,
        "thing" : 18,
        "find" : 14,
        "head" : 11,
        "stop" : 10,
        "time" : 9,
        "few" : 8,
        "most" : 8
    },
    "sentiment": 0.641549676656723,
    "trailer": "https://www.youtube.com/embed/SUXWAEX2jlg"
}; 
	filler(filmData); 
}) 
/*

*/