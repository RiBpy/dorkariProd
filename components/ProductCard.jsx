"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { cn } from "@/lib/utils";
import {
  addItemToCart,
} from "@/helper/redux/cart/cartSlice.js";
import { addItemToWishlist } from "@/helper/redux/wishlist/wishlistSlice";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductCard({ product, viewMode = "grid" }) {
  const [isHovered, setIsHovered] = useState(false);
  const listView = viewMode === "list";
  const dispatch = useDispatch();
  const wishlisted = useSelector((state) =>
    state.wishlist.items.find((item) => item.id === product.id)
  );

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addItemToCart(product));
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    dispatch(addItemToWishlist(product));
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent
        className={cn("p-4", listView ? "flex items-center" : "flex flex-col")}
      >
        <Link href={`/shop/${product.id}`} passHref>
          <div className="relative">
            {/* Product Image Slider */}
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <Slider {...sliderSettings}>
                {product?.images?.map((img, index) => (
                  <div key={index}>
                    <Image
                      src={img || "/placeholder.svg"}
                      alt={`${product.name} - ${index}`}
                      className={cn(
                        "transition-transform duration-300 group-hover:scale-105 object-cover",
                        listView ? "max-w-[300px] max-h-[300px]" : "w-full h-full"
                      )}
                      width={300}
                      height={300}
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Hover Overlay */}
            <div
              className={cn(
                "absolute inset-0 bg-black/40 flex items-center justify-center space-x-4 transition-opacity duration-300",
                isHovered ? "opacity-100" : "opacity-0"
              )}
            >
              <Button
                size="sm"
                className="bg-white text-black hover:bg-gray-100"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="bg-white/90 border-white hover:bg-white"
                onClick={handleAddToWishlist}
              >
                <Heart
                  className={cn(
                    "h-4 w-4",
                    wishlisted ? "fill-red-500 text-red-500" : ""
                  )}
                />
              </Button>
            </div>

            {/* Sale Badge */}
            {product.onSale && (
              <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
                SALE
              </div>
            )}
          </div>
        </Link>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < product.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  )}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">
              ({product.reviews})
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

