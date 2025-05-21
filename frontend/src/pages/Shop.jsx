import React, { useEffect, useState } from 'react'
import FilterMenu from '../components/shopComponents/FilterMenu'
import ShopCard from '../components/shopComponents/shopCard'
import {clothes} from '../products'

const Shop = () => {

  const [isFilterMenuActive, setIsFilterMenuActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(1000)

  const [isOneStarActive, setIsOneStarActive] = useState(false)
  const [isTwoStarActive, setIsTwoStarActive] = useState(false)
  const [isThreeStarActive, setIsThreeStarActive] = useState(false)
  const [isFourStarActive, setIsFourStarActive] = useState(false)
  const [isFiveStarActive, setIsFiveStarActive] = useState(false)

  const handleFilter = (state) => {
    setIsFilterMenuActive(state)
  }

  const handleMinChange = (e) => {
    setMinValue(e.target.value = e.target.value.replace(/\D/g, ''))
  }

  const handleMaxChange = (e) => {
    setMaxValue(e.target.value = e.target.value.replace(/\D/g, ''))
  }

  const handleStarsActive = (currentStars) => {
    if (currentStars === 5) {
      setIsFiveStarActive(prev => !prev)
    }
    else if (currentStars === 4) {
      setIsFourStarActive(prev => !prev)
    }
    else if (currentStars === 3) {
      setIsThreeStarActive(prev => !prev)
    }
    else if (currentStars === 2) {
      setIsTwoStarActive(prev => !prev)
    }
    else if (currentStars === 1) {
      setIsOneStarActive(prev => !prev)
    }
  }

  return (
    <>
      <div className='relative flex flex-col items-start justify-start w-full h-full min-h-screen gap-2 pb-16 lg:hidden'>

        <div className='flex flex-row items-center w-full h-full gap-2 p-5 pb-0 md:px-10 text-text dark:text-darkText lg:px-20'>
          <i className='text-primary dark:text-darkPrimary'><svg className='size-6 md:size-8' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24" >
          <path d="M10.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M17.5 18a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3M8.82 15.77c.31.75 1.04 1.23 1.85 1.23h6.18c.79 0 1.51-.47 1.83-1.2l3.24-7.4c.14-.31.11-.67-.08-.95S21.34 7 21 7H7.33L5.92 3.62C5.76 3.25 5.4 3 5 3H2v2h2.33zM19.47 9l-2.62 6h-6.18l-2.5-6z"></path>
          </svg></i>
          <h1 className='text-lg font-bold md:text-2xl'>Shop</h1>
        </div>

        <div className='grid items-center justify-center w-full h-full grid-cols-2 gap-4 p-5 scrollbar_hidden md:grid-cols-4 md:gap-0 md:gap-y-6'>
          <div className='flex items-center justify-center'>
            <ShopCard
              image={clothes[1].image}
              name={clothes[1].name}
              category={clothes[1].category}
              price={clothes[1].price}
              stars={clothes[1].stars}
              isWishlisted={clothes[1].isWishlisted}
              reviewCount={clothes[1].reviewCount}
            />
          </div>
          <div className='flex items-center justify-center'>
            <ShopCard
              image={clothes[1].image}
              name={clothes[1].name}
              category={clothes[1].category}
              price={clothes[1].price}
              stars={clothes[1].stars}
              isWishlisted={clothes[1].isWishlisted}
              reviewCount={clothes[1].reviewCount}
            />
          </div>
          <div className='flex items-center justify-center'>
            <ShopCard
              image={clothes[1].image}
              name={clothes[1].name}
              category={clothes[1].category}
              price={clothes[1].price}
              stars={clothes[1].stars}
              isWishlisted={clothes[1].isWishlisted}
              reviewCount={clothes[1].reviewCount}
            />
          </div>
          <div className='flex items-center justify-center'>
            <ShopCard
              image={clothes[1].image}
              name={clothes[1].name}
              category={clothes[1].category}
              price={clothes[1].price}
              stars={clothes[1].stars}
              isWishlisted={clothes[1].isWishlisted}
              reviewCount={clothes[1].reviewCount}
            />
          </div>
          <div className='flex items-center justify-center'>
            <ShopCard
              image={clothes[1].image}
              name={clothes[1].name}
              category={clothes[1].category}
              price={clothes[1].price}
              stars={clothes[1].stars}
              isWishlisted={clothes[1].isWishlisted}
              reviewCount={clothes[1].reviewCount}
            />
          </div>
          <div className='flex items-center justify-center'>
            <ShopCard
              image={clothes[1].image}
              name={clothes[1].name}
              category={clothes[1].category}
              price={clothes[1].price}
              stars={clothes[1].stars}
              isWishlisted={clothes[1].isWishlisted}
              reviewCount={clothes[1].reviewCount}
            />
          </div>
          
        </div>
        
        <button onClick={() => handleFilter(true)} className={`fixed p-3 rounded-full z-5 bg-primary dark:bg-darkPrimary text-darkText bottom-20 md:bottom-28 md:right-10 right-5 lg:hidden`}>
          <svg className='md:size-8' xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
          fill="currentColor" viewBox="0 0 24 24" >
          <path d="m20,2H4c-.55,0-1,.45-1,1v2c0,.24.09.48.25.66l6.75,7.72v7.62c0,.4.24.77.62.92.12.05.25.08.38.08.26,0,.52-.1.71-.29l2-2c.19-.19.29-.44.29-.71v-5.62l6.75-7.72c.16-.18.25-.42.25-.66v-2c0-.55-.45-1-1-1Z"></path>
          </svg>
        </button>

        <FilterMenu
          isFilterMenuActive={isFilterMenuActive}
          isFiveStarActive={isFiveStarActive}
          isFourStarActive={isFourStarActive}
          isThreeStarActive={isThreeStarActive}
          isTwoStarActive={isTwoStarActive}
          isOneStarActive={isOneStarActive} 
          handleStarsActive={handleStarsActive}
          handleFilter={handleFilter}
        />

      </div>
      <div className='relative flex-row items-start justify-start hidden w-full h-full gap-5 pt-16 overflow-y-hidden pl-80 lg:flex'>
        <FilterMenu
          isFilterMenuActive={isFilterMenuActive}
          isFiveStarActive={isFiveStarActive}
          isFourStarActive={isFourStarActive}
          isThreeStarActive={isThreeStarActive}
          isTwoStarActive={isTwoStarActive}
          isOneStarActive={isOneStarActive} 
          handleStarsActive={handleStarsActive}
          handleFilter={handleFilter}
        />
        <div className='flex flex-col items-start justify-start w-full h-full gap-4 p-10 pt-7'>
          
          <div className='flex flex-col items-start justify-start w-full h-full gap-2'>
            <h1 className='text-2xl font-bold'>Results for "Garbage dasopjfdasiofh fnsdkhfkdsf hdsahkas"</h1>
            <hr className='w-full border border-text/10 dark:border-darkText/10'/>
          </div>

          <div className='w-full overflow-y-scroll h-[36rem] flex flex-wrap gap-4 scrollbar_hidden'>
            {clothes.map((cloth,index) => (

                <div key={index} className='flex items-center justify-center w-fit h-fit'>
                  <ShopCard
                    image={cloth.image}
                    name={cloth.name}
                    category={cloth.category}
                    price={cloth.price}
                    stars={cloth.stars}
                    isWishlisted={cloth.isWishlisted}
                    reviewCount={cloth.reviewCount}
                  />
                </div>
                
            ))}
          </div>

        </div>
      </div>
    </>
  )
  
}

export default Shop