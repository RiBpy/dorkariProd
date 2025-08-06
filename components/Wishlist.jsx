'use client'

import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { X, ShoppingCart } from 'lucide-react'
import { addItemToCart } from '@/helper/redux/cart/cartSlice'
import { removeItemFromWishlist } from '@/helper/redux/wishlist/wishlistSlice'

export default function Wishlist({ onClose }) {
  const dispatch = useDispatch()
  const router = useRouter()
  const { items } = useSelector((state) => state.wishlist)
  const wishlistRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wishlistRef.current && !wishlistRef.current.contains(event.target)) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClose])

  const handleAddToCart = (item) => {
    dispatch(addItemToCart(item))
    dispatch(removeItemFromWishlist(item.id))
  }

  const handleCheckout = (item) => {
    dispatch(addItemToCart(item))
    onClose()
    router.push('/checkout')
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50">
      <div ref={wishlistRef} className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg z-50 flex flex-col">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold">Your Wishlist</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <svg
              className="w-24 h-24 text-gray-300 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <p className="text-gray-500">Your wishlist is empty</p>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4">
            {items.map((item) => (
              <div key={item.id} >
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button
                    size="sm"
                    className="ml-2"
                    onClick={() => handleCheckout(item)}
                  >
                    Checkout
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="ml-2 text-red-500"
                    onClick={() => dispatch(removeItemFromWishlist(item.id))}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
