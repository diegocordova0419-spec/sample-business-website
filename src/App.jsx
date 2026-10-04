import MainLayout from './layouts/MainLayout.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './pages/CartPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ProductsServicesPage from './pages/ProductsServicesPage.jsx'
import CartProvider from './components/CartProvider.jsx'

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="products-services" element={<ProductsServicesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
