const request = require('superagent');

const getCharacter = (id) => {
  return request.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(character => ({
      id: character.body.id,
      name: character.body.name,
      image: character.body.image
    }));
};

// const getManyCharacters = (ids) => {
//   return request.get(`https://rickandmortyapi.com/api/character/${ids.join()}`)
//     .then(characters => characters.body.map(character => ({
//       id: character.id,
//       name: character.name,
//       image: character.image
//     })));
// };

const getManyCharacters = (ids) => {
  return Promise.all(ids.map(id => getCharacter(id)));
};

module.exports = {
  getCharacter,
  getManyCharacters
};
