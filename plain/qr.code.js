const qr = require('qrcode');

let data = {
	id: 1,
	name: 'User',
	email: 'user@gmail.com',
};

let strData = JSON.stringify(data);

qr.toString(strData, { type: 'terminal' }, function (err, code) {
	if (err) return console.log('error occurred');

	console.log(code);
});

qr.toDataURL(strData, function (err, code) {
	if (err) return console.log('error occurred');

	console.log(code);
});
