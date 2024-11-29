import React from 'react';
import { Music2 } from 'lucide-react';

interface MusicPlayerProps {
  songTitle: string;
  artist: string;
  albumArt: string;
  currentTime: string;
  duration: string;
}

export function MusicPlayer({ songTitle, artist, albumArt, currentTime, duration }: MusicPlayerProps) {
  return (
    <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md rounded-xl p-3 flex items-center gap-3">
      <div className="flex-shrink-0">
        <img src={albumArt} alt={`${songTitle} by ${artist}`} className="w-10 h-10 rounded-lg object-cover" />
      </div>
      <div className="flex-grow min-w-0">
        <div className="flex items-center gap-2">
          <Music2 className="text-green-500" size={16} />
          <div className="text-sm font-medium truncate">{songTitle}</div>
        </div>
        <div className="text-xs text-gray-400 truncate">{artist}</div>
        <div className="mt-1 flex items-center gap-2">
          <div className="h-1 flex-grow bg-gray-700 rounded-full">
            <div className="h-full w-[40%] bg-white rounded-full" />
          </div>
          <div className="text-xs text-gray-400 tabular-nums">
            {currentTime} / {duration}
          </div>
        </div>
      </div>
    </div>
  );
}