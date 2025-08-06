'use client'

import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@/components/ui/button'
import { deleteProduct } from '@/helper/redux/product/productSlice'

export default function ProductList({ onEdit }) {
  const dispatch = useDispatch()
  const { products } = useSelector((state) => state.products)

  return (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
          <div>
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-gray-500">${product.price}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button size="sm" variant="outline" onClick={() => onEdit(product)}>Edit</Button>
            <Button size="sm" variant="destructive" onClick={() => dispatch(deleteProduct(product.id))}>Delete</Button>
          </div>
        </div>
      ))}
    </div>
  )
}