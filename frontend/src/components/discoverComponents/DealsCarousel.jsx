import React from 'react'
import DealsCard from '../generalComponents/DealsCard'


const DealsCarousel = ({dealProducts}) => {
  return (
    <div className='relative flex flex-row items-center w-full h-full gap-3 p-5 overflow-x-auto whitespace-nowrap snap-x snap-mandatory scrollbar_hidden'>
      
      {dealProducts.map((product) => (
        <DealsCard
          key={product.id}
          title={product.title}
          category={product.category}
          content={product.content}
          cardImage={product.cardImage}
          path={product.path}
        />
      ))}

    </div>
  )
}

export default DealsCarousel