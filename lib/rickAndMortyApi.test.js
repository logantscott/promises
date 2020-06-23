// const request = require('supertest');
const { getCharacter, getManyCharacters } = require('./rickAndMortyApi');

jest.mock('superagent', () => {
  get: (url) => {
    if(url.contains(',')) {
      return Promise.resolve([
        {
          body: {
            id: 1,
            name: 'Rick Sanchez',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: {
              name: 'Earth (C-137)',
              url: 'https://rickandmortyapi.com/api/location/1',
            },
            location: {
              name: 'Earth (Replacement Dimension)',
              url: 'https://rickandmortyapi.com/api/location/20',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
            url: 'https://rickandmortyapi.com/api/character/1',
            created: '2017-11-04T18:48:46.250Z'
          }
        },
        {
          body: {
            id: 2,
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Human',
            type: '',
            gender: 'Male',
            origin: {
              name: 'Earth (C-137)',
              url: 'https://rickandmortyapi.com/api/location/1',
            },
            location: {
              name: 'Earth (Replacement Dimension)',
              url: 'https://rickandmortyapi.com/api/location/20',
            },
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
            url: 'https://rickandmortyapi.com/api/character/2',
            created: '2017-11-04T18:50:21.651Z'
          }
        }
      ]);
    } else {
      return Promise.resolve({
        body: {
          id: 1,
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human',
          type: '',
          gender: 'Male',
          origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
          },
          location: {
            name: 'Earth (Replacement Dimension)',
            url: 'https://rickandmortyapi.com/api/location/20',
          },
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
          url: 'https://rickandmortyapi.com/api/character/1',
          created: '2017-11-04T18:48:46.250Z'
        }
      });
    }
  };
});

describe('rick and morty api tests', () => {
  it('can call getCharacter function to hit api and return character', () => {
    return getCharacter('1')
      .then(character => {
        expect(character).toEqual({
          id: 1,
          name: 'Rick Sanchez',
          image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        });
      });
  });

  it('can call getManyCharacters function to hit api and return characters', () => {
    return getManyCharacters('1')
      .then(character => {
        expect(character).toEqual([
          {
            id: 1,
            name: 'Rick Sanchez',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          },
          {
            id: 2,
            name: 'Morty Smith',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
          }
        ]);
      });
  });
});
