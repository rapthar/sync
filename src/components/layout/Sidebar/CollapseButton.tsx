import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CollapseButtonProps {
  isCollapsed: boolean;
  onClick: () => void;
}

export function CollapseButton({ isCollapsed, onClick }: CollapseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-auto p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
    >
      {isCollapsed ? (
        <ChevronRight size={20} />
      ) : (
        <ChevronLeft size={20} />
      )}
    </button>
  );
}