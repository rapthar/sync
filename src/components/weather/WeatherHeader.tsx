import React from 'react';

interface WeatherHeaderProps {
  temperature: number;
  time: string;
}

export function WeatherHeader({ temperature, time }: WeatherHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div>
        <div className="text-4xl font-light tracking-tight">{temperature}°C</div>
        <div className="text-gray-400 mt-1">{time}</div>
      </div>
      <div className="text-5xl">⛅</div>
    </div>
  );
}