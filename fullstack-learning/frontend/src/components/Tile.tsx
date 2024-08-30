import React from 'react';
import { Category } from '../constants/Category';

interface TileProps {
    title: string;
    bodyText: string;
    pxHeight: string;
    category: Category;
    urlLink: string;
    imageUrl: string;
  }

const Tile: React.FC<TileProps> = ({title, bodyText, pxHeight, category, urlLink, imageUrl}) => {
  const tileStyle: React.CSSProperties = {
    backgroundColor: `#c3c1bb`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: `${pxHeight}px`,
  };

  return (
    <div className="d-flex align-items-center justify-content-center p-4 text-black m-3 rounded" style={tileStyle}>
      <div className="text-center">
        <h1>{title}</h1>
        <h2>{category}</h2>
        <p>{bodyText}</p>
        <a href={`http://${urlLink}`}>
          <img src={imageUrl} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
        </a>
      </div>
    </div>
  );
};

export default Tile;