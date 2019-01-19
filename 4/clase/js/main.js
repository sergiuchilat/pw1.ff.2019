class Animal{
	
	constructor(name){
		this.name = name;
	}
	move(){
		console.log('Move');	
	}

	sayName(){
		console.log('My name is ' + this.name);
	}

	eatRabbit(){
		console.log(this.name + ' Eat Rabbit');
	}
}


let iepure = new Animal('Iepure');
iepure.sayName();
iepure.move();
iepure.eatRabbit();


let lup = new Animal('Lup');
lup.sayName();
lup.move();
lup.eatRabbit();