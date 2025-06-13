
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, TrendingUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            AI That Actually Works
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            AI shouldn't just be hype —{' '}
            <span className="text-blue-600">it should drive results</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Scale your business profitably with automation, smart systems, and minimal overhead. 
            We're your tech partner for practical AI solutions that deliver real ROI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Scale Your Business
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              See Our Work
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">10x</div>
              <div className="text-gray-600">Resource Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Lead Conversion Focus</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
              <div className="text-gray-600">Scalability Potential</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
