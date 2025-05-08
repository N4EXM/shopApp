import React from 'react'

const ProductCard = ({image, name, stars, category, price, isWishlisted}) => {
  return (
    <div className='relative flex flex-col items-start justify-start flex-shrink-0 w-56 h-56 gap-0 rounded-md snap-start bg-secondaryBackground md:w-64 md:h-64'>
      <div className='flex items-center justify-center w-full h-32 p-3 rounded-md rounded-b-none md:h-36 bg-anti-flash-white/5'>
        <img src={image} alt="" className='object-contain w-full h-full drop-shadow-xl'/>
      </div>
      <div className='flex flex-col items-start justify-between w-full h-full p-3 md:p-4'>
        <div className='flex flex-row items-start justify-between w-full'>
          <div className='flex flex-col gap-0'>
            <p className='text-xs font-medium md:text-sm'>{name}</p>
            <p className='text-xxs opacity-60 md:text-xs'>{category}</p>
          </div>
          <p className='flex items-center gap-2 text-xs font-medium md:text-sm w-fit h-fit'>{stars}<span className='flex items-center text-sm md:text-base text-amber-400'>&#9733;</span></p>
        </div>
        <div className='flex items-end justify-end w-full h-full'>
          <div className='flex flex-row items-center justify-between w-full h-fit'>
            <p className='text-xs font-medium md:text-sm'>£{price}</p>
            <button className='p-1 rounded w-fit h-fit bg-frog '>
              <svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle><path d="M13 13h2v-2.99h2.99v-2H15V5.03h-2v2.98h-2.99v2H13V13z"></path><path d="M10 17h8a1 1 0 0 0 .93-.64L21.76 9h-2.14l-2.31 6h-6.64L6.18 4.23A2 2 0 0 0 4.33 3H2v2h2.33l4.75 11.38A1 1 0 0 0 10 17z"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <button className='absolute right-3 top-3'>
        {isWishlisted ? 
          <svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'#f43f5e'}}><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
        : 
          <svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412l7.332 7.332c.17.299.498.492.875.492a.99.99 0 0 0 .792-.409l7.415-7.415c2.354-2.354 2.354-6.049-.002-8.416a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595zm6.791 1.61c1.563 1.571 1.564 4.025.002 5.588L12 18.586l-6.793-6.793c-1.562-1.563-1.561-4.017-.002-5.584.76-.756 1.754-1.172 2.799-1.172s2.035.416 2.789 1.17l.5.5a.999.999 0 0 0 1.414 0l.5-.5c1.512-1.509 4.074-1.505 5.584-.002z"></path></svg>
          }
      
      </button>
    </div>
  )
}

export default ProductCard