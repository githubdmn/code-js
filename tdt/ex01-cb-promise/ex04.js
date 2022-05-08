const iPromise = new Promise((resolve, reject) => {
	const number = Math.random();
	if (number > 0.5) return resolve(number);
	else reject('The value is too small');
});

exports.run = () => {
	console.log(' promise - 01');
	iPromise
		.then((number) => console.log(`The number is ${number}`))
		.catch((error) => console.error(`An error has occured \n${error}`));
};
