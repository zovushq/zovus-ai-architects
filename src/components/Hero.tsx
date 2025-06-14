import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap } from 'lucide-react';
const Hero = () => {
  const handleSmoothScroll = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-[#5433FF]/10 text-[#5433FF] rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            AI That Actually Works
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            Turnkey <span className="text-[#5433FF]">AI Solutions</span> That Actually{' '}
            <span className="text-[#000000]">Move the Needle</span>
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scale your business profitably with automation, smart systems, and minimal overhead. 
            We're your tech partner for practical AI solutions that deliver real ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-[#5433FF] hover:bg-[#4328CC] text-white px-8 py-4 text-lg" onClick={() => handleSmoothScroll('#services')}>
              Scale Your Business
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-2xl p-8 shadow-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#5433FF] mb-2">10x</div>
                <div className="text-gray-800">Resource Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#5433FF] mb-2">100%</div>
                <div className="text-gray-800">Lead Conversion Focus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#5433FF] mb-2">∞</div>
                <div className="text-gray-800">Scalability Potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;