
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-pulse-50 relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 40 0 L 0 0 0 40" fill="none" stroke="%23f3f4f6" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%" height="100%" fill="url(%23grid)"/%3E%3C/svg%3E')`
      }}></div>
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Product badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-pulse-100 text-pulse-700 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-pulse-500 rounded-full mr-2 animate-pulse"></span>
            Open Source Power Revolution
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground mb-6">
            VoltPack
            <span className="block text-pulse-500">2000W UPS</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal mt-2">
              Open Source. Modular. Hackable.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            The first fully open-source 2000W UPS inverter designed for developers, makers, and power enthusiasts. 
            Build, modify, and understand your power solution.
          </p>

          {/* Key specs */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
              <span>2048Wh Capacity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
              <span>2000W Continuous</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
              <span>Pure Sine Wave</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-pulse-500 rounded-full"></div>
              <span>Modular Design</span>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="button-primary group">
              View Specifications
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Github className="mr-2 h-4 w-4" />
              View on GitHub
            </Button>
            <Button variant="ghost" size="lg" className="group">
              <Download className="mr-2 h-4 w-4" />
              Download Schematics
            </Button>
          </div>

          {/* Open source note */}
          <p className="text-sm text-muted-foreground mt-8">
            Licensed under CERN-OHL-W • Schematics, PCB layouts, and software freely available
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-pulse-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pulse-100 rounded-full opacity-30 animate-float" style={{ animationDelay: '-2s' }}></div>
    </section>
  );
};

export default Hero;
