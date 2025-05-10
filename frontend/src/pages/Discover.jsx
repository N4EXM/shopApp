import React, {useState} from 'react'
import ScrollableProducts from '../components/generalComponents/ScrollableProducts'
import S25Img from '../assets/S25Img.png'
import CouchImg from '../assets/CouchImg.png'
import techImg from '../assets/TechImg.png'
import makeUpImg from '../assets/makeupImg.png'
import laptopImg from '../assets/laptopImg.png'
import clothesImg from '../assets/clothesImg.png'

const Discover = () => {

  const [products, setProducts] = useState([
      {
        id: 0,
        image: S25Img,
        name: "Samsung Galaxy S25",
        category: "Smartphones",
        price: "650.10",
        stars: "5.0",
        isWishlisted: true
      },
      {
        id: 1,
        image: CouchImg,
        name: "Soft couch",
        category: "Furniture",
        price: "450.20",
        stars: "4.0",
        isWishlisted: true
      },
      {
        id: 2,
        image: techImg,
        name: "Rasberry pi 5",
        category: "Tech",
        price: "80.50",
        stars: "5.0",
        isWishlisted: false
      },
      {
        id: 3,
        image: makeUpImg,
        name: "Moisturising Cream",
        category: "Makeup",
        price: "12.30",
        stars: "4.0",
        isWishlisted: true
      },
      {
        id: 4,
        image: laptopImg,
        name: "Asus Vivobook",
        category: "Laptop",
        price: "235.70",
        stars: "4.0",
        isWishlisted: true
      },
      {
        id: 5,
        image: clothesImg,
        name: "Long sleeve shirt",
        category: "Clothes",
        price: "23.60",
        stars: "5.0",
        isWishlisted: true
      },
    ])

  return (
    <div className='flex flex-col items-start justify-start w-full h-full min-h-screen lg:pt-20'>

      <div className='flex flex-row items-center w-full h-full gap-2 p-5 md:px-10 text-primary dark:text-darkPrimary lg:px-20'>
        <i><svg className='md:size-7 lg:size-7' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: 'currentcolor'}}><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg></i>
        <h1 className='text-lg font-bold md:text-2xl'>Discover</h1>
      </div>

      <ScrollableProducts
        name={"Tech"}
        icon={
          <svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill: 'currentcolor'}}><path d="M15 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V7l-5-5zm-6 8H7V6h2v4zm3 0h-2V6h2v4zm3 0h-2V6h2v4z"></path></svg>
        }
        products={products}
      />

      <ScrollableProducts
        name={"Clothes"}
        icon={
          <svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M21.316 4.055C19.556 3.478 15 1.985 15 2a3 3 0 1 1-6 0c0-.015-4.556 1.478-6.317 2.055A.992.992 0 0 0 2 5.003v3.716a1 1 0 0 0 1.242.97L6 9v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9l2.758.689A1 1 0 0 0 22 8.719V5.003a.992.992 0 0 0-.684-.948z"></path></svg>
        }
        products={products}
      />

      <ScrollableProducts
        name={"Smartphones"}
        icon={
          <svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-10 18V4h10l.002 16H6.75z"></path><circle cx="11.75" cy="18" r="1"></circle></svg>
        }
        products={products}
      />

      <ScrollableProducts
        name={"Furnitures"}
        icon={
          <svg className='md:size-6' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M19 13V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2v9a1 1 0 0 0-1 1v8h2v-5h12v5h2v-8a1 1 0 0 0-1-1zm-2-9v9h-2V4h2zm-4 0v9h-2V4h2zM7 4h2v9H7V4z"></path></svg>
        }
        products={products}
      />

    </div>
  )
}

export default Discover