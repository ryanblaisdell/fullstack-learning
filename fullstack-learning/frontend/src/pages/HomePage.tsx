import React, { useState } from 'react';
import MainSearchBar from '../components/MainSearchBar';
import ExerciseTile from '../components/ExerciseTile';
import ItemTile from '../components/ItemTile';
import { Item, Exercise, SearchResult } from '../interfaces';
import { Category } from '../constants/Category';
import amazon_icon from '../assets/amazon_small_icon.png';
import youtube_icon from '../assets/youtube_small_icon.png';


const HomePage: React.FC = () => {
  const [results, setResults] = useState<SearchResult>({ items: [], exercises: [] }); 
  return (
    <div>
      <MainSearchBar setResults={setResults} />
      {results.items.length > 0 || results.exercises.length > 0 ? (
        <>
          {results.items.map((item: Item) => (
            <ItemTile
              key={item.id}
              title={item.name}
              description={item.description}
              price={item.price}
              pxHeight='300'
              urlLink={'www.amazon.com'}
              imageUrl={amazon_icon}/>
          ))}
          {results.exercises.map((exercise: Exercise) => (
            <ExerciseTile
              key={exercise.id}
              title={exercise.name}
              muscleGroup={exercise.muscleGroup} 
              instructions={exercise.instructions}
              difficultyLevel={exercise.difficulty_level} 
              equipmentNeeded={exercise.equipment_needed}
              pxHeight='450'
              category={Category.Exercise}
              urlLink={'www.youtube.com'}
              imageUrl={youtube_icon}/>
          ))}
        </>
      ) : (
        <> </>
      )}
    </div>
  );
};

export default HomePage;