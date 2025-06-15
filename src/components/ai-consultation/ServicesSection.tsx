import React from "react";
import { CheckCircle } from "lucide-react";
const ServicesSection: React.FC = () => <section className="py-20 bg-gray-50">
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
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Current state analysis and opportunity mapping</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">AI use case identification and prioritization</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Technology stack recommendations</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-4">Implementation Planning</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Detailed project roadmap with timelines</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Resource requirements and budget planning</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Risk assessment and mitigation strategies</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-4">ROI Optimization</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Cost-benefit analysis for each AI initiative</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Performance metrics and KPI definition</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Long-term scalability planning</span>
            </li>
          </ul>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
          <h3 className="text-2xl font-bold text-black mb-4">Ongoing Support</h3>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Regular strategy reviews and adjustments</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Team training and knowledge transfer</span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#E40223] mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-800">Access to our network of AI specialists</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>;
export default ServicesSection;