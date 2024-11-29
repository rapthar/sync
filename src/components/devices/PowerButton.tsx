import React, { useState } from 'react';
import { Power } from 'lucide-react';

interface PowerButtonProps {
  initialStatus?: 'on' | 'off';
  onChange?: (status: 'on' | 'off') => void;
}

export function PowerButton({ initialStatus = 'off', onChange }: PowerButtonProps) {
  const [status, setStatus] = useState(initialStatus);

  const handleClick = () => {
    const newStatus = status === 'on' ? 'off' : 'on';
    setStatus(newStatus);
    onChange?.(newStatus);
  };

  return (
    <button 
      onClick={handleClick}
      className={`p-2 rounded-full transition-colors ${
        status === 'on' 
          ? 'bg-red-500 text-white' 
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
      }`}
    >
      <Power size={18} />
    </button>
  );
}