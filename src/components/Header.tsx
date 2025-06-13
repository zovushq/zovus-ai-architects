
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            ZOVUS
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
