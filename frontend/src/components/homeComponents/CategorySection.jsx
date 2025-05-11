import React from 'react'

const CategorySection = ({categoryButtons, handleNavigate}) => {
  return (
    <div className='flex flex-col w-full h-full gap-4 px-5 lg:px-20 md:px-10 lg:gap-7'>

        <div className='flex flex-row items-center w-full gap-1 lg:gap-3 text-secondary dark:text-darkPrimary'>
            <svg className='sm:size-6' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg>
            <h1 className='w-full font-bold md:text-xl'>Categories</h1>
        </div>
        
        <div className='grid items-center justify-between w-full h-full grid-cols-3 gap-3 p-3 border rounded-md lg:p-0 lg:flex lg:flex-row border-text/10 dark:border-darkText/10 lg:overflow-x-scroll scrollbar_hidden lg:border-none'>

            {categoryButtons.map((categoryButton) => (
                <button onClick={() => handleNavigate(categoryButton.link)} key={categoryButton.id} className='flex flex-col items-center justify-center gap-1 p-2 rounded-md md:gap-2 md:py-5 md:flex-row min-w-fit bg-secondaryBackground dark:bg-darkSecondaryBackground lg:p-7 lg:flex-col lg:min-w-56'>
                    <i className='flex items-center lg:p-4 lg:rounded-full lg:bg-text/5 dark:lg:bg-darkText/5'>{categoryButton.icon}</i>
                    <p className='text-xs font-medium md:text-base lg:font-semibold'>{categoryButton.name}</p>    
                </button>
            ))}

        </div>

    </div>
  )
}

export default CategorySection 