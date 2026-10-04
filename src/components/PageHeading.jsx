function PageHeading({ children }) {
  return (
    <section className="page-enter grid min-h-[40vh] place-content-center justify-items-center gap-4 rounded-3xl bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100/80 px-5 py-12 text-center sm:min-h-[48vh] sm:gap-5 sm:py-16">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange-900 sm:text-sm">
        Sample Business / Food
      </p>
      <h1 className="max-w-full text-balance text-4xl font-semibold tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
        {children}
      </h1>
      <span className="h-1.5 w-14 rounded-full bg-orange-700" aria-hidden="true" />
    </section>
  )
}

export default PageHeading
