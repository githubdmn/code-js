const { getCharacterMap, characterId } = require('./api');

exports.runMap = async () => {
	console.time('get character - map');
	const mapResult = characterId.map((id) => {
		return getCharacterMap(id);
	});
	const results = await Promise.all(mapResult);
	console.timeEnd('get character - map');
	console.log(results);
};
