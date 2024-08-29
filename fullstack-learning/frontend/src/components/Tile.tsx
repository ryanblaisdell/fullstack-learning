import React from 'react';
import { Category } from '../constants/Category';

interface TileProps {
    title: string;
    bodyText: string;
    pxHeight: string;
    category: Category;
    urlLink: string;
  }

const Tile: React.FC<TileProps> = ({title, bodyText, pxHeight, category, urlLink}) => {
  const tileStyle: React.CSSProperties = {
    backgroundColor: `gray`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: `${pxHeight}px`,
  };

  return (
    <div className="d-flex align-items-center justify-content-center p-4 text-black m-3" style={tileStyle}>
      <div className="text-center">
        <h1>{title}</h1>
        <h2>{category}</h2>
        <p>{bodyText}</p>
        <a href={`http://${urlLink}`}>{urlLink}</a>
      </div>
    </div>
  );
};

export default Tile;