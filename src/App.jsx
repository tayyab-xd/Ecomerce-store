import { useState } from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import AllProducts from './pages/AllProducts'
import SingleProduct from './pages/SingleProduct'
import Error from './pages/Error'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<AllProducts/>}/>
        <Route path='/singleproduct/:id' element={<SingleProduct/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      {/* <Footer/> */}
     </BrowserRouter>
    </>
  )
}

export default App
