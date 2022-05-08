function getFutureTime(callback) {
	setTimeout(() => {
		return callback(new Date());
	}, 1000);
}

function addSomeSeconds(time, callback) {
	setTimeout(() => {
		return callback(time.getTime() + new Date().getTime());
	}, 1000);
}

function callback(future) {
	console.log(`future time ${future}`);
	console.log('getting future time is done\n');
	addSomeSeconds(future, (newDate) => {
		console.log(`The new time is : ${newDate}`);
	});
}

exports.run = () => {
	console.log('callback - promise - 02');
	getFutureTime(callback);
};
