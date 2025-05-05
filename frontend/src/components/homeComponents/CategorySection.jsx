import React from 'react'

const CategorySection = ({categoryButtons, handleNavigate}) => {
  return (
    <div className='flex flex-col w-full h-full gap-4 px-5 lg:p-20 md:px-10 lg:gap-10'>

        <h1 className='w-full font-bold md:text-xl lg:text-2xl'>Categories</h1>
        
        <div className='flex flex-row items-center justify-between w-full h-full gap-3 overflow-x-scroll scrollbar_hidden'>

            {categoryButtons.map((categoryButton) => (
                <button onClick={() => handleNavigate(categoryButton.link)} key={categoryButton.id} className='flex flex-row items-center justify-center gap-3 p-2 rounded-md min-w-fit bg-secondaryBackground lg:p-7 lg:flex-col lg:min-w-56'>
                    <i className='flex items-center text-mint lg:hidden'>{categoryButton.icon}</i>
                    <i className='flex items-center p-4 rounded-full text-mint sm:hidden lg:flex bg-anti-flash-white/5'>{categoryButton.largeIcon}</i>
                    <p className='text-xs font-medium md:text-base lg:text-lg lg:font-semibold'>{categoryButton.name}</p>    
                </button>
            ))}

        </div>

    </div>
  )
}

export default CategorySection 