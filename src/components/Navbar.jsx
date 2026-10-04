import { NavLink } from 'react-router-dom'
import { business } from '../data/business.js'
import { navigationItems } from '../data/navigation.js'
import useCart from '../hooks/useCart.js'

function Navbar() {
  const { itemCount } = useCart()

  return (
    <header className="border-b border-orange-100 bg-[#fffaf3]">
      <nav
        className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-1 px-4 py-3 sm:flex sm:min-h-16 sm:flex-wrap sm:items-center sm:justify-end sm:px-6 sm:py-2 lg:px-8"
        aria-label="Main navigation"
      >
        <NavLink
          to="/"
          end
          className="col-span-2 flex min-h-11 items-center justify-center gap-2 px-3 text-base font-semibold tracking-tight text-stone-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 sm:mr-auto sm:col-span-1 sm:justify-self-start"
        >
          <span aria-hidden="true" className="size-3 rounded-full bg-orange-700 ring-4 ring-orange-200" />
          {business.name}
        </NavLink>
        {navigationItems.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            aria-label={
              to === '/cart'
                ? `Cart, ${itemCount} ${itemCount === 1 ? 'item' : 'items'}`
                : undefined
            }
            className={({ isActive }) =>
              `flex min-h-11 items-center justify-center rounded-full px-3 py-2 text-center text-sm font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-700 ${
                isActive
                  ? 'bg-orange-100 text-orange-950'
                  : 'text-stone-600 hover:bg-orange-50 hover:text-stone-950'
              }`
            }
          >
            {label}
            {to === '/cart' && (
              <span className="ml-1 grid min-w-5 place-items-center rounded-full bg-orange-200 px-1.5 text-xs text-orange-950">
                {itemCount}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Navbar
