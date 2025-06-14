
import React from 'react';

interface LogoButtonProps {
  onClick: () => void;
}

const LogoButton: React.FC<LogoButtonProps> = ({ onClick }) => (
  <button onClick={onClick} className="cursor-pointer">
    <img 
      src="/lovable-uploads/371fcea4-706d-45e4-b873-535edc2d0eaa.png" 
      alt="ZOVUS company logo – AI-powered business scaling solutions" 
      className="h-8 w-auto"
    />
  </button>
);

export default LogoButton;
