import { Link } from 'react-router-dom'
import PageHeading from '../components/PageHeading.jsx'

function HomePage() {
  return (
    <>
      <PageHeading>Food for the everyday.</PageHeading>
      <section className="page-enter-delay mx-auto mt-6 mb-16 flex w-full max-w-4xl flex-col items-center gap-6 rounded-3xl border border-orange-100 bg-white px-6 py-8 text-center shadow-md shadow-orange-950/5 sm:px-10 sm:py-10">
        <p className="max-w-xl text-base leading-7 text-stone-600 sm:text-lg">
          Explore the Sample Business menu of bread, pastries, and a lunch option.
        </p>
        <ul className="flex flex-wrap justify-center gap-2" aria-label="Menu categories">
          <li className="rounded-full bg-amber-100 px-4 py-2 text-sm font-medium text-amber-950">Bread</li>
          <li className="rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-950">Pastry</li>
          <li className="rounded-full bg-lime-100 px-4 py-2 text-sm font-medium text-lime-950">Lunch</li>
        </ul>
        <div className="flex flex-wrap justify-center gap-3 pt-1">
          <Link
            to="/products-services"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-800 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 motion-reduce:transition-none"
          >
            Explore the menu
          </Link>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-sm font-semibold text-orange-950 transition-colors hover:bg-orange-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800 motion-reduce:transition-none"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  )
}

export default HomePage
