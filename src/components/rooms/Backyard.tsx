import React from 'react';
import { RoomStats } from '../status/RoomStats';
import { DeviceCard } from '../devices/DeviceCard';
import { LiveIndicator } from '../status/LiveIndicator';

const devices = [
  {
    id: 'by1',
    name: 'Garden Lights',
    type: 'light',
    status: 'on',
    room: 'Backyard',
    usedSince: '19:30',
    image: 'https://images.unsplash.com/photo-1558882224-dda166733046?w=300&h=300&fit=crop',
  },
  {
    id: 'by2',
    name: 'Irrigation System',
    type: 'humidifier',
    status: 'off',
    room: 'Backyard',
    usedSince: '06:00',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=300&h=300&fit=crop',
  },
  {
    id: 'by3',
    name: 'Security Camera',
    type: 'camera',
    status: 'on',
    room: 'Backyard',
    usedSince: '00:00',
    image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=300&h=300&fit=crop',
  },
];

export function Backyard() {
  const handleDeviceStatusChange = (deviceId: string, status: 'on' | 'off') => {
    console.log(`Device ${deviceId} status changed to ${status}`);
  };

  return (
    <div className="space-y-8">
      <div className="aspect-video rounded-3xl overflow-hidden relative bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1200&h=800&fit=crop"
          alt="Backyard"
          className="w-full h-full object-cover opacity-90"
        />
        
        <LiveIndicator />
        
        <RoomStats
          temperature={18}
          humidity={55}
          power={200}
          efficiency={85}
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