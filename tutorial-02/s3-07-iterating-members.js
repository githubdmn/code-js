var title = '\nIterating instance and prototype members\n\n';
console.log(title);

function Circle(radius) {
	this.radius = radius;
	this.move = function () {
		console.log('Move');
	};
}

Circle.prototype.draw = function () {
	console.log('Draw');
};

var c1 = new Circle(5);

// instance members
var k = Object.keys(c1);
console.log(k);

// for in returns all members (instance and prototype)
for (var key in c1) console.log(key);

console.log(c1.hasOwnProperty('radius'));
console.log(c1.hasOwnProperty('move'));
console.log(c1.hasOwnProperty('draw'));
