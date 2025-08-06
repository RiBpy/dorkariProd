'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ProductForm({ onSubmit, product = {} }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: product })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Label htmlFor="name">Product Name</Label>
        <Input id="name" {...register('name', { required: true })} />
        {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
      </div>
      <div>
        <Label htmlFor="price">Price</Label>
        <Input id="price" type="number" step="0.01" {...register('price', { required: true, valueAsNumber: true })} />
        {errors.price && <p className="text-red-500 text-sm mt-1">Price is required</p>}
      </div>
      <div>
        <Label htmlFor="image">Image URL</Label>
        <Input id="image" {...register('image', { required: true })} />
        {errors.image && <p className="text-red-500 text-sm mt-1">Image URL is required</p>}
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register('description')} />
      </div>
      <Button type="submit" className="w-full">{product?.id ? 'Update' : 'Create'} Product</Button>
    </form>
  )
}