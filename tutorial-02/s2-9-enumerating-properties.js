var title = 'ES5\nSection 2 - 9 Enumerating properties\n';
console.log(title);

function Square(side) {
	this.side = side;
	this.draw = function () {
		console.log('draw');
	};
}

// ES6 syntax
const a = new Square(10);

for (let key in a) {
	console.log(key, a[key]);
}

for (let key in a) {
	if (typeof a[key] !== 'function') console.log(key, a[key]);
}

const keys = Object.keys(a);
console.log(keys);

if ('side' in a) console.log('Square has a side');
