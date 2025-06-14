
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Lightbulb, Target, TrendingUp, Users, CheckCircle, Star } from 'lucide-react';

const AiConsultation = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#5433FF]/5 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#5433FF]/10 text-[#5433FF] rounded-full text-sm font-medium mb-8">
              <Lightbulb className="w-4 h-4 mr-2" />
              AI Consultation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Scale Smart, Do More{' '}
              <span className="text-[#5433FF]">With Less</span>
            </h1>
            
            <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
              Strategic guidance on leveraging AI to scale your business efficiently. 
              We help you identify opportunities and create actionable implementation plans.
            </p>
            
            <Button size="lg" className="bg-[#5433FF] hover:bg-[#4328CC] text-white px-8 py-4 text-lg">
              Get Strategic Guidance
              <Star className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Our Consultation Approach
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              A systematic approach to identifying AI opportunities and creating actionable strategies
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5433FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#5433FF]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Assessment</h3>
              <p className="text-gray-800">
                Deep dive into your current processes to identify automation opportunities.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5433FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-[#5433FF]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Strategy</h3>
              <p className="text-gray-800">
                Develop a comprehensive AI strategy aligned with your business goals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5433FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#5433FF]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Roadmap</h3>
              <p className="text-gray-800">
                Create a step-by-step implementation plan with clear milestones.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5433FF]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#5433FF]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Support</h3>
              <p className="text-gray-800">
                Ongoing guidance and support throughout your AI transformation journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              What's Included in Our Consultation
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Comprehensive analysis and strategic planning for your AI implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">AI Strategy Development</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Current state analysis and opportunity mapping</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">AI use case identification and prioritization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Technology stack recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Implementation Planning</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Detailed project roadmap with timelines</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Resource requirements and budget planning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Risk assessment and mitigation strategies</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">ROI Optimization</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Cost-benefit analysis for each AI initiative</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Performance metrics and KPI definition</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Long-term scalability planning</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Ongoing Support</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Regular strategy reviews and adjustments</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Team training and knowledge transfer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#5433FF] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Access to our network of AI specialists</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#5433FF]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Scale With AI?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's create a strategic AI roadmap that transforms your business operations and drives measurable growth.
          </p>
          <Button size="lg" className="bg-white text-[#5433FF] hover:bg-gray-100 px-8 py-4 text-lg">
            Book Your Strategy Session
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AiConsultation;
