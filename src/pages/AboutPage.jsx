import PageHeading from '../components/PageHeading.jsx'

function AboutPage() {
  return (
    <>
      <PageHeading>About Sample Business</PageHeading>
      <section className="page-enter-delay mx-auto mb-16 grid w-full max-w-5xl gap-5 md:grid-cols-[0.85fr_1.15fr]">
        <div className="flex min-h-64 flex-col justify-between rounded-3xl bg-stone-900 p-7 text-orange-50 sm:p-9">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-200">
            The concept
          </p>
          <p className="mt-12 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Bread, pastry, and lunch.
          </p>
        </div>
        <div className="space-y-4 rounded-3xl border border-orange-100 bg-white p-7 text-base leading-7 text-stone-700 shadow-sm sm:p-9 sm:text-lg">
          <h2 className="text-xl font-semibold tracking-tight text-stone-950 sm:text-2xl">
            About Sample Business
          </h2>
          <p>
            Sample Business is a food-business concept for this portfolio demo.
          </p>
          <p>
            Its example menu brings together bread, pastries, and a lunch option.
            The menu is illustrative and can be updated with confirmed offerings.
          </p>
        </div>
      </section>
    </>
  )
}

export default AboutPage
