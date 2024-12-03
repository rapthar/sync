import React from 'react';
import { HomeIcon, ChefHat, Bath, BedDouble, TreePine, Sun } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const rooms = [
  { id: 'Living Room', icon: HomeIcon },
  { id: 'Kitchen', icon: ChefHat },
  { id: 'Bathroom', icon: Bath },
  { id: 'Bedroom', icon: BedDouble },
  { id: 'Backyard', icon: TreePine },
  { id: 'Terrace', icon: Sun },
] as const;

export type Room = typeof rooms[number]['id'];

interface RoomSelectorProps {
  selectedRoom: Room;
  onRoomChange: (room: Room) => void;
}

export function RoomSelector({ selectedRoom, onRoomChange }: RoomSelectorProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 w-full scrollbar-thin">
      {rooms.map(({ id, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onRoomChange(id)}
          className={`min-w-[44px] h-11 px-3 md:px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors flex items-center gap-2 flex-shrink-0 touch-manipulation ${
            id === selectedRoom
              ? 'bg-white text-gray-900'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
          }`}
        >
          <Icon size={18} className="flex-shrink-0" />
          <span className="hidden sm:inline">{id}</span>
        </button>
      ))}
    </div>
  );
}