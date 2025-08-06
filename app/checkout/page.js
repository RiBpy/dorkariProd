'use client'

import { useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CheckoutForm from '@/components/CheckoutForm'
import CartSummary from '@/components/CartSummary'

export default function CheckoutPage() {
  const router = useRouter()
  const { items } = useSelector((state) => state.cart)

  if (items.length === 0) {
    if (typeof window !== 'undefined') {
      router.push('/shop')
    }
    return null
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h1 className="text-2xl font-semibold mb-4">Checkout</h1>
            <CheckoutForm />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
            <CartSummary />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
