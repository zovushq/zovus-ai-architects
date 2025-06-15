
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, Calendar } from 'lucide-react';
const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:zovus.inc@gmail.com';
  };
  const handleBookCallClick = () => {
    window.open('https://cal.com/zovus/bytesprout', '_blank');
  };
  return <section id="contact" className="py-20 bg-white">
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
                    {/* ICON: email, color #E40223, bg-light red */}
                    <div className="w-12 h-12 bg-[#E40223]/10 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-[#E40223]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">Email</h4>
                      <a
                        href="mailto:zovus.inc@gmail.com"
                        className="text-gray-800 transition-all duration-300 relative after:content-[''] after:absolute after:left-0 after:w-full after:h-[1.2px] after:bg-gray-500 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:origin-bottom-left after:transition-transform after:duration-300 after:rounded-full hover:after:bg-[#5433FF] focus:after:bg-[#5433FF]"
                        style={{ WebkitTapHighlightColor: "transparent" }}
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
                    {/* ICON: response time, color #E40223, bg-light red */}
                    <div className="w-12 h-12 bg-[#E40223]/10 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-[#E40223]" />
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
                <div className="w-2 h-2 bg-[#E40223] rounded-full mr-3"></div>
                Free consultation call
              </div>
              <div className="flex items-center text-gray-800">
                <div className="w-2 h-2 bg-[#E40223] rounded-full mr-3"></div>
                Custom solution proposal
              </div>
              <div className="flex items-center text-gray-800">
                <div className="w-2 h-2 bg-[#E40223] rounded-full mr-3"></div>
                Implementation roadmap
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              {/* book a call: black bg, white text */}
              <Button 
                size="lg" 
                onClick={handleBookCallClick} 
                className="flex-1 bg-black text-white hover:bg-[#E40223] hover:text-white px-0 py-[10px] border-none"
              >
                Book a Call
                <Calendar className="w-5 h-5 ml-2" />
              </Button>
              {/* send email: black outline, black text normal, red bg/white hover */}
              <Button
                size="lg"
                variant="outline"
                onClick={handleEmailClick}
                className="flex-1 border-2 border-black text-black bg-white hover:bg-[#E40223] hover:text-white hover:border-[#E40223] py-[10px]"
              >
                Send Email
                <Mail className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
