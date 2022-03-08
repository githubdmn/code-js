const title = 'ES5\nSection 2 - Factories'
console.log(title)

// Factory function - ES5 syntax
function createSquare(title, side) {
	return {
		title: title,
		side: side,
		show: function() {
			return 'This is a square ' + this.title + ' with sides ' + this.side
		}
	}
}

// Factory function - ES6 syntax
// function createSquareES6(title, side) {
// 	return {
// 		title,
// 		side,
// 		show: function () {
// 			return 'This is a square ' + this.title + ' with sides ' + this.side
// 		}
// 	}
// }

var a = createSquare('A', 4)
console.log(a.show())

var b = createSquare('B', 3)
console.log(b.show())