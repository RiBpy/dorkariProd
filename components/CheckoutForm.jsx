'use client'

import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export default function CheckoutForm() {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data)
    // Handle form submission
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 common-in-x">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register('name', { required: true })} />
        {errors.name && <p className="text-red-500 text-sm mt-1">Name is required</p>}
      </div>
      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" {...register('phone', { required: true })} />
        {errors.phone && <p className="text-red-500 text-sm mt-1">Phone is required</p>}
      </div>
      <div>
        <Label htmlFor="address">Address</Label>
        <Textarea id="address" {...register('address', { required: true })} />
        {errors.address && <p className="text-red-500 text-sm mt-1">Address is required</p>}
      </div>
      <div>
        <Label htmlFor="otherContact">Other Contact Number</Label>
        <Input id="otherContact" {...register('otherContact')} />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" {...register('email')} />
      </div>
      <div>
        <Label htmlFor="comments">Comments</Label>
        <Textarea id="comments" {...register('comments')} />
      </div>
      <Button type="submit" className="w-full">Place Order</Button>
    </form>
  )
}
