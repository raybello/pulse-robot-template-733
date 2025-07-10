import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Zap, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            <Badge className="bg-primary/20 text-primary-foreground border-primary/30 mb-6">
              🚀 Now Available - Open Source Power
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Open Source Power.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Unlimited Possibilities.
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Professional-grade portable power with complete transparency. 
              The VoltPack 2000W UPS Inverter is fully open-source, modular, 
              and community-driven.
            </p>

            {/* Key Stats */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">2000W Output</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-5 w-5 bg-green-400 rounded" />
                <span className="font-semibold">2048Wh Capacity</span>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="h-5 w-5 text-blue-400" />
                <span className="font-semibold">100% Open Source</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                Explore VoltPack 2000
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                <Github className="mr-2 h-5 w-5" />
                View Open Source Files
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-gray-400" />
                <span className="text-sm text-gray-400">2,500+ Community Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="h-5 w-5 bg-yellow-400 rounded" />
                <span className="text-sm text-gray-400">4.8/5 Customer Rating</span>
              </div>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png"
                alt="VoltPack 2000W UPS Inverter"
                className="w-full h-auto max-w-lg mx-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">2000W</div>
              <div className="text-sm text-gray-300">Peak Output</div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold">95%</div>
              <div className="text-sm text-gray-300">Efficiency</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;