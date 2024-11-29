import React from 'react';
import { RoomStats } from '../status/RoomStats';
import { DeviceCard } from '../devices/DeviceCard';
import { LiveIndicator } from '../status/LiveIndicator';

const devices = [
  {
    id: 't1',
    name: 'Terrace Lights',
    type: 'light',
    status: 'on',
    room: 'Terrace',
    usedSince: '19:00',
    image: 'https://images.unsplash.com/photo-1595514736216-f8977daa8fcd?w=300&h=300&fit=crop',
  },
  {
    id: 't2',
    name: 'Outdoor Speakers',
    type: 'speaker',
    status: 'off',
    room: 'Terrace',
    usedSince: '18:30',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=300&fit=crop',
  },
  {
    id: 't3',
    name: 'Heat Lamp',
    type: 'thermostat',
    status: 'on',
    room: 'Terrace',
    usedSince: '19:15',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=300&fit=crop',
  },
];

export function Terrace() {
  const handleDeviceStatusChange = (deviceId: string, status: 'on' | 'off') => {
    console.log(`Device ${deviceId} status changed to ${status}`);
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video rounded-3xl overflow-hidden relative bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop"
          alt="Terrace"
          className="w-full h-full object-cover opacity-90"
        />
        
        <LiveIndicator />
        
        <RoomStats
          temperature={19}
          humidity={50}
          power={180}
          efficiency={95}
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