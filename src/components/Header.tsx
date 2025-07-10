import React, { useState } from "react";
import { Search, User, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchExpanded, setSearchExpanded] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };

  const handleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      {/* Parent Layout - Global Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section - Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.svg" alt="VoltPack" className="h-8 w-8" />
            <span className="text-xl font-bold text-gray-900">VoltPack</span>
          </Link>

          {/* Center Section - Main Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
                onClick={() => handleDropdown('products')}
              >
                <span>All Products</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Power Stations</h4>
                      <Link to="/products/voltpack-2000" className="block text-gray-600 hover:text-primary">VoltPack 2000</Link>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Expansion Modules</h4>
                      <Link to="/products/batteries" className="block text-gray-600 hover:text-primary">Batteries</Link>
                      <Link to="/products/solar" className="block text-gray-600 hover:text-primary">Solar Panels</Link>
                      <Link to="/products/accessories" className="block text-gray-600 hover:text-primary">Accessories</Link>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">DIY Kits</h4>
                      <Link to="/products/assembled" className="block text-gray-600 hover:text-primary">Fully Assembled</Link>
                      <Link to="/products/kit" className="block text-gray-600 hover:text-primary">Kit Form</Link>
                      <Link to="/products/pcb" className="block text-gray-600 hover:text-primary">Bare PCB</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
                onClick={() => handleDropdown('explore')}
              >
                <span>Explore</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'explore' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <div className="space-y-2">
                    <Link to="/community" className="block text-gray-600 hover:text-primary">Community Gallery</Link>
                    <Link to="/use-cases" className="block text-gray-600 hover:text-primary">Use Cases</Link>
                    <Link to="/open-source" className="block text-gray-600 hover:text-primary">Open Source Projects</Link>
                    <Link to="/blog" className="block text-gray-600 hover:text-primary">Blog & News</Link>
                    <Link to="/research" className="block text-gray-600 hover:text-primary">Research & Development</Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
                onClick={() => handleDropdown('support')}
              >
                <span>Support</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'support' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <div className="space-y-2">
                    <Link to="/getting-started" className="block text-gray-600 hover:text-primary">Getting Started</Link>
                    <Link to="/docs" className="block text-gray-600 hover:text-primary">Documentation</Link>
                    <Link to="/tutorials" className="block text-gray-600 hover:text-primary">Video Tutorials</Link>
                    <Link to="/forum" className="block text-gray-600 hover:text-primary">Community Forum</Link>
                    <Link to="/contact" className="block text-gray-600 hover:text-primary">Contact Support</Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-primary transition-colors"
                onClick={() => handleDropdown('buy')}
              >
                <span>Where to Buy</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'buy' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg p-4">
                  <div className="space-y-2">
                    <Link to="/store" className="block text-gray-600 hover:text-primary">Online Store</Link>
                    <Link to="/dealers" className="block text-gray-600 hover:text-primary">Authorized Dealers</Link>
                    <Link to="/distributors" className="block text-gray-600 hover:text-primary">International</Link>
                    <Link to="/education" className="block text-gray-600 hover:text-primary">Educational Discounts</Link>
                    <Link to="/bulk" className="block text-gray-600 hover:text-primary">Bulk Orders</Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Section - Search, Profile, Cart */}
          <div className="flex items-center space-x-4">
            <div className={cn(
              "relative transition-all duration-300",
              searchExpanded ? "w-64" : "w-10"
            )}>
              <input
                type="text"
                placeholder="Search products, docs..."
                className={cn(
                  "absolute right-0 top-0 h-10 bg-gray-100 rounded-lg border-0 outline-none transition-all duration-300",
                  searchExpanded ? "w-full px-4 pr-10 opacity-100" : "w-10 px-0 opacity-0"
                )}
                onBlur={() => setSearchExpanded(false)}
              />
              <button
                className="h-10 w-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                onClick={() => setSearchExpanded(!searchExpanded)}
              >
                <Search className="h-5 w-5" />
              </button>
            </div>

            <Link to="/profile" className="h-10 w-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
              <User className="h-5 w-5" />
            </Link>

            <Link to="/cart" className="relative h-10 w-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Mobile menu button */}
            <button
              className="lg:hidden h-10 w-10 flex items-center justify-center text-gray-600"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
            <nav className="p-4 space-y-4">
              <Link to="/products" className="block text-gray-700 hover:text-primary">All Products</Link>
              <Link to="/explore" className="block text-gray-700 hover:text-primary">Explore</Link>
              <Link to="/support" className="block text-gray-700 hover:text-primary">Support</Link>
              <Link to="/buy" className="block text-gray-700 hover:text-primary">Where to Buy</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;