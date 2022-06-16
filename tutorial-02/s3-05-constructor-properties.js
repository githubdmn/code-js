var title = 'Constructor Prototypes';
console.log(title);

function Circle(radius) {
	this.radius = radius;
}
//protorype for all children objects
console.log(Circle.prototype);

var array = new Array();
// these are the same
console.log(array.__proto__);
console.log(Array.prototype);
