import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, MapPin, Calendar } from "lucide-react";

const CommunityShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "Off-Grid Cabin Power System",
      user: "Alex M.",
      location: "Montana, USA",
      date: "2 weeks ago",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      description: "Complete off-grid setup with 4x VoltPack units and solar array.",
      tags: ["Off-Grid", "Solar", "Cabin"]
    },
    {
      id: 2,
      title: "Emergency Response Kit",
      user: "Sarah K.",
      location: "California, USA",
      date: "1 month ago", 
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      description: "Mobile emergency power for disaster relief operations.",
      tags: ["Emergency", "Mobile", "Relief"]
    },
    {
      id: 3,
      title: "Maker Space Power Hub",
      user: "TechLab Co.",
      location: "Berlin, Germany",
      date: "3 weeks ago",
      image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
      description: "Central power distribution for 3D printers and workstations.",
      tags: ["Makerspace", "Workshop", "3D Printing"]
    },
    {
      id: 4,
      title: "Food Truck Power Solution",
      user: "Mike's Kitchen",
      location: "Austin, Texas",
      date: "5 days ago",
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
      description: "Silent power for food truck operations at events.",
      tags: ["Food Truck", "Events", "Business"]
    },
    {
      id: 5,
      title: "Research Station Antarctica",
      user: "PolarTech Research",
      location: "Antarctica",
      date: "6 months ago",
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      description: "Extreme weather testing and scientific equipment power.",
      tags: ["Research", "Extreme Weather", "Science"]
    },
    {
      id: 6,
      title: "RV Travel Setup",
      user: "The Wanderers",
      location: "Cross-Country",
      date: "2 months ago",
      image: "/lovable-uploads/22d31f51-c174-40a7-bd95-00e4ad00eaf3.png",
      description: "Full RV conversion with VoltPack and custom modules.",
      tags: ["RV", "Travel", "Van Life"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Community Showcase
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our community is using VoltPack systems around the world. From off-grid cabins to research stations, VoltPack powers innovation everywhere.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`break-inside-avoid bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                index % 3 === 0 ? 'lg:mt-0' : index % 3 === 1 ? 'lg:mt-8' : 'lg:mt-16'
              }`}
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <span>by {project.user}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>{project.date}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <MapPin className="h-3 w-3" />
                  <span>{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-primary hover:bg-primary/90">
            <ExternalLink className="mr-2 h-4 w-4" />
            Share Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunityShowcase;