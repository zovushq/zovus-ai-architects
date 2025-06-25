
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/ai-consultation/HeroSection";
import ApproachSection from "@/components/ai-consultation/ApproachSection";
import ServicesSection from "@/components/ai-consultation/ServicesSection";
import CTASection from "@/components/ai-consultation/CTASection";

const AiConsultation = () => {
  useEffect(() => {
    document.title = "AI Strategy Consulting | Unlock Growth with ZOVUS";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get expert guidance to identify high-impact AI opportunities for your business. ZOVUS delivers strategic AI consulting with clear, actionable implementation plans."
      );
    }
  }, []);

  const handleContactClick = () => {
    window.location.href = "mailto:hello@zovus.tech";
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection onContact={handleContactClick} />
      <ApproachSection />
      <ServicesSection />
      <CTASection onContact={handleContactClick} />
      <Footer />
    </div>
  );
};

export default AiConsultation;
