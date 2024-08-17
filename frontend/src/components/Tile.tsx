import React from 'react';

interface TileProps {
    title: string;
    bodyText: string;
    pxHeight: string;
}

const Tile: React.FC<TileProps> = ({title, bodyText, pxHeight}) => {
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
        <p>{bodyText}</p>
      </div>
    </div>
  );
};

export default Tile;