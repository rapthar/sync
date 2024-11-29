import React from 'react';
import { Thermometer, Droplets, Zap, PieChart } from 'lucide-react';

interface RoomStatsProps {
  temperature: number;
  humidity: number;
  power: number;
  efficiency: number;
}

export function RoomStats({ temperature, humidity, power, efficiency }: RoomStatsProps) {
  return (
    <div className="absolute top-4 right-4 flex gap-2">
      <div className="bg-gray-900/80 backdrop-blur px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
        <Thermometer size={14} className="text-red-400" />
        <span>{temperature}°C</span>
      </div>
      <div className="bg-gray-900/80 backdrop-blur px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
        <Droplets size={14} className="text-blue-400" />
        <span>{humidity}%</span>
      </div>
      <div className="bg-gray-900/80 backdrop-blur px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
        <Zap size={14} className="text-yellow-400" />
        <span>{power}W</span>
      </div>
      <div className="bg-gray-900/80 backdrop-blur px-3 py-1.5 rounded-full text-sm flex items-center gap-2">
        <PieChart size={14} className="text-green-400" />
        <span>{efficiency}%</span>
      </div>
    </div>
  );
}