function destroyer(array, ...args) {
	for (let j = 0; j < args.length; j++)
		for (let i = 0; i < array.length; i++)
			if (array[i] === args[j]) array.splice(array.indexOf(array[i]), 1);
	return array;
}

console.log(destroyer([2, 5, 3, 2, 4, 3, 2], 2, 4));
