import { useEffect, useState } from 'react'
import { CartContext } from '../lib/CartContext.js'

function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('shopping-cart')

      if (!savedCart) {
        return []
      }

      const parsedCart = JSON.parse(savedCart)
      const isValidCart =
        Array.isArray(parsedCart) &&
        parsedCart.every(
          (item) =>
            item &&
            typeof item.id === 'string' &&
            typeof item.name === 'string' &&
            Number.isFinite(item.price) &&
            Number.isFinite(item.quantity) &&
            item.quantity > 0,
        )

      return isValidCart ? parsedCart : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('shopping-cart', JSON.stringify(items))
    } catch {
      // Ignore storage errors so they do not prevent the cart from working.
    }
  }, [items])

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
