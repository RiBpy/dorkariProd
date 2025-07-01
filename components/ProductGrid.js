import ProductCard from "./ProductCard"

const sampleProducts = [
  {
    id: 1,
    name: "QCY HT10 AilyBuds Pro",
    price: 79.99,
    originalPrice: 99.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 124,
    onSale: true,
  },
  {
    id: 2,
    name: "QCY T13 ANC",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviews: 89,
    onSale: false,
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
  },
  {
    id: 4,
    name: "QCY T5 Pro",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4,
    reviews: 203,
    onSale: false,
  },
  {
    id: 5,
    name: "QCY T1C",
    price: 29.99,
    originalPrice: 39.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 3,
    reviews: 67,
    onSale: true,
  },
  {
    id: 6,
    name: "QCY L2 ANC",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
    rating: 5,
    reviews: 45,
    onSale: false,
  },
]

export default function ProductGrid() {
  return (
    <section className="py-16 bg-white common-in-x">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our latest collection of premium wireless earbuds and audio accessories
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sampleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
