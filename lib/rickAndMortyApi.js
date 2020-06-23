const request = require('superagent');

const getCharacter = async(id) => {
  let character = await request.get(`https://rickandmortyapi.com/api/character/${id}`);
  return {
    id: character.body.id,
    name: character.body.name,
    image: character.body.image
  };
};

// const getManyCharacters = (ids) => {
//   return request.get(`https://rickandmortyapi.com/api/character/${ids.join()}`)
//     .then(characters => characters.body.map(character => ({
//       id: character.id,
//       name: character.name,
//       image: character.image
//     })));
// };

const getManyCharacters = async(ids) => {
  const characters = await Promise.all(ids.map((id) => getCharacter(id)));
  console.log(characters);
  return characters;
};

module.exports = {
  getCharacter,
  getManyCharacters
};
