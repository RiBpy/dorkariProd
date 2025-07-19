import ProductCard from "./ProductCard"

const sampleProducts = [
  {
    id: 1,
    name: "QCY HT10 AilyBuds Pro",
    price: 79.99,
    originalPrice: 99.99,
    image: "/images/c3.png",
    rating: 5,
    reviews: 124,
    onSale: true,
  },
  {
    id: 2,
    name: "QCY T13 ANC",
    price: 59.99,
    image: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-dfe7e.appspot.com/o/images%2F1662030119710-c2.png?alt=media&token=2c482b4e-d81b-4a27-9e70-a55d87a020ba",
    rating: 4,
    reviews: 89,
    onSale: false,
  },
  {
    id: 3,
    name: "QCY T17 Sport",
    price: 49.99,
    originalPrice: 69.99,
    image: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-dfe7e.appspot.com/o/images%2F1662406275200-r3.png?alt=media&token=840b320f-3146-43e1-ab72-90f25bb2a205",
    rating: 4,
    reviews: 156,
    onSale: true,
  },
  {
    id: 4,
    name: "QCY T5 Pro",
    price: 39.99,
    image: "/images/i1.png",
    rating: 4,
    reviews: 203,
    onSale: false,
  },
  {
    id: 5,
    name: "QCY T1C",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-dfe7e.appspot.com/o/images%2F1662030336619-r2.png?alt=media&token=828a72b6-cfee-4125-bd8f-4754f81cbfe5",
    rating: 3,
    reviews: 67,
    onSale: true,
  },
  {
    id: 6,
    name: "QCY L2 ANC",
    price: 89.99,
    image: "https://firebasestorage.googleapis.com/v0/b/restaurantapp-dfe7e.appspot.com/o/images%2F1662030505579-fi2.png?alt=media&token=82e61aea-2aaf-4331-a4c4-689ed56e77c6",
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
