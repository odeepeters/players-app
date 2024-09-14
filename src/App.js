// src/App.js

import React from 'react';
import { Container } from 'react-bootstrap';
import PlayersList from './playersList';

const App = () => {
  return (
    <Container>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>Players List</h1>
      <PlayersList />
    </Container>
  );
}

export default App;
