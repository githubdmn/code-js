/* eslint-disable no-unused-vars */
function countOccurrences2(array, searchElement) {
	return array.reduce((accumulator, currentValue) => {
		let occurence = currentValue === searchElement ? 1 : 0;
		return accumulator + occurence;
	}, 0);
}

function coHelper(searchElement, currentValue) {
	return searchElement === currentValue ? 1 : 0;
}

function countOccurrences3(array, searchElement) {
	return array.reduce((accumulator, currentValue) => {
		return accumulator + coHelper(searchElement, currentValue);
	}, 0);
}

const a1 = [2, 2, 3, 4, 2, 5, 6, 0, 9, 2];
console.log(countOccurrences3(a1, 2));
