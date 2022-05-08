const { get } = require('axios');
const endpoint = 'https://rickandmortyapi.com/api/character';

exports.characterId = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

exports.getCharacter = async (id) => {
	const c = await get(`${endpoint}/${id}`);
	return c.data;
};

exports.getCharacterMap = async (id) => {
	const c = await get(`${endpoint}/${id}`);
	return `${c.data.id}: ${c.data.name}`;
};
