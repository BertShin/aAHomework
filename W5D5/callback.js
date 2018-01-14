// window.setTimeout(function() {
// 	alert('HAMMER TIME');
// }, 2000);

// function hammerTime (time) {
// 	window.setTimeout(function() {
// 		alert(`${time} is LAKER TIME!`);
// 	});
// }

// Tea and Biscuits

const readline = require('readline');

const reader = readline.createInterface( {
	input: process.stdin,
	output: process.stdout
});

function teaAndBiscuits () {
	reader.question('Want some tea??', function(res) {
		console.log(`You replied ${res}.`);
		reader.question('Want sum Biscuits too??', function(res2) {
			console.log(`You replied ${res}.`);

			const first = (res === 'yes') ? 'do' : 'dont\'t';
			const second = (res2 === 'yes') ? 'do' : 'dont\'t';
			console.log(`So you ${first} want sum tea and you ${second} want some biscuits.`);
			reader.close();
		});
	});
}


// CatDog

function Cat() {
	this.name = 'Shaq';
	this.age = '35';
}

function Dog() {
	this.name = 'Kobe'
	this.age = '34';
}

Dog.prototype.chase = function(cat) {
	console.log(`${this.name} and ${cat.name} are the best duo`)
};

const Kobe = new Dog();
const Shaq = new Cat();

Kobe.chase.call(Shaq, Kobe);
Kobe.chase.apply(Shaq, [Kobe]);