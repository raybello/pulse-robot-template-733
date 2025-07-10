import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Github, BookOpen, Award, MessageCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitySection = () => {
  const communityStats = [
    { icon: Users, value: "2,500+", label: "Community Members" },
    { icon: Github, value: "150+", label: "Contributors" },
    { icon: BookOpen, value: "50+", label: "Learning Resources" },
    { icon: Award, value: "25+", label: "Certified Developers" }
  ];

  const getInvolved = [
    {
      icon: Github,
      title: "Contribute Code",
      description: "Help improve firmware, software, or hardware designs",
      action: "View Repositories"
    },
    {
      icon: MessageCircle,
      title: "Join Discussions",
      description: "Connect with other users and share your projects",
      action: "Join Forum"
    },
    {
      icon: BookOpen,
      title: "Create Content",
      description: "Write tutorials, guides, or documentation",
      action: "Start Writing"
    },
    {
      icon: Zap,
      title: "Share Projects",
      description: "Show off your VoltPack builds and modifications",
      action: "Share Now"
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-muted/30" id="community">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 sm:mb-16">
          <div className="pulse-chip">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">6</span>
            <span>Community</span>
          </div>
          <div className="flex-1 h-[1px] bg-border"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Title and description */}
          <div className="text-center mb-16">
            <h2 className="section-title mb-6">
              Powered by Community
            </h2>
            <p className="section-subtitle mx-auto">
              VoltPack thrives on community collaboration. From hardware improvements to software features, 
              our global community of developers, makers, and users drive innovation together.
            </p>
          </div>

          {/* Community stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {communityStats.map((stat, index) => (
              <Card key={index} className="text-center border-0 shadow-elegant">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-pulse-600" />
                  </div>
                  <div className="text-2xl font-bold text-pulse-600 mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Get involved section */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-center mb-8">Get Involved</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {getInvolved.map((item, index) => (
                <Card key={index} className="feature-card hover-lift border-0 shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-pulse-100 rounded-xl flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-pulse-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground text-sm mb-4">{item.description}</p>
                        <Button variant="outline" size="sm" className="text-pulse-600 border-pulse-200 hover:bg-pulse-50">
                          {item.action}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Community highlights */}
          <div className="bg-background rounded-2xl p-8 border">
            <h3 className="text-xl font-semibold mb-6 text-center">Community Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h4 className="font-semibold mb-1">Monthly Challenges</h4>
                <p className="text-sm text-muted-foreground">Build projects and win prizes</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🎓</div>
                <h4 className="font-semibold mb-1">Learning Programs</h4>
                <p className="text-sm text-muted-foreground">Free courses and workshops</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🌍</div>
                <h4 className="font-semibold mb-1">Global Events</h4>
                <p className="text-sm text-muted-foreground">Meetups and conferences worldwide</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;