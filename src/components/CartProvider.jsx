import { useState } from 'react'
import { CartContext } from '../lib/CartContext.js'

function CartProvider({ children }) {
  const [items, setItems] = useState([])

  function addToCart(product) {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id)

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...currentItems, { ...product, quantity: 1 }]
    })
  }

  function setQuantity(productId, quantity) {
    if (quantity < 1) {
      setItems((currentItems) =>
        currentItems.filter((item) => item.id !== productId),
      )
      return
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item,
      ),
    )
  }

  function removeFromCart(productId) {
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId),
    )
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0)
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{ items, itemCount, subtotal, addToCart, setQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
