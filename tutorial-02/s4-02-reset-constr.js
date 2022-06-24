var title = 'Resetting constructor\n\n';
console.log(title);

function Shape(title) {
	this.title = title;
}

Shape.prototype.draw = function () {
	console.log(' Draw\n');
};

Shape.prototype.duplicate = function () {
	console.log(' Duplicate\n');
};

Shape.prototype.show = function () {
	console.log(Object.keys(Shape.prototype));
};

function Circle(radius) {
	this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
// When reset prototype, reset the constructor
Circle.prototype.constructor = Circle;

function Square(side) {
	this.side = side;
}

Square.prototype = Object.create(Shape.prototype);
// When reset prototype, reset the constructor
Square.prototype.constructor = Square;

var c = new Circle(4);
c.draw();
c.show();
console.log(Object.getOwnPropertyNames(c));
console.log(Circle.prototype.constructor); // [Function: Circle]
