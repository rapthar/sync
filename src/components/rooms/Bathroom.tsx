import React from 'react';
import { RoomStats } from '../status/RoomStats';
import { DeviceCard } from '../devices/DeviceCard';
import { LiveIndicator } from '../status/LiveIndicator';

const devices = [
  {
    id: 'b1',
    name: 'Smart Mirror',
    type: 'light',
    status: 'on',
    room: 'Bathroom',
    usedSince: '07:00',
    image: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=300&h=300&fit=crop',
  },
  {
    id: 'b2',
    name: 'Heated Floor',
    type: 'thermostat',
    status: 'on',
    room: 'Bathroom',
    usedSince: '06:30',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=300&h=300&fit=crop',
  },
  {
    id: 'b3',
    name: 'Towel Warmer',
    type: 'thermostat',
    status: 'off',
    room: 'Bathroom',
    usedSince: '06:45',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=300&h=300&fit=crop',
  },
];

export function Bathroom() {
  const handleDeviceStatusChange = (deviceId: string, status: 'on' | 'off') => {
    console.log(`Device ${deviceId} status changed to ${status}`);
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video rounded-3xl overflow-hidden relative bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop"
          alt="Bathroom"
          className="w-full h-full object-cover opacity-90"
        />
        
        <LiveIndicator />
        
        <RoomStats
          temperature={24}
          humidity={65}
          power={300}
          efficiency={80}
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