import React from 'react';
import { Play, Pause } from 'lucide-react';

interface PlayButtonProps {
  isPlaying: boolean;
  onClick: () => void;
  className?: string;
}

export function PlayButton({ isPlaying, onClick, className = '' }: PlayButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-200 transition-colors ${className}`}
    >
      {isPlaying ? (
        <Pause size={16} className="ml-0" />
      ) : (
        <Play size={16} className="ml-0.5" />
      )}
    </button>
  );
}