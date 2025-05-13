
import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  onClose: () => void;
}

const BackButton = ({ onClose }: BackButtonProps) => {
  return (
    <button 
      onClick={onClose} 
      className="fixed top-8 left-8 z-50 flex items-center gap-2 text-white bg-black/50 px-4 py-2 rounded-md hover:bg-black transition-colors"
    >
      <ArrowLeft size={20} />
      Back to Portfolio
    </button>
  );
};

export default BackButton;
