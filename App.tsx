
import React, { useState, useEffect, useMemo } from 'react';
import { PixelGrid } from './components/PixelGrid.tsx';
import { ColorPalette } from './components/ColorPalette.tsx';
import { Controls } from './components/Controls.tsx';
import { ReferencePanel } from './components/ReferencePanel.tsx';
import { SaveLoadPanel } from './components/SaveLoadPanel.tsx';
import { TimelinePanel } from './components/TimelinePanel.tsx';
import { PALETTE, GRID_SIZES, DEFAULT_GRID_SIZE, BACKGROUND_COLOR } from './constants.ts';
import type { Grid, SavedCreation } from './types.ts';

const createEmptyGrid = (size: number): Grid => {
  return Array(size).fill(null).map(() => Array(size).fill(BACKGROUND_COLOR));
};

const App: React.FC = () => {
  const [gridSize, setGridSize] = useState<number>(DEFAULT_GRID_SIZE);
  const [histories, setHistories] = useState<Grid[][]>([[createEmptyGrid(DEFAULT_GRID_SIZE)]]);
  const [historyIndices, setHistoryIndices] = useState<number[]>([0]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackFrameIndex, setPlaybackFrameIndex] = useState<number | null>(null);
  const [fps, setFps] = useState(4);
  const [isExportingVideo, setIsExportingVideo] = useState(false);
  const [isPixelating, setIsPixelating] = useState(false);


  const [selectedColor, setSelectedColor] = useState<string>(PALETTE[1]);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [savedCreations, setSavedCreations] = useState<SavedCreation[]>([]);

  const frames = useMemo(() => histories.map((history, index) => history[historyIndices[index]]), [histories, historyIndices]);
  
  const displayIndex = isPlaying && playbackFrameIndex !== null ? playbackFrameIndex : currentFrameIndex;
  const grid = frames[displayIndex] || createEmptyGrid(gridSize);

  const canUndo = (historyIndices[currentFrameIndex] ?? 0) > 0;
  const canRedo = (historyIndices[currentFrameIndex] ?? 0) < (histories[currentFrameIndex]?.length - 1);

  // Load saved creations from localStorage on initial mount
  useEffect(() => {
    try {
      const savedCreationsJSON = localStorage.getItem('savedPixelCreations');
      if (savedCreationsJSON) {
        const creations = JSON.parse(savedCreationsJSON);
        setSavedCreations(creations);
      }
    } catch (error) {
      console.error("Could not load saved creations from localStorage", error);
    }
  }, []);
  
  // Animation playback effect
  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setPlaybackFrameIndex(prev => (prev === null ? 0 : prev + 1) % frames.length);
      }, 1000 / fps);
      return () => clearInterval(interval);
    } else {
      setPlaybackFrameIndex(null);
    }
  }, [isPlaying, fps, frames.length]);

  const updateHistoryForCurrentFrame = (newGrid: Grid) => {
    const frameHistory = histories[currentFrameIndex];
    const frameHistoryIndex = historyIndices[currentFrameIndex];

    const newFrameHistory = frameHistory.slice(0, frameHistoryIndex + 1);
    newFrameHistory.push(newGrid);

    const newHistories = [...histories];
    newHistories[currentFrameIndex] = newFrameHistory;
    setHistories(newHistories);

    const newHistoryIndices = [...historyIndices];
    newHistoryIndices[currentFrameIndex] = newFrameHistory.length - 1;
    setHistoryIndices(newHistoryIndices);
  };


  const handleSizeChange = (newSize: number) => {
    if (newSize !== gridSize) {
      setGridSize(newSize);
      const newGrid = createEmptyGrid(newSize);
      setHistories([[newGrid]]);
      setHistoryIndices([0]);
      setCurrentFrameIndex(0);
      setIsPlaying(false);
    }
  };
  
  const handleClearGrid = () => {
    const newGrid = createEmptyGrid(gridSize);
    updateHistoryForCurrentFrame(newGrid);
  };

  const handleUndo = () => {
    if (canUndo) {
      setHistoryIndices(prev => {
        const newIndices = [...prev];
        newIndices[currentFrameIndex]--;
        return newIndices;
      });
    }
  };

  const handleRedo = () => {
    if (canRedo) {
       setHistoryIndices(prev => {
        const newIndices = [...prev];
        newIndices[currentFrameIndex]++;
        return newIndices;
      });
    }
  };

  const handlePixelPaint = (row: number, col: number) => {
    if (isPlaying) return; // Disable painting during playback
    const currentGrid = frames[currentFrameIndex];
    if (currentGrid[row][col] === selectedColor) {
      return;
    }
    const newGrid = currentGrid.map(r => [...r]);
    newGrid[row][col] = selectedColor;
    updateHistoryForCurrentFrame(newGrid);
  };

  const parsedPalette = useMemo(() => {
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      } : null;
    };
    return PALETTE.map(hex => ({ hex, rgb: hexToRgb(hex) })).filter(c => c.rgb !== null);
  }, []);

  const findClosestColor = (r: number, g: number, b: number): string => {
    let minDistance = Infinity;
    let closestColor = BACKGROUND_COLOR;

    for (const paletteColor of parsedPalette) {
      if (!paletteColor.rgb) continue;
      const distance =
        Math.pow(r - paletteColor.rgb.r, 2) +
        Math.pow(g - paletteColor.rgb.g, 2) +
        Math.pow(b - paletteColor.rgb.b, 2);

      if (distance < minDistance) {
        minDistance = distance;
        closestColor = paletteColor.hex;
      }
    }
    return closestColor;
  };

  const handlePixelateImage = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng tải lên một tệp hình ảnh.');
      return;
    }
    setIsPixelating(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = gridSize;
        canvas.height = gridSize;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          console.error("Could not get canvas context");
          setIsPixelating(false);
          return;
        }

        ctx.imageSmoothingEnabled = false;
        ctx.drawImage(img, 0, 0, gridSize, gridSize);
        const imageData = ctx.getImageData(0, 0, gridSize, gridSize);
        const data = imageData.data;
        const newGrid: Grid = createEmptyGrid(gridSize);

        for (let y = 0; y < gridSize; y++) {
          for (let x = 0; x < gridSize; x++) {
            const index = (y * gridSize + x) * 4;
            const r = data[index];
            const g = data[index + 1];
            const b = data[index + 2];
            const a = data[index + 3];

            if (a < 128) {
              newGrid[y][x] = BACKGROUND_COLOR;
            } else {
              newGrid[y][x] = findClosestColor(r, g, b);
            }
          }
        }

        updateHistoryForCurrentFrame(newGrid);
        setIsPixelating(false);
      };
      img.onerror = () => {
        console.error("Error loading image.");
        alert("Không thể tải hình ảnh. Vui lòng thử một hình ảnh khác.");
        setIsPixelating(false);
      }
      img.src = e.target?.result as string;
    };
    reader.onerror = () => {
        console.error("Error reading file.");
        alert("Lỗi khi đọc tệp.");
        setIsPixelating(false);
    }
    reader.readAsDataURL(file);
  };

  const handleDownloadImage = () => {
    const EXPORT_SIZE = 512;
    const pixelSize = EXPORT_SIZE / gridSize;
    const canvas = document.createElement('canvas');
    canvas.width = EXPORT_SIZE;
    canvas.height = EXPORT_SIZE;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    // By not filling a background, the canvas remains transparent by default
    ctx.imageSmoothingEnabled = false;

    const currentGrid = frames[currentFrameIndex];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const color = currentGrid[y][x];
        // Only draw the pixel if it's not the background color
        if (color !== BACKGROUND_COLOR) {
          ctx.fillStyle = color;
          ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
      }
    }

    const link = document.createElement('a');
    link.download = `pixel-art-frame-${currentFrameIndex + 1}.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadJson = () => {
    const currentGrid = frames[currentFrameIndex];
    const jsonString = JSON.stringify(currentGrid, null, 2); // Pretty print JSON
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.download = `pixel-art-frame-${currentFrameIndex + 1}-data.json`;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url); // Clean up
  };

  const handleDownloadSpriteSheet = () => {
    if (frames.length === 0) return;

    const EXPORT_SIZE = 512;
    const pixelSize = EXPORT_SIZE / gridSize;
    const canvas = document.createElement('canvas');
    canvas.width = EXPORT_SIZE * frames.length;
    canvas.height = EXPORT_SIZE;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    ctx.imageSmoothingEnabled = false;

    frames.forEach((frameGrid, frameIndex) => {
      const frameOffset = frameIndex * EXPORT_SIZE;
      for (let y = 0; y < gridSize; y++) {
        for (let x = 0; x < gridSize; x++) {
          const color = frameGrid[y][x];
          if (color !== BACKGROUND_COLOR) {
            ctx.fillStyle = color;
            ctx.fillRect(
              frameOffset + (x * pixelSize), 
              y * pixelSize, 
              pixelSize, 
              pixelSize
            );
          }
        }
      }
    });

    const link = document.createElement('a');
    link.download = `pixel-art-spritesheet.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleExportVideo = () => {
    if (frames.length === 0) {
      alert("Không có khung hình nào để xuất video.");
      return;
    }
    if (typeof MediaRecorder === 'undefined') {
      alert("Trình duyệt của bạn không hỗ trợ MediaRecorder API để xuất video.");
      return;
    }
  
    setIsExportingVideo(true);
  
    const EXPORT_SIZE = 512;
    const pixelSize = EXPORT_SIZE / gridSize;
    const canvas = document.createElement('canvas');
    canvas.width = EXPORT_SIZE;
    canvas.height = EXPORT_SIZE;
    const ctx = canvas.getContext('2d');
  
    if (!ctx) {
      alert("Không thể tạo canvas context.");
      setIsExportingVideo(false);
      return;
    }
    ctx.imageSmoothingEnabled = false;
  
    const stream = canvas.captureStream(fps);
    const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' });
  
    const chunks: Blob[] = [];
    recorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        chunks.push(e.data);
      }
    };
  
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `pixel-art-animation.webm`;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      setIsExportingVideo(false);
    };
  
    recorder.start();
  
    let frameIndex = 0;
    const interval = setInterval(() => {
        if (frameIndex >= frames.length) {
            clearInterval(interval);
            recorder.stop();
            return;
        }

        const frameGrid = frames[frameIndex];
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (let y = 0; y < gridSize; y++) {
            for (let x = 0; x < gridSize; x++) {
                const color = frameGrid[y][x];
                if (color !== BACKGROUND_COLOR) {
                    ctx.fillStyle = color;
                    ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
                }
            }
        }
        
        frameIndex++;
    }, 1000 / fps);
  };

  const handleAddFrame = () => {
    setIsPlaying(false);
    const newGrid = createEmptyGrid(gridSize);
    setHistories(prev => [...prev, [newGrid]]);
    setHistoryIndices(prev => [...prev, 0]);
    setCurrentFrameIndex(frames.length);
  };

  const handleDuplicateFrame = () => {
    setIsPlaying(false);
    const currentGrid = frames[currentFrameIndex];
    const newGrid = currentGrid.map(row => [...row]);
    
    setHistories(prev => {
        const newHistories = [...prev];
        newHistories.splice(currentFrameIndex + 1, 0, [newGrid]);
        return newHistories;
    });
    setHistoryIndices(prev => {
        const newIndices = [...prev];
        newIndices.splice(currentFrameIndex + 1, 0, 0);
        return newIndices;
    });
    setCurrentFrameIndex(prev => prev + 1);
  };

  const handleSelectFrame = (index: number) => {
    if (index >= 0 && index < frames.length) {
      setIsPlaying(false);
      setCurrentFrameIndex(index);
    }
  };
  
  const handleSaveCreation = (name: string) => {
    const newCreation: SavedCreation = {
      name,
      gridSize,
      frames: frames,
    };

    const existingIndex = savedCreations.findIndex(c => c.name === name);
    let updatedCreations;

    if (existingIndex > -1) {
      updatedCreations = [...savedCreations];
      updatedCreations[existingIndex] = newCreation;
    } else {
      updatedCreations = [...savedCreations, newCreation];
    }
    
    updatedCreations.sort((a, b) => a.name.localeCompare(b.name));

    setSavedCreations(updatedCreations);
    try {
      localStorage.setItem('savedPixelCreations', JSON.stringify(updatedCreations));
    } catch (error) {
      console.error("Could not save creations to localStorage", error);
    }
  };

  const handleLoadCreation = (creation: SavedCreation) => {
    setIsPlaying(false);
    setGridSize(creation.gridSize);
    const newHistories = creation.frames.map(frame => [frame]);
    const newHistoryIndices = Array(creation.frames.length).fill(0);
    setHistories(newHistories);
    setHistoryIndices(newHistoryIndices);
    setCurrentFrameIndex(0);
  };

  const handleDeleteCreation = (name: string) => {
    const updatedCreations = savedCreations.filter(c => c.name !== name);
    setSavedCreations(updatedCreations);
    try {
      localStorage.setItem('savedPixelCreations', JSON.stringify(updatedCreations));
    } catch (error) {
      console.error("Could not update saved creations in localStorage after deletion", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col md:flex-row p-4 gap-6 font-sans">
      <main className="flex-grow flex flex-col items-center gap-6">
        <header className="text-center">
          <h1 className="text-4xl font-bold text-cyan-400">Phim Pixel</h1>
          <p className="text-gray-400 mt-1">Phát triển bởi Nguyễn Thành Đạt</p>
        </header>

        <div 
          className="flex flex-col gap-6 w-full max-w-max items-center"
          onMouseUp={() => setIsMouseDown(false)}
          onMouseLeave={() => setIsMouseDown(false)}
        >
          <div className="bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-700 w-full">
            <div
              className="flex flex-col gap-6 items-center"
              onMouseDown={() => setIsMouseDown(true)}
            >
              <Controls
                gridSizes={GRID_SIZES}
                selectedSize={gridSize}
                onSizeChange={handleSizeChange}
                onClear={handleClearGrid}
                onUndo={handleUndo}
                onRedo={handleRedo}
                onDownload={handleDownloadImage}
                onDownloadJson={handleDownloadJson}
                onDownloadSpriteSheet={handleDownloadSpriteSheet}
                onPixelateImage={handlePixelateImage}
                isPixelating={isPixelating}
                canUndo={canUndo}
                canRedo={canRedo}
              />
              <ColorPalette
                colors={PALETTE}
                selectedColor={selectedColor}
                onColorSelect={setSelectedColor}
              />
              <PixelGrid
                grid={grid}
                onPixelPaint={handlePixelPaint}
                isMouseDown={isMouseDown}
              />
            </div>
          </div>
          <TimelinePanel
            frames={frames}
            currentFrameIndex={currentFrameIndex}
            fps={fps}
            isPlaying={isPlaying}
            onSelectFrame={handleSelectFrame}
            onAddFrame={handleAddFrame}
            onDuplicateFrame={handleDuplicateFrame}
            onFpsChange={setFps}
            onPlayToggle={() => setIsPlaying(!isPlaying)}
            onExportVideo={handleExportVideo}
            isExportingVideo={isExportingVideo}
          />
        </div>
      </main>
      <aside className="w-full md:w-64 lg:w-80 flex-shrink-0 flex flex-col gap-6">
        <ReferencePanel />
        <SaveLoadPanel
          savedCreations={savedCreations}
          onSave={handleSaveCreation}
          onLoad={handleLoadCreation}
          onDelete={handleDeleteCreation}
        />
      </aside>
    </div>
  );
};

export default App;
