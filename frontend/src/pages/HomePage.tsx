import React from 'react';
import Tile from '../components/Tile';

const HomePage: React.FC = () => {
  return (
    <div>
      <Tile 
        title={'Welcome to the home page!'} 
        bodyText={'This is the body text of the home page tile.'} 
        pxHeight='400'
      />
      <Tile 
        title={'This is more text.'} 
        bodyText={'This is the body text of another tile.'} 
        pxHeight='250'
      />
    </div>
  );
};

export default HomePage;