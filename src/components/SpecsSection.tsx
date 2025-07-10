
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="pulse-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">2</span>
              <span>Technical Specifications</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-border"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="section-title mb-6">Professional Grade Performance</h2>
            <p className="section-subtitle mx-auto">
              Built to handle demanding applications with enterprise-level reliability and safety standards.
            </p>
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Power Specifications */}
            <div className="bg-background rounded-2xl p-6 border shadow-elegant">
              <h3 className="text-lg font-semibold mb-4 text-pulse-600">Power Output</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Continuous</span>
                  <span className="font-medium">2000W</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Peak (30s)</span>
                  <span className="font-medium">4000W</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wave Form</span>
                  <span className="font-medium">Pure Sine</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">THD</span>
                  <span className="font-medium">&lt;3%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Efficiency</span>
                  <span className="font-medium">&gt;95%</span>
                </div>
              </div>
            </div>

            {/* Battery Specifications */}
            <div className="bg-background rounded-2xl p-6 border shadow-elegant">
              <h3 className="text-lg font-semibold mb-4 text-pulse-600">Battery System</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Capacity</span>
                  <span className="font-medium">2048Wh</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Voltage</span>
                  <span className="font-medium">51.2V</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current</span>
                  <span className="font-medium">40Ah</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Chemistry</span>
                  <span className="font-medium">LiFePO4</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Cycles</span>
                  <span className="font-medium">6000+</span>
                </div>
              </div>
            </div>

            {/* Connectivity */}
            <div className="bg-background rounded-2xl p-6 border shadow-elegant">
              <h3 className="text-lg font-semibold mb-4 text-pulse-600">Connectivity</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Wi-Fi</span>
                  <span className="font-medium">802.11ac</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Bluetooth</span>
                  <span className="font-medium">5.0 LE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Ethernet</span>
                  <span className="font-medium">Gigabit</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">CAN Bus</span>
                  <span className="font-medium">Yes</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">GPIO</span>
                  <span className="font-medium">40-pin</span>
                </div>
              </div>
            </div>
          </div>

          {/* Output ports */}
          <div className="mt-12 bg-pulse-50 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Output Ports</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-sm">
              <div>
                <div className="font-medium mb-1">AC Outlets</div>
                <div className="text-muted-foreground">2x NEMA 5-15R<br/>1x IEC C13<br/>1x 30A twist-lock</div>
              </div>
              <div>
                <div className="font-medium mb-1">USB-C PD</div>
                <div className="text-muted-foreground">4x ports<br/>100W each</div>
              </div>
              <div>
                <div className="font-medium mb-1">USB-A</div>
                <div className="text-muted-foreground">4x ports<br/>18W each (QC3.0)</div>
              </div>
              <div>
                <div className="font-medium mb-1">DC Output</div>
                <div className="text-muted-foreground">2x 12V/10A barrel<br/>2x 12V/30A Anderson</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
