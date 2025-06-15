
import React from 'react';
import { Target, Zap, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Why ZOVUS?
            </h2>
            <p className="text-xl text-gray-800 leading-relaxed">
              We're not just another AI company. We're builders who understand business. 
              Smart tech without ego. Friendly without fluff.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#E40223]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Results-Focused</h3>
              <p className="text-gray-800">
                Every solution we build is measured by real business impact, not just technical complexity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#E40223]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Practical AI</h3>
              <p className="text-gray-800">
                We cut through the hype to deliver automation that actually works and scales with your business.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#E40223]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Your Tech Partner</h3>
              <p className="text-gray-800">
                We're not vendors, we're partners invested in your long-term success and growth.
              </p>
            </div>
          </div>
          
          <div className="bg-[#FEEAED] rounded-2xl p-8 shadow-lg border border-gray-200">
            <blockquote className="text-xl font-medium text-black text-center mb-6">
              "At ZOVUS, we believe AI shouldn't just be hype — it should drive results. 
              Our goal is to help businesses scale profitably with automation, smart systems, and minimal overhead."
            </blockquote>
            <div className="text-center">
              <div className="text-[#E40223] font-semibold">The ZOVUS Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
