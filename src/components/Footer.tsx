import React from 'react';
import { Instagram, Linkedin, Facebook } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleSmoothScroll = (elementId: string) => {
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.querySelector(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleServiceNavigation = (path: string) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleLogoClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const XIcon = () => (
    <svg
      viewBox="0 0 24 24"
      className="w-6 h-6"
      fill="currentColor"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );

  return (
    <footer className="bg-black/95 backdrop-blur-lg border-t border-white/10 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <button onClick={handleLogoClick} className="cursor-pointer">
                <img
                  src="/lovable-uploads/c1e50f00-59fa-4db7-ae4b-cada6a80ddd1.png"
                  alt="ZOVUS company logo – AI-powered business scaling solutions"
                  className="h-10 w-auto"
                />
              </button>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              AI that drives results. Scale your business profitably with automation,
              smart systems, and minimal overhead.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/zovushq/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-pink-500 hover:bg-pink-500/20 hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/zovushq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-blue-400 hover:bg-blue-400/20 hover:shadow-lg hover:shadow-blue-400/25 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/zovushq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-gray-300 hover:bg-gray-300/20 hover:shadow-lg hover:shadow-gray-300/25 transition-all duration-300"
              >
                <XIcon />
              </a>
              <a
                href="https://www.facebook.com/zovushq"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-blue-600 hover:bg-blue-600/20 hover:shadow-lg hover:shadow-blue-600/25 transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-white after:mt-1 after:rounded-full">
              Services
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://bytesprout.zovus.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-underline text-white px-2 transition-colors font-normal"
                  style={{ background: 'transparent' }}
                >
                  ByteSprout
                </a>
              </li>
              <li>
                <button
                  onClick={() => handleServiceNavigation('/ai-agent-development')}
                  className="footer-underline text-white px-2 transition-colors text-left font-normal"
                  style={{ background: 'transparent' }}
                >
                  AI Agent Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleServiceNavigation('/ai-consultation')}
                  className="footer-underline text-white px-2 transition-colors text-left font-normal"
                  style={{ background: 'transparent' }}
                >
                  AI Consultation
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 relative inline-block after:content-[''] after:block after:w-full after:h-0.5 after:bg-white after:mt-1 after:rounded-full">
              Company
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <button
                  onClick={() => handleSmoothScroll('#about')}
                  className="footer-underline text-white px-2 transition-colors text-left font-normal"
                  style={{ background: 'transparent' }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('#contact')}
                  className="footer-underline text-white px-2 transition-colors text-left font-normal"
                  style={{ background: 'transparent' }}
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleSmoothScroll('#services')}
                  className="footer-underline text-white px-2 transition-colors text-left font-normal"
                  style={{ background: 'transparent' }}
                >
                  Services
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-400">
          <p>&copy; 2025 ZOVUS. All rights reserved. Built with purpose, powered by results.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
