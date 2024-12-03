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
    <div className="min-h-screen bg-gray-950 text-white flex">
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      <main className="flex-1 p-4 md:p-6 lg:p-8 md:ml-20">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Left Column */}
            <div className="lg:col-span-3 space-y-4 md:space-y-6 lg:space-y-8 lg:h-[calc(100vh-4rem)]">
              <WeatherWidget data={weatherData} />
              <div className="flex-grow">
                <EnergyPanel />
              </div>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-9 space-y-6 md:space-y-8">
              <div className="flex items-center justify-between mt-6 lg:mt-0">
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