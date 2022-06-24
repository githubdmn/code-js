var title = 'Extends\n\n';
console.log(title);

function extendsImpl(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	// When reset prototype, reset the constructor
	Child.prototype.constructor = Child;
}

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
	console.log(this, '\n\t', Object.keys(Shape.prototype), '\n');
};

function Circle(radius, title) {
	Shape.call(this, title);
	this.radius = radius;
}
extendsImpl(Circle, Shape);

function Square(side, title) {
	Shape.call(this, title);
	this.side = side;
}
extendsImpl(Square, Shape);

var c = new Circle(4, 'Circle One');
c.show();
console.log(Object.getOwnPropertyNames(c));
console.log(Circle.prototype.constructor); // [Function: Circle]
