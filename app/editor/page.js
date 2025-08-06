'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import withAuth from '@/components/withAuth'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductForm from '@/components/ProductForm'
import ProductList from '@/components/ProductList'
import { addProduct, updateProduct } from '@/helper/redux/product/productSlice'

const EditorPage = () => {
  const dispatch = useDispatch()
  const [editingProduct, setEditingProduct] = useState(null)

  const handleProductSubmit = (data) => {
    if (editingProduct) {
      dispatch(updateProduct({ id: editingProduct.id, updatedProduct: data }))
    } else {
      dispatch(addProduct({ ...data, id: Date.now() }))
    }
    setEditingProduct(null)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 common-in-x">
        <h1 className="text-2xl font-semibold mb-4">Editor Panel</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">{editingProduct ? 'Edit' : 'Create'} Product</h2>
            <ProductForm onSubmit={handleProductSubmit} product={editingProduct} />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Product List</h2>
            <ProductList onEdit={setEditingProduct} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default withAuth(EditorPage, ['admin', 'editor'])
