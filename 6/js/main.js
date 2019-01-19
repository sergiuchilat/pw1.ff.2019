class Card{
	constructor(params){
		this.id = params.id;
		this.title = params.title;
		this.description = params.description;
		this.image = params.image;	
	}

	init(){
		document.getElementById('card-' + this.id + '-title').innerHTML = this.title;
		document.getElementById('card-' + this.id + '-description').innerHTML = this.description;
		document.getElementById('card-' + this.id + '-image').setAttribute('src', this.image);
	}
}


let card1Info = '{"id": 1,	"title": "Card title 1", "description": "Card description 1. Card description 1. Card description 1. Card description 1. ", "image": "img/1.jpg"}';

let card1 = new Card(JSON.parse(card1Info));
card1.init();

let card2Info = '{"id": 2,	"title": "Card title 2", "description": "Card description 2. Card description 2. Card description 2. Card description 2. ", "image": "img/2.png"}';

let card2 = new Card(JSON.parse(card2Info));
card2.init();



