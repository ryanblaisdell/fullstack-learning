import React from "react";
import { Category } from '../constants/Category';

interface ExerciseTileProps {
    title: string;
    muscleGroup: string;
    difficultyLevel: string;
    equipmentNeeded: string;
    instructions: string;
    pxHeight: string;
    category: Category;
    urlLink: string;
    imageUrl: string;
}

const ExerciseTile: React.FC<ExerciseTileProps> = ({ title, muscleGroup, difficultyLevel, equipmentNeeded, instructions, pxHeight, category, urlLink, imageUrl }) => {
    const tileStyle: React.CSSProperties = {
        backgroundColor: `#c3c1bb`,
        backgroundSize: 'cover',
        //backgroundPosition: 'center',
        height: `${pxHeight}px`,
    };

    return (
        <div className="p-4 text-black m-3 rounded shadow text-left" style={tileStyle}>
            <div className="w-100">
                <div className="d-flex justify-content-between">
                    <h1>{title} - {category}</h1>
                </div>
                <div style={{ fontSize: '20px' }}>
                  <hr />
                  <p>{instructions}</p>
                  <p>Muscle Group: {muscleGroup}</p>
                  <p>Difficulty: {difficultyLevel}</p>
                  <p>Equipment Needed: {equipmentNeeded}</p>
                  <hr />
                </div>
                <div className="text-center mt-3">
                    <a className="shadow" href={`http://${urlLink}`}>
                        <img src={imageUrl} alt={title} style={{ maxWidth: '100%', height: 'auto' }} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ExerciseTile;