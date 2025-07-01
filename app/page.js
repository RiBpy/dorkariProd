import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import ProductGrid from "@/components/ProductGrid"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductGrid />
      <Footer />
    </main>
  )
}
