const axios = require('axios');

const getCharacter = async (characterId) => {
	return await axios.get(
		`https://rickandmortyapi.com/api/character/${characterId}`,
	);
};

exports.run = async () => {
	console.log(' promise - 08');
	try {
		const c = await getCharacter(1);
		console.log(c);
	} catch (error) {
		console.error(error.stack);
	}
};
