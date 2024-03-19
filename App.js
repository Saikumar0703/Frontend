import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Cart_1 from './Components/Cart_1'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart_1/>}/>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}
