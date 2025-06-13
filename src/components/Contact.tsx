import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageSquare, Calendar } from 'lucide-react';
const Contact = () => {
  return <section id="contact" className="py-20 text-white bg-sky-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Scale With AI?
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Let's discuss how we can help your business do more with less using practical AI solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-gray-300 text-sm">Get in touch directly</p>
                <Button variant="outline" className="mt-4 border-gray-600 text-blue-400 hover:bg-gray-700">
                  Send Email
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <MessageSquare className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Quick Chat</h3>
                <p className="text-gray-300 text-sm">15-minute discovery call</p>
                <Button variant="outline" className="mt-4 border-gray-600 text-blue-400 hover:bg-gray-700">
                  Schedule Call
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6 text-center">
                <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Strategy Session</h3>
                <p className="text-gray-300 text-sm">Deep dive consultation</p>
                <Button variant="outline" className="mt-4 border-gray-600 text-blue-400 hover:bg-gray-700">
                  Book Session
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-blue-600 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">
              Start Your AI Transformation Today
            </h3>
            <p className="text-blue-100 mb-6">
              Join businesses already scaling with our practical AI solutions
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;