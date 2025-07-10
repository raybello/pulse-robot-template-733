import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  features: string[];
  availability: "in-stock" | "pre-order" | "out-of-stock";
  badge?: string;
}

const ProductCard = ({
  id,
  name,
  slug,
  image,
  price,
  originalPrice,
  rating,
  reviewCount,
  features,
  availability,
  badge
}: ProductCardProps) => {
  const getAvailabilityColor = () => {
    switch (availability) {
      case "in-stock": return "text-green-600";
      case "pre-order": return "text-blue-600";
      case "out-of-stock": return "text-red-600";
      default: return "text-gray-600";
    }
  };

  const getAvailabilityText = () => {
    switch (availability) {
      case "in-stock": return "In Stock";
      case "pre-order": return "Pre-Order";
      case "out-of-stock": return "Out of Stock";
      default: return "";
    }
  };

  return (
    <div className="group relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <Badge className="bg-primary text-white">{badge}</Badge>
        </div>
      )}

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
        <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
      </button>

      {/* Product Image */}
      <Link to={`/products/${slug}`} className="block">
        <div className="aspect-square bg-gray-100 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-4">
        <Link to={`/products/${slug}`}>
          <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center space-x-1 mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">({reviewCount})</span>
        </div>

        {/* Key Features */}
        <ul className="text-sm text-gray-600 mb-3 space-y-1">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-1 h-1 bg-gray-400 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xl font-bold text-gray-900">
            ${price.toLocaleString()}
          </span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        {/* Availability */}
        <div className={`text-sm font-medium mb-3 ${getAvailabilityColor()}`}>
          {getAvailabilityText()}
        </div>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            size="sm"
            variant="outline"
            className="flex-1"
            asChild
          >
            <Link to={`/products/${slug}`}>Learn More</Link>
          </Button>
          <Button
            size="sm"
            className="flex-1"
            disabled={availability === "out-of-stock"}
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            {availability === "pre-order" ? "Pre-Order" : "Add to Cart"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;