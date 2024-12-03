import React, { useState, useEffect } from 'react';
import { Music2 } from 'lucide-react';
import { PlayButton } from './PlayButton';
import { ProgressBar } from './ProgressBar';

interface MusicPlayerProps {
  songTitle: string;
  artist: string;
  albumArt: string;
  currentTime: string;
  duration: string;
}

export function MusicPlayer({ songTitle, artist, albumArt, currentTime, duration }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(40);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 bg-black/80 backdrop-blur-md rounded-xl p-3 flex items-center gap-3">
      <div className="flex-shrink-0">
        <img src={albumArt} alt={`${songTitle} by ${artist}`} className="w-10 h-10 rounded-lg object-cover" />
      </div>
      <PlayButton 
        isPlaying={isPlaying} 
        onClick={handlePlayPause} 
        className="flex-shrink-0" 
      />
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2">
          <Music2 className="text-green-500" size={16} />
          <div className="text-xs md:text-sm font-medium truncate">{songTitle}</div>
        </div>
        <div className="text-xs text-gray-400 truncate">{artist}</div>
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          progress={progress}
        />
      </div>
    </div>
  );
}