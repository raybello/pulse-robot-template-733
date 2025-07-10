import React from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: "1",
      name: "VoltPack 2000W UPS Inverter",
      slug: "voltpack-2000",
      image: "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      price: 2499,
      originalPrice: 2799,
      rating: 4.8,
      reviewCount: 147,
      features: [
        "2000W Continuous Output",
        "2048Wh LiFePO4 Battery",
        "100% Open Source"
      ],
      availability: "in-stock" as const,
      badge: "Best Seller"
    },
    {
      id: "2", 
      name: "VoltPack 2000 - Kit Form",
      slug: "voltpack-2000-kit",
      image: "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      price: 1899,
      rating: 4.6,
      reviewCount: 89,
      features: [
        "Complete Assembly Kit",
        "Step-by-step Instructions",
        "Educational Value"
      ],
      availability: "in-stock" as const
    },
    {
      id: "3",
      name: "Solar Expansion Module",
      slug: "solar-expansion-1200w",
      image: "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
      price: 899,
      rating: 4.7,
      reviewCount: 73,
      features: [
        "1200W MPPT Controller",
        "Weather Resistant",
        "Plug & Play Design"
      ],
      availability: "pre-order" as const,
      badge: "New"
    },
    {
      id: "4",
      name: "Battery Expansion Pack",
      slug: "battery-expansion-2kWh",
      image: "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png",
      price: 1299,
      rating: 4.9,
      reviewCount: 56,
      features: [
        "2048Wh Additional Capacity",
        "Hot-Swappable Design",
        "BMS Integration"
      ],
      availability: "in-stock" as const
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of open-source power solutions, from fully assembled units to DIY kits and expansion modules.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <a 
            href="/products"
            className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;