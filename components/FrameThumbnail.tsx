
import React from 'react';
import type { Grid } from '../types.ts';

interface FrameThumbnailProps {
  grid: Grid;
  isActive: boolean;
  onClick: () => void;
  frameNumber: number;
}

const FrameThumbnail: React.FC<FrameThumbnailProps> = ({ grid, isActive, onClick, frameNumber }) => {
  const gridSize = grid.length;

  return (
    <button
      onClick={onClick}
      className={`relative p-1 rounded-md transition-colors flex-shrink-0 ${isActive ? 'bg-cyan-500' : 'bg-gray-600 hover:bg-gray-500'}`}
      aria-label={`Chọn khung ${frameNumber}`}
    >
      <div
        className="grid bg-gray-500"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          width: '64px',
          height: '64px',
          gap: '1px',
        }}
      >
        {grid.map((row, rowIndex) =>
          row.map((color, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-full h-full"
              style={{ backgroundColor: color }}
            />
          ))
        )}
      </div>
      <span className="absolute bottom-1 right-1 text-xs bg-black bg-opacity-50 text-white rounded-sm px-1">
        {frameNumber}
      </span>
    </button>
  );
};

export default React.memo(FrameThumbnail);
