import React from 'react';
import { RoomStats } from '../status/RoomStats';
import { DeviceCard } from '../devices/DeviceCard';
import { LiveIndicator } from '../status/LiveIndicator';

const devices = [
  {
    id: 'br1',
    name: 'Bedside Lamp',
    type: 'light',
    status: 'off',
    room: 'Bedroom',
    usedSince: '22:00',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=300&h=300&fit=crop',
  },
  {
    id: 'br2',
    name: 'Air Purifier',
    type: 'humidifier',
    status: 'on',
    room: 'Bedroom',
    usedSince: '20:00',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop',
  },
  {
    id: 'br3',
    name: 'Smart Curtains',
    type: 'light',
    status: 'on',
    room: 'Bedroom',
    usedSince: '06:00',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=300&h=300&fit=crop',
  },
];

export function Bedroom() {
  const handleDeviceStatusChange = (deviceId: string, status: 'on' | 'off') => {
    console.log(`Device ${deviceId} status changed to ${status}`);
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video rounded-3xl overflow-hidden relative bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=1200&h=800&fit=crop"
          alt="Bedroom"
          className="w-full h-full object-cover opacity-90"
        />
        
        <LiveIndicator />
        
        <RoomStats
          temperature={21}
          humidity={40}
          power={150}
          efficiency={90}
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