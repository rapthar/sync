import React from 'react';
import { HomeIcon, ChefHat, Bath, BedDouble, TreePine, Sun } from 'lucide-react';
import type { Room } from '../header/RoomSelector';
import type { LucideIcon } from 'lucide-react';

const roomIcons: Record<Room, LucideIcon> = {
  'Living Room': HomeIcon,
  'Kitchen': ChefHat,
  'Bathroom': Bath,
  'Bedroom': BedDouble,
  'Backyard': TreePine,
  'Terrace': Sun,
};

interface RoomHeaderProps {
  room: Room;
  temperature: number;
  humidity: number;
  power: number;
  efficiency: number;
}

export function RoomHeader({ room, temperature, humidity, power, efficiency }: RoomHeaderProps) {
  const Icon = roomIcons[room];
  
  return (
    <div className="absolute left-4 bottom-4 flex items-center gap-3">
      <div className="w-12 h-12 rounded-xl bg-gray-900/80 backdrop-blur flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-white">{room}</h2>
        <div className="flex items-center gap-4 text-sm text-gray-300">
          <span>{temperature}°C</span>
          <span>{humidity}% Humidity</span>
          <span>{power}W Power</span>
          <span>{efficiency}% Efficiency</span>
        </div>
      </div>
    </div>
  );
}