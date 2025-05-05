import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/generalComponents/Navbar'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Discover from './pages/Discover'
import Profile from './pages/profile'
import React from 'react'
import Notifications from './pages/Notifications'

function App() {

  const [isSignedIn, setIsSignedIn] = useState(true)
  
  const handleIsSignedIn = () => {
    setIsSignedIn(true)
  }

  return (
    <div className='relative flex flex-col w-screen h-full min-h-screen lg:py-16 text-anti-flash-white bg-rich-black font-poppins scrollbar_hidden'>
      <BrowserRouter>
        <Navbar
          isSignedIn={isSignedIn}
        />
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/Shop'} element={<Shop/>}></Route>
          <Route path={'/Discover'} element={<Discover/>}></Route>
          <Route path={'/Profile'} element={<Profile/>}></Route>
          <Route path={'/Notifications'} element={<Notifications/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  )
}

export default App
