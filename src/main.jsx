import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/productContext.jsx'
import { FilterProvider } from './context/FilterContext.jsx'
import { CartProvider } from './context/cartContext.jsx'

createRoot(document.getElementById('root')).render(

  <AppProvider>
    <FilterProvider>
      <CartProvider>
      <App />
      </CartProvider>
    </FilterProvider>
  </AppProvider>
)
