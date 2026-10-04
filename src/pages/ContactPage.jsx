import { useState } from 'react'
import PageHeading from '../components/PageHeading.jsx'
import { business } from '../data/business.js'

function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    event.currentTarget.reset()
    setIsSubmitted(true)
  }

  return (
    <>
      <PageHeading>Contact</PageHeading>
      <section className="page-enter-delay mx-auto mb-16 grid w-full max-w-5xl gap-8 md:grid-cols-2 md:gap-12">
        <div className="space-y-6 rounded-3xl bg-stone-900 p-6 text-orange-50 sm:p-8">
          <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
            Contact details
          </h2>
          <dl className="space-y-5">
            <div className="space-y-1">
              <dt className="text-sm font-medium text-orange-200">Email</dt>
              <dd>
                <a
                  className="break-all text-orange-50 underline decoration-orange-300/60 underline-offset-4 hover:decoration-orange-100"
                  href={`mailto:${business.email}`}
                >
                  {business.email}
                </a>
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-sm font-medium text-orange-200">Phone</dt>
              <dd>
                <a
                  className="text-orange-50 underline decoration-orange-300/60 underline-offset-4 hover:decoration-orange-100"
                  href={`tel:${business.phone}`}
                >
                  {business.phone}
                </a>
              </dd>
            </div>
            <div className="space-y-1">
              <dt className="text-sm font-medium text-orange-200">Address (sample)</dt>
              <dd className="text-orange-50">{business.address}</dd>
            </div>
          </dl>
        </div>

        <form
          className="space-y-5 rounded-3xl border border-orange-100 bg-white p-5 shadow-md shadow-orange-950/5 sm:p-8"
          onSubmit={handleSubmit}
          onChange={() => setIsSubmitted(false)}
        >
          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-800" htmlFor="name">
              Name
            </label>
            <input
              className="min-h-11 w-full rounded-xl border border-orange-200 bg-orange-50/40 px-3 py-2 text-base outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-700/20"
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-800" htmlFor="email">
              Email
            </label>
            <input
              className="min-h-11 w-full rounded-xl border border-orange-200 bg-orange-50/40 px-3 py-2 text-base outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-700/20"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-stone-800" htmlFor="message">
              Message
            </label>
            <textarea
              className="min-h-32 w-full resize-y rounded-xl border border-orange-200 bg-orange-50/40 px-3 py-2 text-base outline-none focus:border-orange-700 focus:ring-2 focus:ring-orange-700/20"
              id="message"
              name="message"
              rows="5"
              required
            />
          </div>

          <button
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-orange-800 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-orange-900/15 hover:bg-orange-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-800"
            type="submit"
          >
            Send message
          </button>

          <p className="text-sm text-stone-500">
            Demo form only. Messages are not sent.
          </p>
          {isSubmitted && (
            <p className="text-sm font-medium text-emerald-800" role="status" aria-live="polite">
              The form was validated locally. No message was sent.
            </p>
          )}
        </form>
      </section>
    </>
  )
}

export default ContactPage
