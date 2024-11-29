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
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop',
  },
  {
    id: '2',
    name: 'Homepod',
    type: 'speaker',
    status: 'on',
    room: 'Living Room',
    usedSince: '08:30',
    image: 'https://images.unsplash.com/photo-1610438235354-a6ae5528385c?w=300&h=300&fit=crop',
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
    image: 'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?w=300&h=300&fit=crop',
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
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop"
          alt="Living Room"
          className="w-full h-full object-cover opacity-90"
        />
        
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
          albumArt="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=100&h=100&fit=crop"
          currentTime="1:31"
          duration="3:02"
        />
      </div>
      
      <div className="grid grid-cols-3 gap-6">
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