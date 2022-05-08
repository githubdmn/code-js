/* eslint-disable no-unused-vars */
/*
 * Takes at least one function (or more funcitons as an argument/arguments
 * Returns a function s its result
 * Functions can be passed as values (to the other funcions as well)
 * */
console.log('------------------------------\nhigh order functions\n');

var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function double(n, index, array) {
	return n * 2;
}

function filter(value, index, array) {
	return value % 2 === 0;
}

console.log(data.map(double));
console.log(data.filter(filter));

function myFilter(array, fn) {
	const result = [];
	for (var i = 0; i < array.length; i++) {
		if (fn(array[i])) {
			result.push(array[i]);
		}
	}
	return result;
}

var t = myFilter(data, filter);
console.log(t);
