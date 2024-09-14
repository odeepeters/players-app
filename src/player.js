// // src/Player.js

// import React from 'react';
// import { Card } from 'react-bootstrap';

// const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
//   return (
//     <Card style={{ width: '18rem', margin: '10px', textAlign: 'center' }}>
//       <Card.Img variant="top" src={imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
//       <Card.Body>
//         <Card.Title>{name}</Card.Title>
//         <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
//         <Card.Text>
//           Nationality: {nationality}<br />
//           Jersey Number: {jerseyNumber}<br />
//           Age: {age}
//         </Card.Text>
//       </Card.Body>
//     </Card>
//   );
// };

// // Define default props
// Player.defaultProps = {
//   name: 'Unknown Player',
//   team: 'Unknown Team',
//   nationality: 'Unknown',
//   jerseyNumber: 0,
//   age: 0,
//   imageUrl: 'https://via.placeholder.com/150'
// };

// export default Player;


// src/Player.js

import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name = 'Unknown Player', team = 'Unknown Team', nationality = 'Unknown', jerseyNumber = 0, age = 0, imageUrl = 'https://www.gettyimages.com/detail/news-photo/lionel-messi-of-paris-saint-germain-during-the-ligue-1-news-photo/1495846940' }) => {
  return (
    <Card style={{ width: '18rem', margin: '10px', textAlign: 'center' }}>
      <Card.Img variant="top" src={imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{team}</Card.Subtitle>
        <Card.Text>
          Nationality: {nationality}<br />
          Jersey Number: {jerseyNumber}<br />
          Age: {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;

