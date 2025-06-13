
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/5fd19fa8-b0ed-4b31-9b5e-2a1a61f790c3.png" 
                alt="ZOVUS Logo" 
                className="h-8 w-auto filter invert"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              AI that drives results. Scale your business profitably with automation, 
              smart systems, and minimal overhead.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="https://bytesprout.zovus.tech" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors">ByteSprout</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">AI Agent Development</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">AI Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-red-600 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-red-600 transition-colors">Contact</a></li>
              <li><a href="#services" className="hover:text-red-600 transition-colors">Services</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ZOVUS. All rights reserved. Built with purpose, powered by results.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
