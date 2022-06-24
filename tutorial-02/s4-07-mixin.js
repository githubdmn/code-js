var title = 'Mixin es6\n\n';
console.log(title);

var canEat = {
	eat: function () {
		console.log('Can eat');
	},
};

var canWalk = {
	walk: function () {
		console.log('Can walk');
	},
};

var canSwim = {
	swim: function () {
		console.log('Can swim');
	},
};

function Person() {}
function Fish() {}

Object.assign(Person.prototype, canEat, canWalk);
Object.assign(Fish.prototype, canEat, canSwim);

var p = new Person();
p.eat();
