var title = '\nES5 - get and set methods\n';
console.log(title);

function Circle(radius) {
	var radius = radius;
	this.draw = function () {
		console.log('draw');
	};
	Object.defineProperty(this, 'radius', {
		get: function () {
			return radius;
		},
		set: function (value) {
			radius = value;
		},
	});
}

var circle = new Circle(20);
circle.draw();
console.log(circle.radius);
