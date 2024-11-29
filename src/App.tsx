import React, { useState } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { WeatherWidget } from './components/weather/WeatherWidget';
import { EnergyPanel } from './components/energy/EnergyPanel';
import { RoomSelector, type Room } from './components/header/RoomSelector';
import { LivingRoom } from './components/rooms/LivingRoom';
import { Kitchen } from './components/rooms/Kitchen';
import { Bathroom } from './components/rooms/Bathroom';
import { Bedroom } from './components/rooms/Bedroom';
import { Backyard } from './components/rooms/Backyard';
import { Terrace } from './components/rooms/Terrace';

const weatherData = {
  temperature: 16,
  windSpeed: 30,
  windSpeedChange: 6,
  pressure: 720,
  pressureChange: -20,
  rainChance: 60,
};

function App() {
  const [selectedRoom, setSelectedRoom] = useState<Room>('Living Room');

  const renderRoom = () => {
    switch (selectedRoom) {
      case 'Living Room':
        return <LivingRoom />;
      case 'Kitchen':
        return <Kitchen />;
      case 'Bathroom':
        return <Bathroom />;
      case 'Bedroom':
        return <Bedroom />;
      case 'Backyard':
        return <Backyard />;
      case 'Terrace':
        return <Terrace />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Sidebar />
      
      <main className="ml-20 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-12 gap-8">
            {/* Left Column */}
            <div className="col-span-3 space-y-8 h-[calc(100vh-4rem)]">
              <WeatherWidget data={weatherData} />
              <div className="flex-grow">
                <EnergyPanel />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="col-span-9 space-y-8">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Hi Ann!</h1>
                <button className="w-10 h-10 rounded-full bg-gray-800 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
              
              <RoomSelector
                selectedRoom={selectedRoom}
                onRoomChange={setSelectedRoom}
              />
              
              {renderRoom()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;