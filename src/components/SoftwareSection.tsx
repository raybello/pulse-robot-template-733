import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Smartphone, Globe, Code, Database, Shield } from "lucide-react";

const SoftwareSection = () => {
  const softwareFeatures = [
    {
      icon: Globe,
      title: "Web Interface",
      description: "Responsive web UI for configuration and monitoring",
      tech: "React • WebSocket • REST API"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Cross-platform mobile application with offline capability",
      tech: "Flutter • Push Notifications • GPS"
    },
    {
      icon: Terminal,
      title: "Command Line Tools",
      description: "CLI for automation, scripting, and integration",
      tech: "Python • Shell • Automation"
    },
    {
      icon: Code,
      title: "Developer SDK",
      description: "SDKs for Python, JavaScript, and C++ development",
      tech: "Multi-language • Documentation • Examples"
    }
  ];

  const apiFeatures = [
    "RESTful API with authentication",
    "WebSocket real-time updates", 
    "MQTT integration support",
    "GraphQL endpoint",
    "Rate limiting & security",
    "OpenAPI documentation"
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-background" id="software">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">4</span>
            <span>Software Ecosystem</span>
          </div>
          <div className="flex-1 h-[1px] bg-border"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Title and description */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Powerful Software Stack
            </h2>
            <p className="section-subtitle mx-auto">
              Built on embedded Linux with containerized applications, VoltPack provides 
              enterprise-grade software capabilities with the flexibility of open source.
            </p>
          </div>

          {/* Software features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {softwareFeatures.map((feature, index) => (
              <Card key={index} className="feature-card hover-lift border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-pulse-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                      <p className="text-muted-foreground text-sm mb-3">{feature.description}</p>
                      <div className="text-xs text-pulse-600 font-medium bg-pulse-50 px-3 py-1 rounded-full inline-block">
                        {feature.tech}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* API & Integration section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div className="bg-muted/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-6 h-6 text-pulse-600" />
                <h3 className="text-xl font-semibold">Developer API</h3>
              </div>
              <div className="space-y-3">
                {apiFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-pulse-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-pulse-50 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-6 h-6 text-pulse-600" />
                <h3 className="text-xl font-semibold">Security & Updates</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-1">Over-the-Air Updates</h4>
                  <p className="text-sm text-muted-foreground">Secure firmware and software updates</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">End-to-End Encryption</h4>
                  <p className="text-sm text-muted-foreground">All communications encrypted</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Local Data Processing</h4>
                  <p className="text-sm text-muted-foreground">Option for complete local operation</p>
                </div>
                <div>
                  <h4 className="font-medium mb-1">Container Support</h4>
                  <p className="text-sm text-muted-foreground">Docker for easy application deployment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code example */}
          <div className="bg-gray-900 rounded-2xl p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-5 h-5 text-pulse-400" />
              <span className="text-sm font-medium text-pulse-400">Quick Start Example</span>
            </div>
            <pre className="text-sm overflow-x-auto">
              <code>{`# Install VoltPack SDK
pip install voltpack-sdk

# Connect and monitor
from voltpack import VoltPack

ups = VoltPack.connect('192.168.1.100')
print(f"Battery: {ups.battery.level}%")
print(f"Load: {ups.inverter.load}W")

# Set up automation
ups.on('battery_low', lambda: ups.send_notification())`}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;