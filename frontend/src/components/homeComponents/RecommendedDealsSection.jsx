import React from 'react'
import ProductCard from '../generalComponents/ProductCard'

const RecommendedDealsSection = ({recommendedProducts}) => {
  return (
    <div className='flex flex-col w-full h-full gap-4 p-5 lg:px-20 md:px-10 lg:gap-10'> 

      <div className='flex flex-row items-center w-full gap-1 lg:gap-3 text-caribbean-green'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M9.999 13.587 7.7 11.292l-1.412 1.416 3.713 3.705 6.706-6.706-1.414-1.414z"></path></svg>
        <h1 className='w-full font-bold md:text-xl lg:text-2xl text-anti-flash-white'>Recommneded Deals</h1>
      </div>

      <div className='flex flex-row items-center w-full h-full gap-4 overflow-x-auto whitespace-nowrap snap-x snap-mandatory scrollbar_hidden'>
        {recommendedProducts.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            name={product.name}
            category={product.category}
            price={product.price}
            stars={product.stars}
            isWishlisted={product.isWishlisted}
          />
        ))}
      </div>

    </div>
  )
}

export default RecommendedDealsSection