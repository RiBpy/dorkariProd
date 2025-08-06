'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function ProductForm({ onSubmit, product = {} }) {
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: product })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
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
        <Label htmlFor="image">Product Image</Label>
        <Input
          id="image"
          type="file"
          accept="image/*"
          {...register('image', {
            required: !product?.image, // Required only if no existing image
            onChange: async (e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  // Store base64 string or handle upload to a service
                  // For now, we'll just set it to the form value
                  e.target.value = reader.result; // This won't work directly with react-hook-form register
                };
                reader.readAsDataURL(file);
              }
            },
          })}
        />
        {errors.image && <p className="text-red-500 text-sm mt-1">Product image is required</p>}
        {product?.image && (
          <div className="mt-2">
            <img src={product.image} alt="Current Product" className="w-24 h-24 object-cover rounded" />
          </div>
        )}
      </div>
      <div>
        <Label htmlFor="discountPrice">Discount Price (Optional)</Label>
        <Input id="discountPrice" type="number" step="0.01" {...register('discountPrice', { valueAsNumber: true })} />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" {...register('description')} />
      </div>
      <Button type="submit" className="w-full">{product?.id ? 'Update' : 'Create'} Product</Button>
    </form>
  )
}