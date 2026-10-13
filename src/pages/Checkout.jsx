<<<<<<< HEAD
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Checkout() {
  const { total, clearCart } = useCart()
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.address || !form.city || !form.phone) {
      setError('All fields are required')
      return
    }
    alert('Order placed')
    clearCart()
    navigate('/')
  }

  return (
    <>
    <div className="max-w-md mx-auto py-8 px-4">
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Total: ${total.toFixed(2)}</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              name="name"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
            />
            <Input
              name="address"
              placeholder="Address"
              value={form.address}
              onChange={handleChange}
            />
            <Input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
            />
            <Input
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <Button type="submit" className="w-full">
              Place order
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </>
  )
}
=======
import React from 'react'

function Checkout() {
  return (
    <div>Checkout</div>
  )
}

export default Checkout
>>>>>>> 98086f333882796b3a7b32149d65511101fd7571
