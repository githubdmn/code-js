const { getCharacter, characterId } = require('./api');

let results = [];

exports.runForEach = async () => {
	console.log(
		'forEach does not work with promises!!!, the results are revieved, but not pushed into the array ',
	);
	console.time('get character - forEach');
	characterId.forEach(async (id) => {
		const character = await getCharacter(id);
		results.push(`${character.id}: ${character.name}`);
	});
	console.timeEnd('get character - forEach');
	console.log(results);
};
