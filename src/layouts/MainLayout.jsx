import Footer from '../components/Footer.jsx'
import Navbar from '../components/Navbar.jsx'
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffaf3] text-stone-900">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
