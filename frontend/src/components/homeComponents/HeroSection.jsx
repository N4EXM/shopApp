import React from 'react'
import HeroCard from '../homeComponents/HeroCard'
import S25Img from '../../assets/S25Img.png'


const HeroSection = ({handleNavigate}) => {

  return (
    <div className='flex flex-col w-full h-full gap-5 p-5 lg:p-0 md:p-10'>
        <div className='flex flex-row items-center justify-between w-full lg:hidden'>
            <h1 className='text-lg font-medium md:text-xl'>Home</h1>
            <button onClick={() => handleNavigate("Notifications")} className='p-1 w-fit h-fit '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg>
            </button>
        </div>
      
        <div className='flex flex-row items-center justify-between w-full border rounded-md border-text/20 h-fit lg:hidden bg-secondaryBackground dark:bg-darkSecondaryBackground dark:border-darkText/20'>
            <input type="text" placeholder='Search' className='w-full p-2 pl-3 text-sm bg-transparent rounded-md outline-none md:text-base md:p-3 md:pl-4'/>
            <button className='p-2 duration-200 bg-transparent rounded-md md:p-3'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg></button>
        </div>        

        <div className=''>
            <HeroCard
                category={"Smartphones"}
                title={'Get 25% on the bestseller'}
                cardImage={S25Img}
                content={'consectetur adipisicing elit. Inventore, tenetur porro? Fuga, illum ea. Quibusdam, impedit iusto fugit,'}
                navigateFunction={() => handleNavigate('')}
            />
            
        </div>

    </div>
  )
}

export default HeroSection