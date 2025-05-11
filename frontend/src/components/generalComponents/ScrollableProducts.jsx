import React from 'react'
import ProductCard from './ProductCard'

const ScrollableProducts = ({products, icon, name}) => {
  return (
    <div className='flex flex-col h-full min-w-full gap-4 p-5 lg:px-20 md:px-10 lg:gap-10'> 

      <div className='flex flex-row items-center w-full gap-1 lg:gap-3 text-primary dark:text-darkPrimary'>
        {icon}
        <h1 className='w-full font-bold md:text-xl'>{name}</h1>
      </div>

      <div className='flex flex-row items-center w-full h-full gap-4 overflow-x-auto whitespace-nowrap snap-x snap-mandatory scrollbar_hidden'>
        {products.map((product) => (
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

export default ScrollableProducts