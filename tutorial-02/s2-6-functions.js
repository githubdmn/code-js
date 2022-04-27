const title = 'ES5\nSection 2 - Functions';
console.log(title);

var newSquare = new Function(
	'title',
	'side',
	`this.title = title
	this.side = side
	this.show = function() {
		return 'Functions are objects! DO NOT USE THIS SYNTAX!!!'
	}`,
);

var ns = new newSquare('New', 64);
console.log(ns.show());

function Square(title, side) {
	this.title = title;
	this.side = side;
	this.show = function () {
		return 'This is a square ' + this.title + ' with side length ' + this.side;
	};
}

var a = new Square('A', 2);
console.log(a.show());
// TODO: How to use call and apply
// Square.call({}, 'A', 4)
