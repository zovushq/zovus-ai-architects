
import React from "react";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

type HeroSectionProps = {
  onContact: () => void;
};

const HeroSection: React.FC<HeroSectionProps> = ({ onContact }) => (
  <section className="pt-24 pb-20 bg-gradient-to-br from-[#FEEAED] to-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 bg-[#FEEAED] text-[#E40223] rounded-full text-sm font-medium mb-8">
          <Lightbulb className="w-4 h-4 mr-2" />
          AI Consultation
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
          Scale Smart, Do More{" "}
          <span className="text-[#E40223]">With Less</span>
        </h1>
        <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto leading-relaxed">
          Strategic guidance on leveraging AI to scale your business efficiently.
          We help you identify opportunities and create actionable implementation plans.
        </p>
        <Button size="lg" onClick={onContact}>
          Get Strategic Guidance
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
