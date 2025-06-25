
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FEEAED] rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#E40223]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                  <p className="text-gray-800 mb-3">
                    Get in touch for a consultation or quote
                  </p>
                  <a href="mailto:hello@zovus.tech" className="text-[#E40223] hover:underline">
                    hello@zovus.tech
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FEEAED] rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#E40223]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Call Us</h3>
                  <p className="text-gray-800 mb-3">
                    Speak directly with our AI consultants
                  </p>
                  <a href="tel:+1234567890" className="text-[#E40223] hover:underline">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#FEEAED] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#E40223]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Visit Us</h3>
                  <p className="text-gray-800">
                    123 AI Innovation Drive<br />
                    Tech Valley, CA 94000<br />
                    United States
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E40223] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E40223] focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E40223] focus:border-transparent"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#E40223] text-white hover:bg-[#B30225] border-none"
                  onClick={() => window.location.href = 'mailto:hello@zovus.tech'}
                >
                  Send Email
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
