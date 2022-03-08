
var title = 'ES5\nSection 2 - Video 2 - Object literals\n'
console.log(title)

var aSquare = {
	title: 'Square A',
	side: 4,
	show: function() {
		return 'This is Square A with side length 4'
	}
}

var bSquare = {
	title: 'Square B',
	side: 3,
	show: function () {
		return 'This is ' + this.title + ' with side length ' + this.side
	}
}

console.log(aSquare.show())
console.log(bSquare.show())