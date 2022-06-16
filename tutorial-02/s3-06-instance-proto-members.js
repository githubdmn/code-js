var title = '\nInstance and portotype members\n\n';
console.log(title);

function Circle(radius) {
	// Instance members
	this.radius = radius;

	// This will create copy of a draw function for each object
	// this.draw = function () {
	// 	console.log('Draw function');
	// };
}

// This creates single draw function to the parent object
Circle.prototype.draw = function () {
	console.log('Draw function');
};

// Function overriding (equivalent to method overriding)
Circle.prototype.toString = function () {
	return 'this is overridden function';
};

var c1 = new Circle(5);
console.log(c1);
console.log(Object.keys(c1));
console.log(Object.getPrototypeOf(c1));
console.log(c1.toString());
