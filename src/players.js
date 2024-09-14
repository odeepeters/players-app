// src/players.js

import messiImage from './images/lionel messi.jfif';
import ronaldoImage from './images/cristiano ronaldo.jfif';
import mbappeImage from './images/mbape.jfif';
import vandijkImage from './images/virgil.jfif';

const players = [
  {
    name: 'Lionel Messi',
    team: 'Paris Saint-Germain',
    nationality: 'Argentinian',
    jerseyNumber: 30,
    age: 37,
    imageUrl: messiImage
  },
  {
    name: 'Cristiano Ronaldo',
    team: 'Al Nassr',
    nationality: 'Portuguese',
    jerseyNumber: 7,
    age: 39,
    imageUrl: ronaldoImage
  },
  {
    name: 'Kylian Mbappe',
    team: 'Paris Saint-Germain',
    nationality: 'French',
    jerseyNumber: 7,
    age: 25,
    imageUrl: mbappeImage
  },
  {
    name: 'Virgil van Dijk',
    team: 'Liverpool',
    nationality: 'Dutch',
    jerseyNumber: 4,
    age: 33,
    imageUrl: vandijkImage
  }
];

export default players;
