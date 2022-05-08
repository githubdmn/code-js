const { getCharacter, characterId } = require('./api');

let results = [];

exports.runFor = async () => {
	console.time('get character');
	for (let i = 0; i < characterId.length; i++) {
		const character = await getCharacter(characterId[i]);
		results.push(`${character.id}: ${character.name}`);
	}
	console.timeEnd('get character');
	console.log(results);
};
