
import React from 'react';
import { BACKGROUND_COLOR } from '../constants';

interface ColorPaletteProps {
  colors: string[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

export const ColorPalette: React.FC<ColorPaletteProps> = ({ colors, selectedColor, onColorSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 p-2 bg-gray-700 rounded-lg">
      {colors.map((color, index) => {
        const isSelected = color === selectedColor;
        const isEraser = color === BACKGROUND_COLOR;

        return (
          <button
            key={index}
            onClick={() => onColorSelect(color)}
            className={`w-10 h-10 rounded-full transition-transform duration-150 ease-in-out transform hover:scale-110 focus:outline-none ${isSelected ? 'ring-4 ring-offset-2 ring-offset-gray-800 ring-cyan-400' : 'ring-2 ring-transparent'}`}
            style={{ backgroundColor: color }}
            aria-label={isEraser ? 'Cục tẩy' : `Màu ${color}`}
          >
            {isEraser && (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 20l-4.665-4.665M13.43 3.472l6.098 6.098-9.9 9.9-6.098-6.098 9.9-9.9zM8.328 8.576l6.098 6.098" />
              </svg>
            )}
          </button>
        );
      })}
    </div>
  );
};
