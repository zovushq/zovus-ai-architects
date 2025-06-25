
import React from "react";
import { Button } from "@/components/ui/button";

type CTASectionProps = {
  onContact: () => void;
};

const CTASection: React.FC<CTASectionProps> = ({ onContact }) => (
  <section className="py-20 bg-[#e40223]">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-6">
        Ready to Scale With AI?
      </h2>
      <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
        Let's create a strategic AI roadmap that transforms your business operations and drives measurable growth.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button size="lg" variant="outline" onClick={onContact}>
          Email Us
        </Button>
        <Button size="lg" className="bg-white text-[#E40223] border border-[#E40223] hover:bg-black hover:text-white hover:border-black transition-colors" onClick={() => window.open('https://cal.com/zovus/bytesprout', '_blank')}>
          Book a Meeting
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;
