var zagadki = [];
zagadki.push("Czerwień krwi, i wina słodycz doskonała, delikatne ciało, lecz serce jak skała.");
zagadki.push("Wije się, choć nie jest wężem, czasami wylewa, ale nie łzy. Co to jest?");
zagadki.push("Dotyka niebios, dotyka ziemi, lecz ciebie jej dotyk w proch by przemienił.");
zagadki.push("Latem strój mam zielony i w noce i we dnie. Jesienią jest on żółty, zimą wdziewam biel.");
zagadki.push("Prędzej wielbłąd przejdzie przez jej ucho, niż ją znajdziesz w stogu siana.");
zagadki.push("Ona z drugą się nie zejdzie, ale dwoje ludzi - tak. Co to jest?");
zagadki.push("Ma główkę zamiast ciała i liście zamiast rąk, nie myśli i nie czuje, bo miast serca ma głąb.");
zagadki.push("Kapelusz nosi na deszcz i pogodę i stoi w miejscu na jednej nodze. Co to jest?");
zagadki.push("Co ma cztery nogi i siedzenie, ale nie biega i nie siada?");
zagadki.push("Żyję w oceanach, jeziorach i rzekach. Kiedy zmarznę zastygam, zaś w upale znikam.");
zagadki.push("Dusi się bez powietrza, chociaż nie ma płuc.");

var odpowiedzi = [];
odpowiedzi.push("wisnia");
odpowiedzi.push("rzeka");
odpowiedzi.push("blyskawica");
odpowiedzi.push("drzewo");
odpowiedzi.push("igla");
odpowiedzi.push("gora");
odpowiedzi.push("kapusta");
odpowiedzi.push("grzyb");
odpowiedzi.push("krzeslo");
odpowiedzi.push("woda");
odpowiedzi.push("ogien");

$(document).ready(function(){
	//initial load
	var number = 0;

	$('#start').click(function(){
		$('#start').fadeOut();
		$('#check').fadeIn();
		$('#riddle-input').fadeIn();
		$('#zagadka').html(zagadki[0]);
	});

	var riddleLength = zagadki.length;

	$('#check').click(function(){
		validate();	
	});

	$(document).keypress(function(e) {
		if(e.which == 13) {
			validate();	
		}
	});


	function validate(){
		var answer = $('#riddle-input').val().toLowerCase();
		answer= answer.replace("ś", "s");
		answer= answer.replace("ł", "l");
		answer= answer.replace("ó", "o");
		answer= answer.replace("ń", "n");
		//validate
		if(answer===odpowiedzi[number]){
			number++;
			if (number > riddleLength-1){
				$('#zagadka').html("Super! Tajne hasło: Nekomori - wyślij je Iwonie na GMAILa :)");
				$("#nagroda").fadeIn();
			}
			else{
				$('#correct').fadeIn("slow").delay(500).fadeOut("slow");
				$('#zagadka').html(zagadki[number]);
			}
				$('#riddle-input').val("");
		}
		else{
			$('#error').fadeIn("slow").delay(500).fadeOut("slow");
		}
	}

});