/* eslint-disable no-unused-vars */
import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contact from './pages/Contact'
import Home from './pages/Home'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
