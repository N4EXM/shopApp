import React from 'react'
import heroImg from '../assets/heroImg.png'

const ProductCard = () => {
  return (
    <div className='relative flex flex-col items-start justify-start gap-2 p-4 rounded-lg w-72 h-80 bg-slate-200'>
        
        <div className='flex items-center justify-center w-full p-3 h-3/4'>
            <img src={heroImg} className='w-full h-full' alt="" />
        </div>
        <div className='flex flex-col items-start justify-between w-full h-full rounded-b-lg'>
            <h1 className='font-bold'>Samsung Galaxy S25</h1>
            <div className='flex flex-row items-center justify-between w-full p-1'>
                <p className='font-semibold'>£650.00</p>
                <button className='flex items-center justify-center p-1.5 text-white transition duration-200 rounded-md bg-primary hover:bg-secondary active:bg-tertiary'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
                </button>
            </div>
        </div>

        <div className='absolute transition duration-200 right-4 top-4 text-primary hover:scale-110 active:scale-90 hover:text-secondary'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
        </div>

    </div>
  )
}

export default ProductCard