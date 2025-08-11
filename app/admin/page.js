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
import Dashboard from '../../components/Dashboard'

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
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 common-in-x">
        <h1 className="text-2xl font-semibold mb-4">Admin Panel</h1>
       <Dashboard/>
      </main>
      <Footer />
    </div>
  )
}

export default withAuth(AdminPage, ['admin'])
