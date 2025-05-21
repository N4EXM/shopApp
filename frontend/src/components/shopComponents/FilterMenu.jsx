import React from 'react'

const FilterMenu = ({isFilterMenuActive,minValue, maxValue, isFourStarActive, isFiveStarActive, isThreeStarActive, isTwoStarActive, isOneStarActive, handleStarsActive, handleFilter}) => {
  return (
    <div className={`lg:max-w-80 lg:pb-5 lg:border-t-0 z-10 lg:h-full fixed lg:top-16 lg:left-0 lg:rounded-md flex flex-col items-start w-full gap-5 p-5 border-t-[1px] bg-secondaryBackground dark:bg-darkSecondaryBackground border-text/10 dark:border-darkText/20 overflow-y-auto transition-all duration-300 ease-in-out pb-20 ${isFilterMenuActive ? 'h-[70vh] md:h-[60vh] lg:h-fit bottom-0  translate-y-0' : 'h-0 bottom-16 overflow-hidden translate-y-64' }`}>
      
        <div className='flex flex-row items-center justify-between w-full'>
          <div className='flex flex-row items-center w-full gap-2'>
            <svg className='text-primary dark:text-darkPrimary' xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="m20,2H4c-.55,0-1,.45-1,1v2c0,.24.09.48.25.66l6.75,7.72v7.62c0,.4.24.77.62.92.12.05.25.08.38.08.26,0,.52-.1.71-.29l2-2c.19-.19.29-.44.29-.71v-5.62l6.75-7.72c.16-.18.25-.42.25-.66v-2c0-.55-.45-1-1-1Z"></path>
            </svg>
            <h1 className='text-lg font-bold'>Filter</h1>
          </div>
          <button onClick={() => handleFilter(false)} className={`lg:hidden p-1 rounded-full bg-text/5`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"  
            fill="currentColor" viewBox="0 0 24 24" >
            <path d="m7.76 14.83-2.83 2.83 1.41 1.41 2.83-2.83 2.12-2.12.71-.71.71.71 1.41 1.42 3.54 3.53 1.41-1.41-3.53-3.54-1.42-1.41-.71-.71 5.66-5.66-1.41-1.41L12 10.59 6.34 4.93 4.93 6.34 10.59 12l-.71.71z"></path>
            </svg>
          </button>
        </div>

        <div className='flex flex-row items-center justify-start w-full border rounded border-text/20 dark:border-darkText/20 bg-background dark:bg-darkBackground'>
          <input type="text" className='w-full p-2 pl-3 text-sm bg-transparent outline-none' placeholder='Search an item...'/>
          <button className='p-1 pl-1.5 duration-200 bg-transparent mr-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg></button>
        </div>

        <div className='flex flex-col w-full gap-2'>
          <p className='text-sm'>Price:</p>
          <div className='flex flex-row items-center justify-between w-full gap-5'>
            <input pattern="[0-9]*" defaultValue={minValue} onInput={(e) => handleMinChange(e)} type="number" inputMode='numeric' className='w-1/2 p-2 pl-3 text-sm border rounded outline-none bg-background dark:bg-darkBackground border-text/20 dark:border-darkText/20 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' placeholder='£ Min'/>
            <input defaultValue={maxValue} type="number" onInput={(e) => handleMaxChange(e)} className='w-1/2 p-2 pl-3 text-sm  border rounded outline-none bg-background dark:bg-darkBackground border-text/20 dark:border-darkText/20 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'  placeholder='£ Max'/>
          </div>
        </div>

        <div className='flex flex-col items-start justify-start w-full gap-2'>
          
          <p className='text-sm'>Rating:</p>
          <div className='flex flex-col items-start justify-start w-full gap-2'>

            <div className='flex flex-row items-center justify-between w-full h-full gap-2 p-2 px-4 border rounded border-text/20 dark:border-darkText/20 bg-background dark:bg-darkBackground lg:border-0 lg lg:p-0 lg:bg-secondaryBackground dark:lg:bg-darkSecondaryBackground'>
              <div className='flex flex-row items-center justify-start gap-2 '> 
                <input defaultChecked={isFiveStarActive} onChange={() => handleStarsActive(5)} type="checkbox" className='bg-transparent border rounded-md size-5 border-text/60 accent-primary dark:accent-darkPrimary' />
                <p className='text-2xl lg:text-xl text-amber-400'>★★★★★</p>
              </div>
              <p className='text-sm font-medium text-text/50 dark:text-darkText/50'>5.0</p>
            </div>

            <div className='flex flex-row items-center justify-between w-full h-full gap-2 p-2 px-4 border rounded border-text/20 dark:border-darkText/20 bg-background dark:bg-darkBackground lg:border-0 lg lg:p-0 lg:bg-secondaryBackground dark:lg:bg-darkSecondaryBackground'>
              <div className='flex flex-row items-center justify-start gap-2'> 
                <input defaultChecked={isFourStarActive} onChange={() => handleStarsActive(4)} type="checkbox" className='bg-transparent border rounded-md size-5 border-text/60 accent-primary dark:accent-darkPrimary' />
                <p className='text-2xl lg:text-xl text-amber-400'>★★★★</p>
              </div>
              <p className='text-sm font-medium text-text/50 dark:text-darkText/50'>4.0</p>
            </div>

            <div className='flex flex-row items-center justify-between w-full h-full gap-2 p-2 px-4 border rounded border-text/20 dark:border-darkText/20 bg-background dark:bg-darkBackground lg:border-0 lg lg:p-0 lg:bg-secondaryBackground dark:lg:bg-darkSecondaryBackground'>
              <div className='flex flex-row items-center justify-start gap-2'> 
                <input defaultChecked={isThreeStarActive} onChange={() => handleStarsActive(3)} type="checkbox" className='bg-transparent border rounded-md size-5 border-text/60 accent-primary dark:accent-darkPrimary' />
                <p className='text-2xl lg:text-xl text-amber-400'>★★★</p>
              </div>
              <p className='text-sm font-medium text-text/50 dark:text-darkText/50'>3.0</p>
            </div>

            <div className='flex flex-row items-center justify-between w-full h-full gap-2 p-2 px-4 border rounded border-text/20 dark:border-darkText/20 bg-background dark:bg-darkBackground lg:border-0 lg lg:p-0 lg:bg-secondaryBackground dark:lg:bg-darkSecondaryBackground'>
              <div className='flex flex-row items-center justify-start gap-2'> 
                <input defaultChecked={isTwoStarActive} onChange={() => handleStarsActive(2)} type="checkbox" className='bg-transparent border rounded-md size-5 border-text/60 accent-primary dark:accent-darkPrimary' />
                <p className='text-2xl lg:text-xl text-amber-400'>★★</p>
              </div>
              <p className='text-sm font-medium text-text/50 dark:text-darkText/50'>2.0</p>
            </div>

            <div className='flex flex-row items-center justify-between w-full h-full gap-2 p-2 px-4 border rounded border-text/20 dark:border-darkText/20 bg-background dark:bg-darkBackground lg:border-0 lg lg:p-0 lg:bg-secondaryBackground dark:lg:bg-darkSecondaryBackground'>
              <div className='flex flex-row items-center justify-start gap-2'> 
                <input defaultChecked={isOneStarActive} onChange={() => handleStarsActive(1)} type="checkbox" className='bg-transparent border rounded-md size-5 border-text/60 accent-primary dark:accent-darkPrimary' />
                <p className='text-2xl lg:text-xl text-amber-400'>★</p>
              </div>
              <p className='text-sm font-medium text-text/50 dark:text-darkText/50'>1.0</p>
            </div>
            
          </div>

        </div>  


      </div>
  )
}

export default FilterMenu