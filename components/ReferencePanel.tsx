
import React, { useState } from 'react';
import { REFERENCE_IMAGES } from '../constants';
import type { ReferenceImage } from '../types';

export const ReferencePanel: React.FC = () => {
  const [zoomedImage, setZoomedImage] = useState<ReferenceImage | null>(null);

  const handleImageClick = (image: ReferenceImage) => {
    setZoomedImage(image);
  };

  const handleCloseZoom = () => {
    setZoomedImage(null);
  };

  return (
    <>
      <div className="bg-gray-800 rounded-xl shadow-lg p-4 h-full border border-gray-700 flex flex-col">
        <h2 className="text-xl font-bold text-center mb-4 text-cyan-400">Mẫu</h2>
        <div className="grid grid-cols-2 gap-4 overflow-y-auto pr-2">
          {REFERENCE_IMAGES.map(image => (
            <button 
              key={image.id} 
              className="bg-gray-700 p-2 rounded-lg flex flex-col items-center shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
              onClick={() => handleImageClick(image)}
              aria-label={`Phóng to ${image.title}`}
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-16 h-16 rounded border-2 border-gray-600 pixelated" 
                width="64"
                height="64"
                loading="lazy"
              />
              <p className="text-xs text-gray-300 mt-2 text-center">{image.title}</p>
            </button>
          ))}
        </div>
      </div>

      {zoomedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out"
          onClick={handleCloseZoom}
          role="dialog"
          aria-modal="true"
          aria-labelledby="zoomed-image-title"
        >
          <div 
            className="relative bg-gray-800 p-4 rounded-lg shadow-2xl border border-gray-700"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image container
          >
            <button 
              onClick={handleCloseZoom}
              className="absolute -top-4 -right-4 bg-red-600 hover:bg-red-700 text-white rounded-full p-2 z-10"
              aria-label="Đóng"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <figure className="flex flex-col items-center">
              <img
                src={zoomedImage.url}
                alt={zoomedImage.title}
                className="pixelated w-64 h-64 md:w-96 md:h-96"
                width="384"
                height="384"
              />
              <figcaption id="zoomed-image-title" className="text-lg text-gray-300 mt-2 font-semibold">{zoomedImage.title}</figcaption>
            </figure>
          </div>
        </div>
      )}
    </>
  );
};
