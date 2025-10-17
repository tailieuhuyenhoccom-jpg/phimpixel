import React from 'react';
import type { Grid } from '../types';
import FrameThumbnail from './FrameThumbnail';

interface TimelinePanelProps {
  frames: Grid[];
  currentFrameIndex: number;
  fps: number;
  isPlaying: boolean;
  onSelectFrame: (index: number) => void;
  onAddFrame: () => void;
  onDuplicateFrame: () => void;
  onFpsChange: (fps: number) => void;
  onPlayToggle: () => void;
}

export const TimelinePanel: React.FC<TimelinePanelProps> = ({
  frames,
  currentFrameIndex,
  fps,
  isPlaying,
  onSelectFrame,
  onAddFrame,
  onDuplicateFrame,
  onFpsChange,
  onPlayToggle,
}) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg p-4 border border-gray-700 w-full flex flex-col gap-4">
      <h2 className="text-xl font-bold text-center text-cyan-400">Dòng thời gian</h2>
      
      {/* Playback Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-gray-700 p-2 rounded-lg">
        <div className="flex items-center gap-2">
          <button onClick={onPlayToggle} className="p-2 rounded-md bg-green-600 hover:bg-green-700 text-white transition-colors" aria-label={isPlaying ? "Tạm dừng" : "Phát"}>
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1zm5 0a1 1 0 00-1 1v2a1 1 0 102 0V9a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg>
            )}
          </button>
          <label htmlFor="fps-slider" className="text-gray-300 font-semibold">FPS: {fps}</label>
          <input
            id="fps-slider"
            type="range"
            min="1"
            max="24"
            value={fps}
            onChange={(e) => onFpsChange(Number(e.target.value))}
            className="w-32"
            aria-label="Tốc độ khung hình trên giây"
          />
        </div>
      </div>

      {/* Frames */}
      <div className="flex items-center gap-2">
        <div className="flex-grow overflow-x-auto overflow-y-hidden whitespace-nowrap py-2 flex gap-2">
          {frames.map((frame, index) => (
            <FrameThumbnail
              key={index}
              grid={frame}
              isActive={index === currentFrameIndex}
              onClick={() => onSelectFrame(index)}
              frameNumber={index + 1}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <button onClick={onAddFrame} title="Thêm khung mới" className="p-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" /></svg>
          </button>
          <button onClick={onDuplicateFrame} title="Nhân đôi khung hiện tại" className="p-2 rounded-md bg-yellow-600 hover:bg-yellow-700 text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z" /><path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h6a2 2 0 002-2H5z" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};