
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bot, Users, Lightbulb, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();

  const handleNavigation = (link: string, isExternal: boolean = false) => {
    if (isExternal) {
      window.open(link, '_blank');
    } else {
      navigate(link);
      // Scroll to top after navigation
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const services = [
    {
      icon: <Users className="w-8 h-8 text-[#E40223]" />,
      title: "ByteSprout",
      subtitle: "Build Authority, Generate Leads",
      description:
        "Help law firms grow online using AI Avatars to create educational content that builds authority and generates leads.",
      features: [
        "AI Avatar content creation",
        "Authority building strategy",
        "Automated lead conversion",
        "Social media presence"
      ],
      cta: "Visit ByteSprout",
      link: "https://bytesprout.zovus.tech",
      isExternal: true
    },
    {
      icon: <Bot className="w-8 h-8 text-[#E40223]" />,
      title: "AI Agent Development",
      subtitle: "Automate Boring Tasks",
      description: "Reduce resource costs by 1/10th or more with custom AI agents that handle repetitive work, letting your team focus on high-ROI activities.",
      features: [
        "Custom AI agent development",
        "Process automation",
        "Cost reduction strategies",
        "Seamless integration"
      ],
      cta: "Build AI Agents",
      link: "/ai-agent-development"
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-[#E40223]" />,
      title: "AI Consultation",
      subtitle: "Scale Smart, Do More With Less",
      description: "Strategic AI guidance to scale your business efficiently. We help identify opportunities and build actionable plans.",
      features: [
        "AI strategy development",
        "Opportunity assessment",
        "Implementation roadmap",
        "ROI optimization"
      ],
      cta: "Get Strategy Session",
      link: "/ai-consultation"
    }
  ];

  return (
    <section id="services" className="py-20 bg-[#FEEAED]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Three ways we help businesses leverage AI for real growth and efficiency
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8">
                <div className="mb-6 w-16 h-16 bg-[#FEEAED] rounded-full flex items-center justify-center">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-black mb-2">
                  {service.title}
                </h3>
                
                <p className="text-[#E40223] font-medium mb-4">
                  {service.subtitle}
                </p>
                
                <p className="text-gray-800 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-800">
                      <div className="w-2 h-2 bg-[#E40223] rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full"
                  onClick={() => handleNavigation(service.link, service.isExternal)}
                >
                  {service.cta}
                  {service.isExternal && <ExternalLink className="w-4 h-4 ml-2" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
