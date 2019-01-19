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

	eat(){
		console.log('Eat');
	}
}


class Rabbit extends Animal{
	eat(){
		console.log(this.name + ' Eat Wolf');
	}
}

class Wolf extends Animal{
	eat(){
		console.log(this.name + ' Eat Rabbit');
	}
}


let iepure = new Rabbit('Iepure');
iepure.sayName();
iepure.move();
iepure.eat();



let lup = new Wolf('Lup');
lup.sayName();
lup.move();
lup.eat();