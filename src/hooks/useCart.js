import { useContext } from 'react'
import { CartContext } from '../lib/CartContext.js'

function useCart() {
  const cart = useContext(CartContext)

  if (cart === null) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return cart
}

export default useCart
