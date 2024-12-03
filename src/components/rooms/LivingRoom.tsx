import React, { useState } from 'react';
import { RoomStats } from '../status/RoomStats';
import { DeviceCard } from '../devices/DeviceCard';
import { MusicPlayer } from '../music/MusicPlayer';
import { LiveIndicator } from '../status/LiveIndicator';
import type { Device } from '../../types';

const initialDevices: Device[] = [
  {
    id: '1',
    name: 'Living Lamp',
    type: 'light',
    status: 'on',
    room: 'Living Room',
    usedSince: '06:20',
    image: '/images/devices/living-lamp.jpg',
  },
  {
    id: '2',
    name: 'Homepod',
    type: 'speaker',
    status: 'on',
    room: 'Living Room',
    usedSince: '08:30',
    image: '/images/devices/homepod.jpg',
  },
  {
    id: '3',
    name: 'Air Humidifier',
    type: 'humidifier',
    status: 'on',
    room: 'Living Room',
    usedSince: '10:00',
    value: 30,
    unit: '%',
    image: '/images/devices/air-humidifier.jpg',
  },
];

export function LivingRoom() {
  const [devices, setDevices] = useState(initialDevices);

  const handleDeviceStatusChange = (deviceId: string, status: 'on' | 'off') => {
    setDevices(prevDevices =>
      prevDevices.map(device =>
        device.id === deviceId ? { ...device, status } : device
      )
    );
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video rounded-3xl overflow-hidden relative bg-gray-900">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/rooms/living-room.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/rooms/living-room.jpg"
          />
          <img
            src="/images/rooms/living-room.jpg"
            alt="Living Room"
            className="w-full h-full object-cover opacity-90"
          />
        </picture>
        
        <LiveIndicator />
        
        <RoomStats
          temperature={20}
          humidity={30}
          power={250}
          efficiency={30}
        />

        <MusicPlayer
          songTitle="Oops! I did it again"
          artist="BRITNEY SPEARS"
          albumArt="/images/album-art/britney.jpg"
          currentTime="1:31"
          duration="3:02"
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {devices.map(device => (
          <DeviceCard 
            key={device.id} 
            device={device}
            onStatusChange={handleDeviceStatusChange}
          />
        ))}
      </div>
    </div>
  );
}