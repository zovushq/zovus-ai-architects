
import React from "react";
import { Target, Lightbulb, TrendingUp, Users } from "lucide-react";

const ApproachSection: React.FC = () => (
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
          <div className="w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center mx-auto mb-4">
            <Target className="w-8 h-8 text-[#E40223]" />
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Assessment</h3>
          <p className="text-gray-800">
            Deep dive into your current processes to identify automation opportunities.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center mx-auto mb-4">
            <Lightbulb className="w-8 h-8 text-[#E40223]" />
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Strategy</h3>
          <p className="text-gray-800">
            Develop a comprehensive AI strategy aligned with your business goals.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center mx-auto mb-4">
            <TrendingUp className="w-8 h-8 text-[#E40223]" />
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Roadmap</h3>
          <p className="text-gray-800">
            Create a step-by-step implementation plan with clear milestones.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-[#E40223]" />
          </div>
          <h3 className="text-xl font-bold text-black mb-3">Support</h3>
          <p className="text-gray-800">
            Ongoing guidance and support throughout your AI transformation journey.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ApproachSection;
