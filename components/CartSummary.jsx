'use client'

import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { updateItemQuantity, removeItemFromCart } from '@/helper/redux/cart/cartSlice'

export default function CartSummary() {
  const dispatch = useDispatch()
  const router = useRouter()
  const { items, totalPrice } = useSelector((state) => state.cart)

  return (
    <div className="border rounded-lg p-4">
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-4">
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
              onClick={() => dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity - 1 }))}
              disabled={item.quantity === 1}
            >
              -
            </Button>
            <span className="mx-2">{item.quantity}</span>
            <Button
              size="sm"
              variant="outline"
              onClick={() => dispatch(updateItemQuantity({ id: item.id, quantity: item.quantity + 1 }))}
            >
              +
            </Button>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center font-semibold my-4">
        <span>Total</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
      <Button onClick={() => router.push('/shop')} className="w-full mb-2">Add More Products</Button>
    </div>
  )
}
