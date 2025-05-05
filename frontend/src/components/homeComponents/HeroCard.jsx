import React from 'react'

const HeroCard = ({category, title, content, cardImage, navigateFunction, className}) => {
  return (
    <div className={`flex flex-row items-center justify-start p-3 rounded-lg md:p-7 h-36 bg-gradient-to-tr from-bangladesh-green to-mountain-meadow md:h-80 lg:rounded-none lg:h-[32rem] lg:p-20 lg:px-32 ${className}`}>

        <div className='flex flex-col items-start justify-start w-3/5 h-full'>
            <div className='flex flex-col w-full h-full gap-2 lg:gap-4'>
                <h6 className='w-full text-xs md:text-sm lg:text-base text-anti-flash-white'>{category}</h6>
                <h1 className='font-semibold md:text-2xl'>{title}</h1>
                <p className='text-lg font-semibold sm:hidden md:block lg:text-xl'>{content}</p>
            </div>
            <button onClick={navigateFunction} className='p-2 px-4 text-xs font-medium rounded-sm md:text-base md:p-3 md:px-6 w-fit text-rich-black bg-anti-flash-white lg:text-lg'>Buy Now</button>
        </div>

        <div className='flex items-center justify-center object-contain w-2/5 '>
            <img className='w-full h-full drop-shadow-2xl' src={cardImage} alt="" />
        </div>

    </div>
  )
}

export default HeroCard