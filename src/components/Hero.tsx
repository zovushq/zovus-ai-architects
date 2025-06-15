
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
          {/* Changed bg-[#FEEAED] (purple) to bg-[#E40223] (red) */}
          <div className="inline-flex items-center px-4 py-2 bg-[#E40223] text-white rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            Start Your AI Journey
          </div>
          
          <h1 className="md:text-6xl font-bold text-black mb-6 leading-tight text-5xl">
            Turnkey <span className="text-[#E40223]">AI Solutions</span> That Actually{' '}
            <span className="text-[#000000]">Move the Needle</span>
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scale your business profitably with automation, smart systems, and minimal overhead. 
            We're your tech partner for practical AI solutions that deliver real ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" onClick={() => handleSmoothScroll('#services')}>
              Scale Your Business
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-16 rounded-2xl p-8 shadow-lg border border-gray-200 bg-[F9FAFB] bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E40223] mb-2">10x</div>
                <div className="text-gray-800">Resource Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E40223] mb-2">100%</div>
                <div className="text-gray-800">Lead Conversion Focus</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-[#E40223] mb-2">∞</div>
                <div className="text-gray-800">Scalability Potential</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
