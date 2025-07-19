"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { heroSlides } from "@/components/uiData/data.jsx"
import { debounce } from "lodash"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const timerRef = useRef(null)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  // Debounced slide change
  const debouncedSlide = debounce(() => {
    if (!isHovered) {
      nextSlide()
    }
    timerRef.current = setTimeout(debouncedSlide, 5000)
  }, 500)

  // Start the auto-slide loop once (manually) on initial render
  if (!timerRef.current) {
    timerRef.current = setTimeout(debouncedSlide, 5000)
  }

  const currentHero = heroSlides[currentSlide]

  return (
    <section
      className="relative overflow-hidden bg-gray-50 common-in-x"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="relative">
          {/* Main Hero Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Text Content */}
            <div className="space-y-6 z-10 relative">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {currentHero.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                {currentHero.description}
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
              >
                BUY NOW
              </Button>
            </div>

            {/* Product Image */}
            <div className="relative">
              <div
                className={cn(
                  "absolute inset-0 rounded-3xl transform rotate-12 scale-110",
                  currentHero.bgColor
                )}
              />
              <div className="relative z-10 flex justify-center">
                <Image
                  src={currentHero.image || "/placeholder.svg"}
                  alt={currentHero.title}
                  className="w-full max-w-md max-h-[400px] object-contain"
                  width={400}
                  height={400}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="sm"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  index === currentSlide ? "bg-orange-500" : "bg-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
