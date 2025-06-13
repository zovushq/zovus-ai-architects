
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageSquare, Calendar, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-6">
              Ready to Scale With AI?
            </h2>
            <p className="text-xl text-gray-800 mb-12 max-w-3xl mx-auto">
              Let's discuss how we can help your business do more with less using practical AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Contact options */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">Email Us</h3>
                    <p className="text-gray-800 mb-4">Get in touch directly for detailed discussions</p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Send Email
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">Quick Chat</h3>
                    <p className="text-gray-800 mb-4">15-minute discovery call to explore opportunities</p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Schedule Call
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-black mb-2">Strategy Session</h3>
                    <p className="text-gray-800 mb-4">Deep dive consultation for comprehensive planning</p>
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Book Session
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Value proposition */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
              <h3 className="text-2xl font-bold text-black mb-6">
                What You'll Get
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Clear Action Plan</p>
                    <p className="text-gray-800 text-sm">Step-by-step roadmap for AI implementation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">ROI Assessment</p>
                    <p className="text-gray-800 text-sm">Detailed cost-benefit analysis for your business</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Custom Solutions</p>
                    <p className="text-gray-800 text-sm">Tailored AI strategies for your specific needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-black">Ongoing Support</p>
                    <p className="text-gray-800 text-sm">Partnership approach to your AI transformation</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                <p className="text-red-600 font-semibold text-center mb-2">
                  Ready to Transform Your Business?
                </p>
                <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white">
                  Start Your AI Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
