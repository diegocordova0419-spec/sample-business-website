import { Link } from 'react-router-dom'
import PageHeading from '../components/PageHeading.jsx'
import useCart from '../hooks/useCart.js'
import { formatPrice } from '../lib/formatPrice.js'

function CartPage() {
  const { items, subtotal, setQuantity, removeFromCart } = useCart()

  return (
    <>
      <PageHeading>Your cart</PageHeading>
      <section className="page-enter-delay mx-auto mb-16 w-full max-w-4xl rounded-3xl border border-orange-100 bg-white p-5 shadow-sm sm:p-8">
        {items.length === 0 ? (
          <div className="space-y-5 py-4 text-center">
            <p className="text-lg text-stone-600">Your cart is empty.</p>
            <Link
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-orange-800 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 motion-reduce:transition-none"
              to="/products-services"
            >
              Browse the menu
            </Link>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-orange-100">
              {items.map((item) => (
                <li
                  className="flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between"
                  key={item.id}
                >
                  <div>
                    <h2 className="font-semibold text-stone-950">{item.name}</h2>
                    <p className="mt-1 text-sm text-stone-600">
                      {formatPrice(item.price)} each
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-4 sm:justify-end">
                    <div className="flex items-center gap-2">
                      <button
                        aria-label={`Decrease ${item.name} quantity`}
                        className="grid size-11 place-items-center rounded-full border border-orange-200 text-lg font-medium text-stone-900 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 disabled:cursor-not-allowed disabled:opacity-40"
                        disabled={item.quantity === 1}
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        type="button"
                      >
                        &minus;
                      </button>
                      <span aria-live="polite" className="min-w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        aria-label={`Increase ${item.name} quantity`}
                        className="grid size-11 place-items-center rounded-full border border-orange-200 text-lg font-medium text-stone-900 hover:bg-orange-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                        type="button"
                      >
                        +
                      </button>
                    </div>
                    <p className="min-w-20 text-right font-semibold text-stone-950">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    <button
                      className="min-h-11 rounded-full px-3 text-sm font-medium text-orange-900 underline underline-offset-4 hover:text-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
                      onClick={() => removeFromCart(item.id)}
                      type="button"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex items-center justify-between border-t border-orange-200 pt-5 text-lg">
              <span className="font-semibold text-stone-950">Subtotal</span>
              <span className="font-bold text-stone-950">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-3 text-right text-sm text-stone-600">
              Illustrative prices in USD. No checkout is connected.
            </p>
          </>
        )}
      </section>
    </>
  )
}

export default CartPage
