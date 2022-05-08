// eslint-disable-next-line no-unused-vars
const iPromise = async (...args) => {
	const number = Math.random();
	if (number > 0.5) return number;
	throw new Error('The value is too small');
};

exports.run = async () => {
	console.log(' promise - 07');
	try {
		const n = await iPromise();
		console.log(n);
	} catch (error) {
		console.error(error.stack);
	}
};
