import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Cpu, Battery, Zap, Wifi, Cog, Plus, Wrench } from "lucide-react";

const ModularSection = () => {
  const coreModules = [
    {
      icon: Battery,
      title: "Power Management Unit",
      description: "Battery monitoring and protection with advanced BMS",
      specs: "LiFePO4 • 51.2V • 40Ah"
    },
    {
      icon: Zap,
      title: "Inverter Module",
      description: "DC-AC conversion with replaceable MOSFET boards",
      specs: "2000W • Pure Sine • <3% THD"
    },
    {
      icon: Cpu,
      title: "Control Module", 
      description: "Main processor board running embedded Linux",
      specs: "ARM Cortex • Linux • GPIO"
    },
    {
      icon: Wifi,
      title: "Communication Module",
      description: "Networking and connectivity options",
      specs: "Wi-Fi • Bluetooth • Ethernet"
    }
  ];

  const expansionModules = [
    "Solar MPPT Controller",
    "Wind Turbine Controller", 
    "Generator Interface",
    "Load Control Module",
    "Environmental Sensors",
    "Custom GPIO Modules"
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-muted/30" id="modular">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span>
            <span>Modular Architecture</span>
          </div>
          <div className="flex-1 h-[1px] bg-border"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Title and description */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Build Your Perfect Power Solution
            </h2>
            <p className="section-subtitle mx-auto">
              VoltPack's modular architecture means you can start with the basics and expand as your needs grow. 
              Swap components, add functionality, or completely customize your power system.
            </p>
          </div>

          {/* Core modules */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Core Modules</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreModules.map((module, index) => (
                <Card key={index} className="feature-card hover-lift border-0 shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center">
                        <module.icon className="w-6 h-6 text-pulse-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{module.title}</h4>
                        <p className="text-muted-foreground text-sm mb-3">{module.description}</p>
                        <div className="text-xs text-pulse-600 font-medium bg-pulse-50 px-3 py-1 rounded-full inline-block">
                          {module.specs}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Expansion modules */}
          <div className="bg-background rounded-2xl p-8 border">
            <h3 className="text-2xl font-semibold mb-8 text-center">Expansion Modules</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {expansionModules.map((module, index) => (
                <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <Plus className="w-4 h-4 text-pulse-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{module}</span>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-sm text-muted-foreground">
                Don't see what you need? The open architecture makes it easy to create custom modules.
              </p>
            </div>
          </div>

          {/* Modular benefits */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Cog className="w-8 h-8 text-pulse-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Easy Repair</h4>
              <p className="text-sm text-muted-foreground">Replace only what breaks, not the entire system</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Plus className="w-8 h-8 text-pulse-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Scalable</h4>
              <p className="text-sm text-muted-foreground">Start small and expand as your needs grow</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-pulse-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-pulse-600" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Upgradeable</h4>
              <p className="text-sm text-muted-foreground">Future-proof with swappable components</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModularSection;