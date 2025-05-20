import React from 'react'

const ShopCard = ({image, name, stars, category, price, isWishlisted, reviewCount}) => {

  const truncateText = (str, length) => {
    if (str.length > length) {
        return str.substring(0, length) + '...';
    }
    return str
  }

  return (
    <div className='relative flex flex-col border rounded-md shadow-md h-80 min-w-40 max-w-40 bg-secondaryBackground dark:bg-darkSecondaryBackground drop-shadow-md border-text/5 dark:border-darkText/10 '>
      <div className='w-full p-3 rounded-t-md min-h-40 max-h-40 bg-background'>
        <img className='object-contain object-center w-full h-full' src={image} alt="" />
      </div>
      <div className='flex flex-col items-start justify-between w-full h-full p-3'>

        <div className='flex flex-col items-start justify-start gap-1'>

          <h6 className='text-xs font-light text-text/50 dark:text-darkText/50'>{category}</h6>
          <h1 className='text-base font-medium text-wrap'>{truncateText(name,20)}</h1>
          <div className='flex flex-row items-start justify-start w-full gap-2'>
            <h5 className='flex flex-row items-center gap-1 text-xs font-medium'>{stars}<span className='flex text-lg text-amber-400'><svg  xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24" ><path d="m6.87 14.33-1.83 6.4c-.12.4.03.84.37 1.08.34.25.8.26 1.14.02L12 18.2l5.45 3.63a.988.988 0 0 0 1.14-.02c.34-.25.49-.68.37-1.08l-1.83-6.4 4.54-4.08c.3-.27.41-.69.28-1.06-.13-.38-.47-.64-.87-.68l-5.7-.45-2.47-5.46a.998.998 0 0 0-1.82 0L8.62 8.06l-5.7.45c-.4.03-.74.3-.87.68s-.02.8.28 1.06z"></path>
              </svg></span>
            </h5>
            <p className='flex items-center w-full h-full text-xs font-light text-text/50 dark:text-darkText/50'>{reviewCount} Reviews</p>
          </div>
          
        </div>
        <div className='flex flex-row items-center justify-between w-full h-fit'>
          <h1 className='text-sm font-medium'>£{price}</h1>
          <button className='p-1 duration-200 rounded w-fit h-fit bg-primary dark:bg-darkPrimary dark:active:bg-darkSecondary active:bg-secondary text-darkText '>
              <svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle><path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path><path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path></svg>
            </button>
          </div>

      </div>
      <div>
        <button className='absolute right-3 top-3 text-darkSecondaryBackground'>
          {isWishlisted ? 
            <svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'#f43f5e'}}><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
          : 
            <svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
          }
        </button>
      </div>
    </div>
  )
}

export default ShopCard