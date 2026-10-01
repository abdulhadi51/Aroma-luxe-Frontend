import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/HeaderFooter/Header'
import Footer from './components/HeaderFooter/Footer'
import Home from './components/Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './components/Pages/Product'
import Contact from './components/Pages/Contact'
import Hooks from './components/Pages/Hooks'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Checkout from './components/Pages/Checkout'

function App() {
 

  return (
    <>

      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>


     
      
     
    </>
  )
}

export default App
