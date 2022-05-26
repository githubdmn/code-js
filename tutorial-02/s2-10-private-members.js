var title = '\nES5 - Private properties and methods\n';
console.log(title);

function Circle(radius) {
	this.radius = radius;
	var compute = function (factor) {
		console.log('computing factor ' + factor);
	};

	this.draw = function () {
		var x, y; //local variables

		compute(0.1);
		console.log('draw');
	};
}

var c = new Circle(10);
c.draw();
//c.compute(3.2); //invalid
