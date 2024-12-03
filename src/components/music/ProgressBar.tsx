import React from 'react';

interface ProgressBarProps {
  currentTime: string;
  duration: string;
  progress: number;
}

export function ProgressBar({ currentTime, duration, progress }: ProgressBarProps) {
  return (
    <div className="mt-1 flex items-center gap-2">
      <div className="h-1 flex-grow bg-gray-700 rounded-full">
        <div 
          className="h-full bg-white rounded-full transition-all duration-300" 
          style={{ width: `${progress}%` }} 
        />
      </div>
      <div className="text-xs text-gray-400 tabular-nums">
        {currentTime} / {duration}
      </div>
    </div>
  );
}