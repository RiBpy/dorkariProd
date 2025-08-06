'use client'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import withAuth from '@/components/withAuth'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductForm from '@/components/ProductForm'
import ProductList from '@/components/ProductList'
import UserList from '@/components/UserList'
import { addProduct, updateProduct } from '@/helper/redux/product/productSlice'

const AdminPage = () => {
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
    <div className="min-h-screen flex flex-col common-in-x">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Product Management</h2>
            <ProductForm onSubmit={handleProductSubmit} product={editingProduct} />
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Product List</h3>
              <ProductList onEdit={setEditingProduct} />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">User Management</h2>
            <UserList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default withAuth(AdminPage, ['admin'])
