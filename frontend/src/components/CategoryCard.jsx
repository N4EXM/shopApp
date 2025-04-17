import React from 'react'
import heroImg from '../assets/heroImg.png'

const categoryCard = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-3 p-4 transition rounded-md cursor-pointer bg-slate-200 hover:text-secondary hover:-translate-y-5 text-text'>
        
        <img src={heroImg} alt="" />
        <p className='font-semibold'>Phones</p>        

    </div>
  )
}

export default categoryCard