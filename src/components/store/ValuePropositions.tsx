import React from "react";
import { Code, Puzzle, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ValuePropositions = () => {
  const propositions = [
    {
      icon: Code,
      title: "Open Source Hardware",
      description: "Complete transparency with full schematics, PCB layouts, and CAD files available under CERN-OHL-W license. Build, modify, and improve your power solution.",
      features: [
        "Full circuit schematics",
        "PCB design files",
        "3D printable cases",
        "No vendor lock-in"
      ],
      link: "/open-source"
    },
    {
      icon: Puzzle,
      title: "Modular Design",
      description: "Swappable components for easy repair and upgrades. Add solar panels, extra batteries, or custom modules to fit your exact needs.",
      features: [
        "Hot-swappable modules",
        "Standardized connectors",
        "Easy field repair",
        "Future-proof design"
      ],
      link: "/modular"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join thousands of makers, developers, and power enthusiasts building the future of portable power together.",
      features: [
        "Active developer community",
        "User-contributed modules",
        "Shared knowledge base",
        "Regular community events"
      ],
      link: "/community"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Why Choose VoltPack?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            More than just a power station - VoltPack represents a new approach to portable power that puts control back in your hands.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {propositions.map((prop, index) => (
            <div key={index} className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
                  <prop.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {prop.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {prop.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {prop.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
                  asChild
                >
                  <a href={prop.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;