import React from "react";

interface ItemTileProps {
    title: string;
    description: string;
    price: number;
    urlLink: string;
    imageUrl: string;
    pxHeight: string;
}

const ItemTile: React.FC<ItemTileProps> = ({ title, description, price, urlLink, imageUrl, pxHeight }) => {
    const tileStyle: React.CSSProperties = {
        backgroundColor: `#c3c1bb`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: `${pxHeight}px`,
    };

    return (
        <div className="p-4 text-black m-3 rounded shadow text-left" style={tileStyle}>
            <div className="w-100 text-left">
                <div className="d-flex justify-content-between">
                    <h1 className="text-left">{title} - ${price}</h1>
                </div>
                <div className="text-left" style={{ fontSize: '20px' }}>
                    <hr />
                    <p>{description}</p>                
                    <hr />
                </div>
                <div className="text-center">
                    <a className="shadow" href={`http://${urlLink}`}>
                        <img src={imageUrl} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ItemTile;