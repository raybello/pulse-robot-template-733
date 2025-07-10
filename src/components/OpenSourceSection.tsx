import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Wrench, BookOpen } from "lucide-react";

const OpenSourceSection = () => {
  const features = [
    {
      icon: Code,
      title: "Open Hardware",
      description: "Full schematics, PCB layouts, and CAD files available under CERN-OHL-W license"
    },
    {
      icon: Wrench,
      title: "Right to Repair",
      description: "Modular design with readily available components for easy repair and upgrades"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "User-contributed modules, firmware, and applications from a global community"
    },
    {
      icon: BookOpen,
      title: "Educational",
      description: "Comprehensive documentation for learning power electronics and system integration"
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-background" id="opensource">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">1</span>
            <span>Open Source</span>
          </div>
          <div className="flex-1 h-[1px] bg-border"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Title and description */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Transparency by Design
            </h2>
            <p className="section-subtitle mx-auto">
              Unlike proprietary solutions, VoltPack embraces complete transparency. 
              Every schematic, every line of code, every design decision is open for you to inspect, 
              modify, and improve.
            </p>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card hover-lift border-0 shadow-elegant">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-pulse-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Open source stats */}
          <div className="mt-16 bg-pulse-50 rounded-2xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-pulse-600 mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Open Source</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pulse-600 mb-2">0</div>
                <div className="text-sm text-muted-foreground">Vendor Lock-in</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pulse-600 mb-2">∞</div>
                <div className="text-sm text-muted-foreground">Customization</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pulse-600 mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Year Lifespan</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;