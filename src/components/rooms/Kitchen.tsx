import React from 'react';
import { RoomStats } from '../status/RoomStats';
import { DeviceCard } from '../devices/DeviceCard';
import { LiveIndicator } from '../status/LiveIndicator';

const devices = [
  {
    id: 'k1',
    name: 'Smart Oven',
    type: 'thermostat',
    status: 'on',
    room: 'Kitchen',
    usedSince: '07:30',
    image: '/images/devices/smart-oven.jpg',
  },
  {
    id: 'k2',
    name: 'Coffee Maker',
    type: 'thermostat',
    status: 'off',
    room: 'Kitchen',
    usedSince: '06:15',
    image: '/images/devices/coffee-maker.jpg',
  },
  {
    id: 'k3',
    name: 'Kitchen Lights',
    type: 'light',
    status: 'on',
    room: 'Kitchen',
    usedSince: '05:45',
    image: '/images/devices/kitchen-lights.jpg',
  },
];

export function Kitchen() {
  const handleDeviceStatusChange = (deviceId: string, status: 'on' | 'off') => {
    console.log(`Device ${deviceId} status changed to ${status}`);
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video rounded-3xl overflow-hidden relative bg-gray-900">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/rooms/kitchen.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/rooms/kitchen.jpg"
          />
          <img
            src="/images/rooms/kitchen.jpg"
            alt="Kitchen"
            className="w-full h-full object-cover opacity-90"
          />
        </picture>
        
        <LiveIndicator />
        
        <RoomStats
          temperature={23}
          humidity={45}
          power={450}
          efficiency={75}
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