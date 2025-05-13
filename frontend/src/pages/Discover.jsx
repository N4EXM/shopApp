import React, {useState} from 'react'
import ScrollableProducts from '../components/generalComponents/ScrollableProducts'
import {tech, smartphones, clothes, headphones} from '../products'
import DealsCarousel from '../components/discoverComponents/DealsCarousel'

const Discover = () => {

  const [dealsProducts, setDealsProducts] = useState([
    {
      id: 0,
      category: "Tech & Gadgets",
      title: "Lorem ipsum dolor sit, amet.",
      content: "Lorem ipsum dolor sit, amet con sectetur adip isicing elit. Expedita qui quos.",
      cardImage: tech[4].image,
      path:''
    },
    {
      id: 1,
      category: "Clothes",
      title: "Lorem ipsum dolor sit, amet.",
      content: "Lorem ipsum dolor sit, amet con sectetur adip isicing elit. Expedita qui quos.",
      cardImage: clothes[0].image,
      path:''
    },
    {
      id: 2,
      category: "Clothes",
      title: "Lorem ipsum dolor sit, amet.",
      content: "Lorem ipsum dolor sit, amet con sectetur adip isicing elit. Expedita qui quos.",
      cardImage: clothes[2].image,
      path:''
    },
  ])

  return (
    <div className='flex flex-col items-start justify-start w-full h-full min-h-screen lg:pt-20'>

      <div className='flex flex-row items-center w-full h-full gap-2 p-5 pb-0 md:px-10 text-text dark:text-darkText lg:px-20'>
        <i className='text-primary dark:text-darkPrimary'><svg className='md:size-7' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: 'currentcolor'}}><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg></i>
        <h1 className='text-lg font-bold md:text-2xl'>Discover</h1>
      </div>

      <DealsCarousel
        dealProducts={dealsProducts}
      />

      <ScrollableProducts
        name={"Tech"}
        icon={<svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M15 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V7l-5-5zm-6 8H7V6h2v4zm3 0h-2V6h2v4zm3 0h-2V6h2v4z"></path></svg>}
        products={tech}
      />

      <ScrollableProducts
        name={"Smartphones"}
        icon={<svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z"></path><circle cx="11.75" cy="18" r="1"></circle></svg>}
        products={smartphones}
      />

      <ScrollableProducts
        name={"clothes"}
        icon={<svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M21.316 4.055C19.556 3.478 15 1.985 15 2a3 3 0 1 1-6 0c0-.015-4.556 1.478-6.317 2.055A.992.992 0 0 0 2 5.003v3.716a1 1 0 0 0 1.242.97L6 9v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9l2.758.689A1 1 0 0 0 22 8.719V5.003a.992.992 0 0 0-.684-.948z"></path></svg>}
        products={clothes}
      />

    </div>
  )
}

export default Discover