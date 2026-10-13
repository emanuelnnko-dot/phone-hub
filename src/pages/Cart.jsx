import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

function Cart() {
  const { cart, removeFromCart, updateQuantity, total } = useCart()

  if (cart.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="mb-4">Your cart is empty</p>
        <Link to="/products">
          <Button>Browse products</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-semibold mb-6">Cart</h1>
      <div className="space-y-3">
        {cart.map((item) => (
          <Card key={item.id}>
            <CardContent className="flex items-center justify-between p-4">
              <div>
                <p className="font-medium">{item.title || item.name}</p>
                <p className="text-sm text-muted-foreground">${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <span className="w-6 text-center">{item.quantity}</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between">
        <p className="text-lg font-medium">Total: ${total.toFixed(2)}</p>
        <Link to="/checkout">
          <Button>Checkout</Button>
        </Link>
      </div>
    </div>
  )
}
export default Cart