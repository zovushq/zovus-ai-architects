
import React from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Start Your AI Journey
            </h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Ready to transform your business with AI? Let's discuss how we can help you scale efficiently and profitably.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#E40223] text-white hover:bg-[#B30225] border-none"
              onClick={() => window.location.href = 'mailto:hello@zovus.tech'}
            >
              Email Us
            </Button>
            <Button 
              size="lg" 
              className="bg-black text-white hover:bg-white hover:text-[#E40223] hover:border hover:border-[#E40223] transition-colors"
              onClick={() => window.open('https://cal.com/zovus/bytesprout', '_blank')}
            >
              Book a Meeting
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
