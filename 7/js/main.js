class Card{

	init(params){
		document.getElementById('card-' + params.id + '-title').innerHTML = params.title;
		document.getElementById('card-' + params.id + '-description').innerHTML = params.description;
		document.getElementById('card-' + params.id + '-image').setAttribute('src', params.image);
	}

	loadJSON(id){
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
		    	let myObj = JSON.parse(this.responseText);
		    	let cardInfo = this.responseText;
		    	card.init(JSON.parse(cardInfo));
		 	}
		};
		xmlhttp.open("GET", "data/" +  id + ".json", true);
		xmlhttp.send();
	}
}


let card = new Card();
card.loadJSON(1);
card.loadJSON(2);
card.loadJSON(3);




