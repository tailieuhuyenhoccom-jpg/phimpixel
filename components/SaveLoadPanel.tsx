import React, { useState } from 'react';
import type { SavedCreation } from '../types';

interface SaveLoadPanelProps {
  savedCreations: SavedCreation[];
  onSave: (name: string) => void;
  onLoad: (creation: SavedCreation) => void;
  onDelete: (name: string) => void;
}

export const SaveLoadPanel: React.FC<SaveLoadPanelProps> = ({
  savedCreations,
  onSave,
  onLoad,
  onDelete,
}) => {
  const [creationName, setCreationName] = useState('');

  const handleSaveClick = () => {
    if (!creationName.trim()) {
      alert('Vui lòng nhập tên cho bản vẽ của bạn.');
      return;
    }
    onSave(creationName);
    setCreationName('');
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 h-full border border-gray-700 flex flex-col gap-4">
      <h2 className="text-xl font-bold text-center text-cyan-400">Lưu & Tải</h2>
      
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          type="text"
          value={creationName}
          onChange={(e) => setCreationName(e.target.value)}
          placeholder="Tên bản vẽ..."
          className="flex-grow bg-gray-900 border border-gray-600 rounded-md px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          onClick={handleSaveClick}
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7.707 10.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V6a1 1 0 10-2 0v5.586L7.707 10.293zM5 3a1 1 0 011-1h8a1 1 0 011 1v4a1 1 0 11-2 0V4H6v3a1 1 0 11-2 0V3z" />
          </svg>
          Lưu
        </button>
      </div>

      <div className="flex-grow overflow-y-auto space-y-2 pr-2">
        {savedCreations.length === 0 ? (
          <p className="text-gray-400 text-center italic mt-4">Chưa có bản vẽ nào được lưu.</p>
        ) : (
          savedCreations.map((creation) => (
            <div key={creation.name} className="bg-gray-700 p-2 rounded-lg flex justify-between items-center shadow-md">
              <span className="text-gray-200 font-medium truncate" title={creation.name}>{creation.name}</span>
              <div className="flex gap-2 flex-shrink-0">
                <button
                  onClick={() => onLoad(creation)}
                  aria-label={`Tải ${creation.name}`}
                  className="p-2 rounded-md bg-green-600 hover:bg-green-700 text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button
                  onClick={() => onDelete(creation.name)}
                  aria-label={`Xóa ${creation.name}`}
                  className="p-2 rounded-md bg-red-600 hover:bg-red-700 text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};