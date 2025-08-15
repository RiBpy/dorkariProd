"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Slider from "react-slick";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Zoom from "react-medium-image-zoom";
import { Star, Heart, ShoppingCart } from "react-feather";

import { sampleProducts } from "@/components/uiData/data";
import ProductCard from "@/components/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-medium-image-zoom/dist/styles.css";
import {
  addItemToCart,
  updateItemQuantity,
} from "@/helper/redux/cart/cartSlice.js";
import { find } from "lodash";

export default function ProductPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const { productId } = useParams();
  const product = find(sampleProducts, (p) => p.id === productId);
  const cartItem = find(items, (item) => item.id === productId);

  if (!product) return <div className="p-10">Product not found</div>;
  const initialImage =
    product?.images?.[0] || product?.image || "/placeholder.svg";
  const [selectedImage, setSelectedImage] = useState(initialImage);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: Math.min(product.images.length, 4),
    slidesToScroll: 1,
  };

  const handleQuantityChange = (amount) => {
    dispatch(
      updateItemQuantity({
        id: product?.id,
        quantity: (cartItem?.quantity || 1) + amount,
      })
    );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Main Image + Thumbnails */}
        <div>
          <div className="border rounded-lg p-2 mb-4 flex items-center justify-center h-[400px]">
            <Zoom overlayBgColorEnd="rgba(0, 0, 0, 0.8)">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt={product.name}
                width={500}
                height={500}
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </Zoom>
          </div>
          <Slider {...sliderSettings}>
            {product?.images?.map((img, idx) => (
              <div
                key={idx}
                className="px-2 h-[100px] flex items-center justify-center"
              >
                <Image
                  src={img || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${idx + 1}`}
                  width={100}
                  height={100}
                  className={`max-h-full max-w-full object-contain rounded-lg cursor-pointer border ${
                    selectedImage === img
                      ? "border-blue-500"
                      : "border-transparent"
                  }`}
                  onClick={() => setSelectedImage(img)}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="text-3xl font-bold mb-3">{product.name}</h1>

          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < product.rating ? "text-yellow-400" : "text-gray-300"
                }`}
                fill={i < product.rating ? "currentColor" : "none"}
              />
            ))}
            <span className="ml-2 text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          <p className="text-2xl font-semibold text-green-600 mb-4">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-700 mb-6">
            {product.description || "No description available."}
          </p>

          {/* Quantity */}
          <div className="flex items-center mb-6">
            <span className="font-medium mr-3">Quantity:</span>
            <div className="flex items-center border rounded">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-3 py-1"
              >
                -
              </button>
              <span className="px-4">{cartItem?.quantity || 1}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-3 py-1"
              >
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => dispatch(addItemToCart(product))}
              className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
            >
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
              <Heart className="w-5 h-5 text-red-500" /> Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {sampleProducts
            .filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </div>
    </div>
  );
}
