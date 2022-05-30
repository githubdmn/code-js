const title = 'ES5\nSection 2 - Constructor';
console.log(title);

// Factory function ES5
function createSquare(title, sides) {
	return {
		title: title,
		sides: sides,
		show: function () {
			return (
				'This is a square ' + this.title + ' with side length ' + this.sides
			);
		},
	};
}

var a = createSquare('A', 4);
console.log(a.show());

// Constructor Function
function Square(title, sides) {
	console.log(this);
	this.title = title;
	this.sides = sides;
	this.show = function () {
		return 'This is a square ' + this.title + ' with side length ' + this.sides;
	};
	// Following line is executed automatically
	// return this
}

// Implicit instantation
var b = new Square('B', 5);
console.log(b.show());

// var c = Square('C', 5) // Object [global]
