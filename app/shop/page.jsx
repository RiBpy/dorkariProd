"use client"

import { useState } from "react"
import { Search, Grid, List } from "lucide-react"
import Header from "@/components/Header"
import Footer from "@/components/Footer.jsx"
import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const allProducts = [
  {
    id: 1,
    name: "QCY HT10 AilyBuds Pro",
    price: 79.99,
    originalPrice: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 124,
    onSale: true,
    category: "earbuds",
  },
  {
    id: 2,
    name: "QCY T13 ANC",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviews: 89,
    onSale: false,
    category: "earbuds",
  },
  {
    id: 3,
    name: "QCY T17 Sport",
    price: 49.99,
    originalPrice: 69.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviews: 156,
    onSale: true,
    category: "sport",
  },
  {
    id: 4,
    name: "QCY T5 Pro",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviews: 203,
    onSale: false,
    category: "earbuds",
  },
  {
    id: 5,
    name: "QCY L2 ANC Headphones",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 45,
    onSale: false,
    category: "headphones",
  },
  {
    id: 6,
    name: "QCY T1C",
    price: 29.99,
    originalPrice: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 3,
    reviews: 67,
    onSale: true,
    category: "earbuds",
  },
  {
    id: 7,
    name: "QCY H3 ANC Over-Ear",
    price: 129.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 78,
    onSale: false,
    category: "headphones",
  },
  {
    id: 8,
    name: "QCY T20 Gaming",
    price: 69.99,
    originalPrice: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviews: 92,
    onSale: true,
    category: "gaming",
  },
]

const categories = [
  { value: "all", label: "All Products" },
  { value: "earbuds", label: "Earbuds" },
  { value: "headphones", label: "Headphones" },
  { value: "sport", label: "Sport" },
  { value: "gaming", label: "Gaming" },
]

export default function ShopPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")
  const [viewMode, setViewMode] = useState("grid")

  const filteredProducts = allProducts
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        default:
          return a.name.localeCompare(b.name)
      }
    })

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 animate-fade-in">Our Shop</h1>
          <p className="text-xl opacity-90 animate-fade-in-delay">Discover Premium Audio Products</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 animate-slide-up">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* View Mode */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
          </p>
        </div>

        <div
          className={`grid gap-6 ${
            viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {filteredProducts.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} viewMode={viewMode} />
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
