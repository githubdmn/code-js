

function first() {}
const secondFunction = function() {};


console.log(first.name);
console.log(secondFunction.name);


const third = function thirdA() {};

console.log(third.name);


const person = {
	get firstName() {
		return "John";
	},
	sayName: function() {
		console.log(this.name);
	}
}

console.log(person.sayName.name);



