import React from 'react'
import heroImg from '../assets/heroImg.png'
import CategoryCard from '../components/CategoryCard'

const Home = () => {
  return (
    <div className='relative flex flex-col items-start justify-start w-screen h-full min-h-screen gap-10 py-28'>
        
      {/* hero section */}
      <section className='px-20 bg-gradient-to-tr from-primary to-secondary'>
        
        <div className='flex flex-row items-start justify-between w-full p-20 rounded-lg h-[27rem] bg-opacity-90 relative'>
          {/* left side */}
          <div className='flex flex-col items-start justify-between w-3/5 h-full text-white'>
            <div className='flex flex-col items-start justify-start gap-4'>

              {/* hero title */}
              <h1 className='text-3xl font-semibold'>Lorem ipsum, dolor sit epturi, illo? Officiis sit error repudiandae.</h1>  

              {/* hero description */}
              <p className='w-[88%]  font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi iusto amet dolorem molestiae exercitationem, est, vero!</p>
            </div>

            {/* find out more button */}
            <button className='p-2 px-8 text-sm font-semibold transition duration-200 ease-in-out border-2 border-white rounded-lg hover:text-white hover:bg-secondary hover:border-secondary'>View Now</button>
          </div>
          
          {/* right side */}
          <div className='flex items-center justify-center w-2/5 h-full'>
            <img className='h-80' src={heroImg} alt='heroImg' />  
          </div>

          <div className='absolute flex flex-col justify-between h-40 p-4 bg-white rounded-lg w-72 top-56 right-80'>
              
            <div className='flex flex-col w-full h-full gap-1'>

                {/* category */}
                <p className='text-xs font-light text-text'>Smartphones and Computers</p>
            
                {/* name */}
                <h1 className='text-lg font-semibold'>Samsung Galaxy S25</h1>

                {/* rating */}
                <div class="flex flex-row items-center w-full gap-5">
                  <div className='flex flex-row items-center'>
                    <span class="text-amber-400">&#9733;</span> 
                    <span class="text-amber-400">&#9733;</span>
                    <span class="text-amber-400">&#9733;</span>
                    <span class="text-amber-400">&#9733;</span>
                    <span class="text-amber-400">&#9733;</span>
                  </div>
                  
                  {/* review count */}
                  <p className='text-xs font-light'>1,235 reviews</p>
                </div>

                {/* cost */}
                <div className='w-full '>
                  <p className='text-xl font-semibold'>£650.00</p>
                </div>

            </div>
              

            {/* go to page */}
            <button className='flex items-center w-full gap-1 text-xs transition duration-200 text-text hover:text-primary'>
              View More
              <i className='flex'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '', msFilter:''}}><path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path></svg>
              </i>
            </button>

          </div>
        </div>
        
      </section>

      {/* Categories */}
      <section className='flex flex-col w-full h-[26rem] gap-10 px-40 py-5 bg-background'>
        
        {/* title */}
        <h1 className='text-2xl font-bold'>Browse by categories</h1>

        <div className='grid w-full h-full grid-cols-4 gap-2'>

          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>
          <CategoryCard/>

        </div>

      </section>

      {/* Featured products */}
      <section className='px-40 py-5'>

        <h1>Featured products</h1>

      </section>

    </div>
  )
}

export default Home