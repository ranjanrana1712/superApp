import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Browser from './pages/Browser'
import Info from './pages/Info'
import Selection from './pages/MovieSelection'
import 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browser' element={<Browser />} />
        <Route path='/info' element={<Info />} />
        <Route path='/selection' element={<Selection />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
