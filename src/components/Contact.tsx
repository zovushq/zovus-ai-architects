
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:zovus.inc@gmail.com';
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Ready to Scale With AI?
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Let's discuss how we can help transform your business with practical AI solutions that deliver real results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-black mb-6">Get in Touch</h3>
            <div className="space-y-6">
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#5433FF]/10 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-[#5433FF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Email</h4>
                      <a 
                        href="mailto:zovus.inc@gmail.com" 
                        className="text-gray-800 hover:underline transition-all duration-300 relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-gray-800 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                      >
                        zovus.inc@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border border-gray-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#5433FF]/10 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-[#5433FF]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Response Time</h4>
                      <p className="text-gray-800">Within 24 hours</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-[#5433FF]/5 to-white p-8 rounded-2xl border border-gray-200">
            <h3 className="text-2xl font-bold text-black mb-6">Start Your AI Journey</h3>
            <p className="text-gray-800 mb-8 leading-relaxed">
              Ready to automate your processes, reduce costs, and scale your business? 
              Let's explore how our AI solutions can transform your operations.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-800">
                <div className="w-2 h-2 bg-[#5433FF] rounded-full mr-3"></div>
                Free consultation call
              </div>
              <div className="flex items-center text-gray-800">
                <div className="w-2 h-2 bg-[#5433FF] rounded-full mr-3"></div>
                Custom solution proposal
              </div>
              <div className="flex items-center text-gray-800">
                <div className="w-2 h-2 bg-[#5433FF] rounded-full mr-3"></div>
                Implementation roadmap
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="w-full mt-8 bg-[#5433FF] hover:bg-[#4328CC] text-white"
              onClick={handleEmailClick}
            >
              Send Email
              <Mail className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
