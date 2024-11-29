import React from 'react';

export function LiveIndicator() {
  return (
    <div className="absolute left-4 top-4 bg-red-500/80 backdrop-blur text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2">
      <div className="w-2 h-2 bg-white rounded-full animate-[pulse_1.5s_ease-in-out_infinite]" />
      LIVE
    </div>
  );
}