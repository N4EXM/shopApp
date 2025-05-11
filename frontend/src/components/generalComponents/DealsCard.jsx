import React from 'react'
import { useNavigate } from 'react-router-dom'

const DealsCard = ({category, title, content, cardImage, path}) => {

  const navigate = useNavigate()

  const handleNavigate = (link) => {
    navigate(`/${link}`)
  }
  
  return (

    <div className='lg:p-24 lg:px-20 2xl:pt-28'>
      <div className={`flex flex-row items-center justify-start p-3 rounded-lg md:p-7 h-36 bg-gradient-to-tr from-primary to-tertiary dark:from-darkPrimary dark:to-darkTertiary md:h-80  lg:h-[30rem] xl:h-[30rem] lg:p-20`}>

        <div className='flex flex-col items-start justify-start w-3/5 h-full text-darkText'>
            <div className='flex flex-col w-full h-full gap-2 lg:gap-4'>
                <h6 className='w-full text-xs md:text-sm lg:text-base'>{category}</h6>
                <h1 className='font-semibold md:text-2xl'>{title}</h1>
                <p className='text-lg font-semibold sm:hidden md:block lg:text-xl'>{content}</p>
            </div>
            <button onClick={() => handleNavigate(path)} className='p-2 px-4 text-xs font-medium rounded-sm md:text-base md:p-3 md:px-6 w-fit text-rich-black bg-background text-text lg:text-lg'>Buy Now</button>
        </div>

        <div className='flex items-center justify-center object-contain w-2/5 h-fit'>
            <img className='w-full h-full drop-shadow-2xl' src={cardImage} alt="" />
        </div>

      </div>
    </div>
    
  )
}

export default DealsCard