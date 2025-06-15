import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Bot, Target, Clock, DollarSign, TrendingUp, CheckCircle } from 'lucide-react';
const AiAgentDevelopment = () => {
  useEffect(() => {
    document.title = 'Custom AI Agent Development | Build Smart Automation with ZOVUS';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'ZOVUS builds AI agents tailored to your business—handling lead gen, support, operations, and more. Automate intelligently and boost efficiency without complexity.');
    }
  }, []);
  const handleContactClick = () => {
    window.location.href = 'mailto:zovus.inc@gmail.com';
  };
  return <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-[#FEEAED] to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#FEEAED] text-[#E40223] rounded-full text-sm font-medium mb-8">
              <Bot className="w-4 h-4 mr-2 text-[#E40223]" />
              AI Agent Development
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Automate Boring Tasks with{' '}
              <span className="text-[#E40223]">Custom AI Agents</span>
            </h1>
            
            <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
              Reduce resource costs by 1/10th or more with intelligent automation. 
              Let your team focus on high-ROI activities while AI handles the repetitive work.
            </p>
            
            <Button size="lg" onClick={handleContactClick} className="bg-black text-white border border-transparent px-8 py-4 hover:bg-white hover:text-[#E40223] hover:border-[#E40223] transition-colors text-base">
              Start Building AI Agents
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              Why Choose AI Agent Development?
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Transform your business operations with intelligent automation that delivers measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-[#E40223]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">90% Cost Reduction</h3>
              <p className="text-gray-800">
                Cut operational costs dramatically by automating repetitive tasks that consume valuable human resources.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-[#E40223]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">24/7 Operations</h3>
              <p className="text-gray-800">
                AI agents work around the clock, ensuring your business processes never stop, even when your team rests.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-[#E40223]" />
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Instant Scalability</h3>
              <p className="text-gray-800">
                Scale your operations instantly without hiring additional staff or increasing overhead costs.
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
              Our AI Agent Services
            </h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
              Comprehensive AI agent development tailored to your specific business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Custom AI Agent Development</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Tailored solutions for your specific workflows</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Integration with existing systems and tools</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Continuous learning and improvement</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
              <h3 className="text-2xl font-bold text-black mb-4">Process Automation</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Data entry and processing automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Customer service and support automation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">Report generation and analysis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#E40223]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how custom AI agents can transform your operations and reduce costs significantly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="border-2 border-white text-white bg-transparent px-8 py-4 text-lg hover:bg-white hover:text-[#E40223] transition-colors" onClick={handleContactClick}>
              Email Us
            </Button>
            <Button size="lg" className="bg-white text-[#E40223] border-2 border-white px-8 py-4 text-lg hover:bg-black hover:text-white transition-colors" onClick={() => window.open('https://cal.com/zovus/bytesprout', '_blank')}>
              Book a Meeting
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AiAgentDevelopment;