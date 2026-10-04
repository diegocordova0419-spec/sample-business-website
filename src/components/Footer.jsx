import { business } from '../data/business.js'

function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-950 text-orange-50">
      <div className="mx-auto flex min-h-24 max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="font-semibold tracking-tight">
          {business.name}
        </p>
        <p className="text-sm text-orange-100/80">
          Built with React, Vite, and Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}

export default Footer
