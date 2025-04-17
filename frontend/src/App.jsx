import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className='relative w-screen h-full min-h-screen text-text bg-background font-poppins'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path={"/"} element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
    
  )
}

export default App