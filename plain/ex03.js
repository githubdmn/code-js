function destroyer(array, ...args) {
	return array.filter((val) => !args.includes(val));
}

function destroyerES5(array, ...args) {
	return array.filter(function (val) {
		return args.indexOf(val) == -1;
	});
}

console.log(destroyerES5([2, 3, 2, 3, 3, 3, 2, 2], 2, 3)); // 0 2 5 6
