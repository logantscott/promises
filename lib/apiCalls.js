const request = require('superagent');

const getFuturamaQuote = () => {
  request.get('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(res => console.log(res.body));

  //How would you get more than 1 quote?
  const num = 4;
  request.get(`http://futuramaapi.herokuapp.com/api/quotes/${num}`)
    .then(res => console.log(res.body));
  
  //How would you get only quotes by Bender?
  request.get('http://futuramaapi.herokuapp.com/api/characters/Bender')
    .then(res => console.log(res.body));
};

// getFuturamaQuote();

const getRickAndMorty = () => {
  request.get('https://rickandmortyapi.com/api/character/')
    .then(res => console.log(res.body));
};

// getRickAndMorty();


