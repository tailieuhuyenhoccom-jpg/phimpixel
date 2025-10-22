
import React from 'react';
import type { Grid } from '../types.ts';

interface PixelGridProps {
  grid: Grid;
  isMouseDown: boolean;
  onPixelPaint: (row: number, col: number) => void;
}

const MemoizedPixel = React.memo(
  ({ color, onMouseDown, onMouseEnter }: { color: string; onMouseDown: () => void; onMouseEnter: () => void; }) => {
    return (
      <div
        onMouseDown={onMouseDown}
        onMouseEnter={onMouseEnter}
        className="w-full h-full"
        style={{ backgroundColor: color, touchAction: 'none' }}
      />
    );
  }
);


export const PixelGrid: React.FC<PixelGridProps> = ({ grid, onPixelPaint, isMouseDown }) => {
  const gridSize = grid.length;

  const handleMouseEnter = (row: number, col: number) => {
    if (isMouseDown) {
      onPixelPaint(row, col);
    }
  };

  return (
    <div
      className="grid border border-gray-500 bg-gray-500 shadow-inner"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
        width: '512px',
        height: '512px',
        gap: '1px',
        maxWidth: 'calc(100vw - 2rem)',
        maxHeight: 'calc(100vw - 2rem)',
        aspectRatio: '1 / 1',
        userSelect: 'none',
      }}
    >
      {grid.map((row, rowIndex) =>
        row.map((color, colIndex) => (
          <MemoizedPixel
            key={`${rowIndex}-${colIndex}`}
            color={color}
            onMouseDown={() => onPixelPaint(rowIndex, colIndex)}
            onMouseEnter={() => handleMouseEnter(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  );
};
