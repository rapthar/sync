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
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop',
  },
  {
    id: 'k2',
    name: 'Coffee Maker',
    type: 'thermostat',
    status: 'off',
    room: 'Kitchen',
    usedSince: '06:15',
    image: 'https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=300&h=300&fit=crop',
  },
  {
    id: 'k3',
    name: 'Kitchen Lights',
    type: 'light',
    status: 'on',
    room: 'Kitchen',
    usedSince: '05:45',
    image: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=300&h=300&fit=crop',
  },
];

export function Kitchen() {
  const handleDeviceStatusChange = (deviceId: string, status: 'on' | 'off') => {
    console.log(`Device ${deviceId} status changed to ${status}`);
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video rounded-3xl overflow-hidden relative bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&h=800&fit=crop"
          alt="Kitchen"
          className="w-full h-full object-cover opacity-90"
        />
        
        <LiveIndicator />
        
        <RoomStats
          temperature={23}
          humidity={45}
          power={450}
          efficiency={75}
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