import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductNavigation from "@/components/ProductNavigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Share2, Star, Plus, Minus, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Mock product data
  const product = {
    id: "1",
    name: "VoltPack 2000W UPS Inverter",
    slug: "voltpack-2000",
    price: 2499,
    originalPrice: 2799,
    rating: 4.8,
    reviewCount: 147,
    availability: "in-stock",
    images: [
      "/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png",
      "/lovable-uploads/af412c03-21e4-4856-82ff-d1a975dc84a9.png",
      "/lovable-uploads/5663820f-6c97-4492-9210-9eaa1a8dc415.png",
      "/lovable-uploads/dc13e94f-beeb-4671-8a22-0968498cdb4c.png"
    ],
    keySpecs: [
      "2000W Continuous Output",
      "2048Wh LiFePO4 Battery",
      "Pure Sine Wave Output",
      "Multiple Port Types",
      "Open Source Hardware"
    ],
    description: "The VoltPack 2000W UPS Inverter represents the future of portable power - completely open source, fully modular, and community-driven. With 2000W of continuous output and 2048Wh of capacity, it's perfect for off-grid living, emergency backup, or powering your next project.",
    configurations: [
      { name: "Fully Assembled", price: 2499, description: "Ready to use out of the box" },
      { name: "Kit Form", price: 1899, description: "Assembly required - educational value" },
      { name: "Bare PCB", price: 899, description: "For advanced users only" }
    ]
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen">
      <Header />
      <ProductNavigation 
        productName={product.name}
        productSlug={product.slug}
        basePrice={product.price}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image Thumbnails */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-green-100 text-green-800">In Stock</Badge>
                <Badge className="bg-blue-100 text-blue-800">Open Source</Badge>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price.toLocaleString()}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
                <Badge className="bg-red-100 text-red-800">
                  Save ${(product.originalPrice - product.price).toLocaleString()}
                </Badge>
              </div>
            </div>

            {/* Key Specifications */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Specifications</h3>
              <ul className="space-y-2">
                {product.keySpecs.map((spec, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Configuration Options */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Configuration</h3>
              <div className="space-y-2">
                {product.configurations.map((config, index) => (
                  <div
                    key={index}
                    className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                      index === 0 ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{config.name}</span>
                        <p className="text-sm text-gray-600">{config.description}</p>
                      </div>
                      <span className="font-semibold">${config.price.toLocaleString()}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={decrementQuantity}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                  <button
                    onClick={incrementQuantity}
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button size="lg" className="flex-1">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart - ${(product.price * quantity).toLocaleString()}
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <div className="text-sm text-gray-600">
                Free shipping on orders over $2,000 • 30-day return policy • 2-year warranty
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="documentation">Documentation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="prose max-w-none">
                <h3>Product Overview</h3>
                <p>{product.description}</p>
                <h4>What's Included</h4>
                <ul>
                  <li>VoltPack 2000W UPS Inverter Unit</li>
                  <li>AC Charging Cable</li>
                  <li>User Manual & Quick Start Guide</li>
                  <li>USB-C to USB-C Cable</li>
                  <li>2-Year Warranty Card</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="specifications" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">Power Specifications</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Continuous Output:</span>
                      <span>2000W</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Peak Output:</span>
                      <span>4000W (30 seconds)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Battery Capacity:</span>
                      <span>2048Wh (51.2V, 40Ah)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Physical Specifications</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Dimensions:</span>
                      <span>18" × 12" × 10"</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Weight:</span>
                      <span>45 lbs (20.4 kg)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Operating Temp:</span>
                      <span>-10°C to 50°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold">{product.rating}</div>
                  <div className="flex justify-center items-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-gray-600">Based on {product.reviewCount} reviews</div>
                </div>
                {/* Add more review content here */}
              </div>
            </TabsContent>
            
            <TabsContent value="documentation" className="mt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-3">User Documentation</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-primary hover:underline">User Manual (PDF)</a>
                    <a href="#" className="block text-primary hover:underline">Quick Start Guide</a>
                    <a href="#" className="block text-primary hover:underline">Safety Instructions</a>
                    <a href="#" className="block text-primary hover:underline">Warranty Information</a>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Technical Documentation</h4>
                  <div className="space-y-2">
                    <a href="#" className="block text-primary hover:underline">Circuit Schematics</a>
                    <a href="#" className="block text-primary hover:underline">PCB Layout Files</a>
                    <a href="#" className="block text-primary hover:underline">3D CAD Models</a>
                    <a href="#" className="block text-primary hover:underline">Firmware Source Code</a>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;