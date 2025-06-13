
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            AI That Actually Works
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
            AI shouldn't just be hype —{' '}
            <span className="text-red-600">it should drive results</span>
          </h1>
          
          <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scale your business profitably with automation, smart systems, and minimal overhead. 
            We're your tech partner for practical AI solutions that deliver real ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              Scale Your Business
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 text-black hover:bg-gray-50">
              See Our Work
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">10x</div>
              <div className="text-gray-800">Resource Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-800">Lead Conversion Focus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">∞</div>
              <div className="text-gray-800">Scalability Potential</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
