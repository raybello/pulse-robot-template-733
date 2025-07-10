import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductNavigationProps {
  productName: string;
  productSlug: string;
  basePrice: number;
}

const ProductNavigation = ({ productName, productSlug, basePrice }: ProductNavigationProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: "Accessories", path: `/products/${productSlug}/accessories`, badge: 12 },
    { label: "Compare", path: `/products/${productSlug}/compare` },
    { label: "Specs", path: `/products/${productSlug}/specs` },
    { label: "Downloads", path: `/products/${productSlug}/downloads` },
    { label: "FAQ", path: `/products/${productSlug}/faq` },
  ];

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Left Section - Product Name */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-sm text-gray-500 hover:text-gray-700">Home</Link>
            <span className="text-gray-300">/</span>
            <Link to="/products" className="text-sm text-gray-500 hover:text-gray-700">Products</Link>
            <span className="text-gray-300">/</span>
            <span className="text-sm font-medium text-gray-900">{productName}</span>
          </div>

          {/* Right Section - Navigation */}
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative flex items-center space-x-1 text-sm transition-colors py-4",
                  currentPath === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-gray-600 hover:text-gray-900"
                )}
              >
                <span>{item.label}</span>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}

            {/* Buy Now CTA */}
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              Buy Now - From ${basePrice.toLocaleString()}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductNavigation;