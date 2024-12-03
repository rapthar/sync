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
    image: '/images/devices/smart-mirror.jpg',
  },
  {
    id: 'b2',
    name: 'Heated Floor',
    type: 'thermostat',
    status: 'on',
    room: 'Bathroom',
    usedSince: '06:30',
    image: '/images/devices/heated-floor.jpg',
  },
  {
    id: 'b3',
    name: 'Towel Warmer',
    type: 'thermostat',
    status: 'off',
    room: 'Bathroom',
    usedSince: '06:45',
    image: '/images/devices/towel-warmer.jpg',
  },
];

export function Bathroom() {
  const handleDeviceStatusChange = (deviceId: string, status: 'on' | 'off') => {
    console.log(`Device ${deviceId} status changed to ${status}`);
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video rounded-3xl overflow-hidden relative bg-gray-900">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/rooms/bathroom.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/rooms/bathroom.jpg"
          />
          <img
            src="/images/rooms/bathroom.jpg"
            alt="Bathroom"
            className="w-full h-full object-cover opacity-90"
          />
        </picture>
        
        <LiveIndicator />
        
        <RoomStats
          temperature={24}
          humidity={65}
          power={300}
          efficiency={80}
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