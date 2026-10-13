import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart'
import Register from './pages/Register'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
        <Navbar />
      <Routes>
        <Route path='/ ' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Products/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App