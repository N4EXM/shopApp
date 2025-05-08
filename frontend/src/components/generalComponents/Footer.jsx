import React from 'react'

const Footer = () => {
  return (

    <div className='flex flex-wrap items-center w-full h-full grid-cols-4 gap-5 pt-5 mt-5 text-sm sm:items-start lg:justify-between md:p-5 lg:px-32 lg:py-10 lg:grid bg-accent text-text bg-secondaryBackground '>

        {/* about us */}
        <div className='flex flex-col items-start px-4 w-full h-full justify-start gap-1 lg:border-r-[1px] border-text/60'>
          <h1 className='flex items-center text-lg font-bold'><span className='text-lg text-transparent bg-clip-text bg-gradient-to-tr from-caribbean-green to-frog'>Deal</span>Dash</h1>
          <p className='font-medium opacity-60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt culpa nihil dicta voluptas ipsum dolore voluptatibus.</p>
          <button className='mt-2 transition duration-200 opacity-60 hover:text-caribbean-green'>More</button>
        </div>

        {/* links */}
        <div className='flex flex-col items-start px-4 w-fit lg:w-full h-full justify-start gap-2 lg:border-r-[1px] border-text/60'>
          <h1 className='text-lg font-bold'>Explore</h1>
          <ul className='flex flex-col items-start justify-start gap-2 font-medium opacity-60'>
            <li>
              <button className='transition duration-200 hover:text-caribbean-green'>Home</button>
            </li>
            <li>
              <button className='transition duration-200 hover:text-caribbean-green'>Shop</button>
            </li>
            <li>
              <button className='transition duration-200 hover:text-caribbean-green'>About Us</button>
            </li>
            <li>
              <button className='transition duration-200 hover:text-caribbean-green'>Contact Us</button>
            </li>
          </ul>
        </div>

        {/* social media */}
        <div className='flex flex-col items-start px-4 lg:w-full w-fit h-full justify-start gap-2 lg:border-r-[1px] border-text/60'>
          <h1 className='text-lg font-bold'>Follow Us</h1>
          <div className='flex flex-col items-start justify-start gap-2'>
            <button className='flex flex-row items-center gap-2 font-medium transition duration-200 hover:text-caribbean-green'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M20.26 7.8a4.82 4.82 0 0 0-3.93-2.44 3.91 3.91 0 0 0-2.54 1.09 10.58 10.58 0 0 0-1.52 1.71 11 11 0 0 0-1.63-1.72 4.39 4.39 0 0 0-2.88-1.08A5 5 0 0 0 3.7 8 11.49 11.49 0 0 0 2 14a7 7 0 0 0 .18 1.64A4.44 4.44 0 0 0 2.71 17a3.23 3.23 0 0 0 3 1.6c1.25 0 2.19-.56 3.3-2a26.4 26.4 0 0 0 2.21-3.6l.63-1.12c.06-.09.11-.18.16-.27l.15.25 1.79 3A14.77 14.77 0 0 0 16 17.63a3.38 3.38 0 0 0 2.55 1 3 3 0 0 0 2.54-1.23 2.2 2.2 0 0 0 .18-.28 4.1 4.1 0 0 0 .31-.63l.12-.35A6.53 6.53 0 0 0 22 15a9 9 0 0 0 0-1 11.15 11.15 0 0 0-1.74-6.2zm-10.12 3.56c-.64 1-1.57 2.51-2.37 3.61-1 1.37-1.51 1.51-2.07 1.51a1.29 1.29 0 0 1-1.15-.66 3.3 3.3 0 0 1-.39-1.7A9.74 9.74 0 0 1 5.54 9a2.8 2.8 0 0 1 2.19-1.47A3 3 0 0 1 10 8.74a14.07 14.07 0 0 1 1 1.31zm8.42 5.12c-.48 0-.85-.19-1.38-.83A34.87 34.87 0 0 1 14.82 12l-.52-.86c-.36-.61-.71-1.16-1-1.65a2.46 2.46 0 0 1 .17-.27c.94-1.39 1.77-2.17 2.8-2.17a3.12 3.12 0 0 1 2.49 1.66 10.17 10.17 0 0 1 1.37 5.34c-.04 1.31-.34 2.43-1.57 2.43z"></path></svg>
              <span className='text-text/60'>Meta</span>
            </button>
            <button className='flex flex-row items-center gap-2 font-medium transition duration-200 hover:text-caribbean-green'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path><circle cx="16.806" cy="7.207" r="1.078"></circle><path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path></svg>
              <span className='text-text/60'>Instagram</span>
            </button>
            <button className='flex flex-row items-center gap-2 font-medium transition duration-200 hover:text-caribbean-green'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg>
              <span className='text-text/60'>TikTok</span>
            </button>
            <button className='flex flex-row items-center gap-2 font-medium transition duration-200 hover:text-caribbean-green'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path></svg>
              <span className='text-text/60'>Twitter / X </span>
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className='flex flex-col items-start justify-start w-full h-full gap-2 px-4 md:w-fit lg:w-full'>
          <h1 className='text-lg font-bold'>Contact Us</h1>
          <p className='font-medium opacity-60'>DealDash@info.com</p>
          <p className='font-medium opacity-60'>Studio M, 4th Floor 8 Lower Osmond Street Manchester, M1 5QF</p>
        </div>

    </div>

  )
}

export default Footer