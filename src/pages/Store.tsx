import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/store/HeroSection";
import FeaturedProducts from "@/components/store/FeaturedProducts";
import ValuePropositions from "@/components/store/ValuePropositions";
import CommunityShowcase from "@/components/store/CommunityShowcase";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Store = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturedProducts />
        <ValuePropositions />
        <CommunityShowcase />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Store;