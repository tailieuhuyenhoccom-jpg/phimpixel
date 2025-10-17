import React from 'react';

interface ControlsProps {
  gridSizes: number[];
  selectedSize: number;
  onSizeChange: (size: number) => void;
  onClear: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onDownload: () => void;
  onDownloadJson: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Controls: React.FC<ControlsProps> = ({
  gridSizes,
  selectedSize,
  onSizeChange,
  onClear,
  onUndo,
  onRedo,
  onDownload,
  onDownloadJson,
  canUndo,
  canRedo,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-between p-2 bg-gray-700 rounded-lg">
      <div className="flex items-center gap-2">
        <span className="font-semibold text-gray-300">Lưới:</span>
        <div className="flex items-center bg-gray-800 rounded-md p-1">
          {gridSizes.map(size => (
            <button
              key={size}
              onClick={() => onSizeChange(size)}
              className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                selectedSize === size
                  ? 'bg-cyan-500 text-white shadow'
                  : 'bg-transparent text-gray-300 hover:bg-gray-600'
              }`}
            >
              {size}x{size}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={onUndo}
          disabled={!canUndo}
          aria-label="Hoàn tác"
          className="p-2 rounded-md bg-gray-600 hover:bg-gray-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          onClick={onRedo}
          disabled={!canRedo}
          aria-label="Làm lại"
          className="p-2 rounded-md bg-gray-600 hover:bg-gray-500 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
        <button
          onClick={onDownload}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
          aria-label="Tải về PNG"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          PNG
        </button>
        <button
          onClick={onDownloadJson}
          className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
          aria-label="Tải về JSON"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          JSON
        </button>
        <button
          onClick={onClear}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
          </svg>
          Xóa
        </button>
      </div>
    </div>
  );
};