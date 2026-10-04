import PageHeading from '../components/PageHeading.jsx'
import { products } from '../data/products.js'
import { formatPrice } from '../lib/formatPrice.js'
import useCart from '../hooks/useCart.js'

function ProductsServicesPage() {
  const { addToCart } = useCart()

  return (
    <>
      <PageHeading>Products &amp; Services</PageHeading>
      <section className="page-enter-delay pb-16" aria-labelledby="menu-heading">
        <h2
          className="mb-6 text-xl font-semibold tracking-tight text-stone-950 sm:text-2xl"
          id="menu-heading"
        >
          Example menu
        </h2>
        <p className="-mt-4 mb-6 text-sm text-stone-600">
          Sample prices in USD.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <li
              key={product.id}
              className="flex min-h-56 flex-col rounded-2xl border border-orange-100 bg-white p-5 shadow-sm transition duration-200 hover:border-orange-200 hover:bg-orange-50/50 hover:shadow-md motion-reduce:transition-none sm:p-6"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="grid size-11 place-items-center rounded-full bg-orange-200/70 text-sm font-semibold text-orange-950">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-900">
                  {product.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold tracking-tight text-stone-950 sm:text-xl">
                {product.name}
              </h3>
              <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                <p className="text-lg font-semibold text-stone-950">
                  {formatPrice(product.price)}
                </p>
                <button
                  className="min-h-11 rounded-full bg-orange-800 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 motion-reduce:transition-none"
                  type="button"
                  onClick={() => addToCart(product)}
                >
                  Add to cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export default ProductsServicesPage
