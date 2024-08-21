import React, { useState } from 'react';
import Tile from '../components/Tile';
import MainSearchBar from '../components/MainSearchBar';
import { Item, Exercise, SearchResult } from '../interfaces';

const HomePage: React.FC = () => {
  const [results, setResults] = useState<SearchResult>({ items: [], exercises: [] }); 
  
  return (
    <div>
      <MainSearchBar setResults={setResults} />
      {results.items.length > 0 || results.exercises.length > 0 ? (
        <>
          {results.items.map((item: Item) => (
            <Tile
              key={item.id}
              title={item.name}
              bodyText={`Description: ${item.description}, Price: $${item.price}`}
              pxHeight='250'
            />
          ))}
          {results.exercises.map((exercise: Exercise) => (
            <Tile
              key={exercise.id}
              title={exercise.name}
              bodyText={`Muscle Group: ${exercise.muscleGroup}, Difficulty: ${exercise.difficultyLevel}, Equipment: ${exercise.equpimentNeeded}`}
              pxHeight='250'
            />
          ))}
        </>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default HomePage;