  import React, { useRef, useState, useEffect } from 'react'
  import { useLocation, useNavigate } from 'react-router-dom'

  const Navbar = ({isSignedIn}) => {

    const location = useLocation();
    const navigation = useNavigate()
    const [isProfileBtnActive, setIsProfileBtnActive] = useState(false)
    const dropdownRef = useRef(null)

    const handleProfileClick = () => {
      setIsProfileBtnActive(!isProfileBtnActive)
    }

    const handleNavigate = (url) => {
      navigation(`/${url}`)
    }

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsProfileBtnActive(false); // Changed from setIsUserButtonActive
        }
      };
  
      // Add event listener when dropdown is active
      if (isProfileBtnActive) {
        document.addEventListener('mousedown', handleClickOutside);
      }
  
      // Cleanup function
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isProfileBtnActive]);

    return (
      <div className='fixed bottom-0 left-0 z-20 flex items-center justify-between w-full h-16 border-t-2 px-7 bg-secondaryBackground dark:bg-darkSecondaryBackground dark:border-darkSecondaryBackground/50 border-secondaryBackground/50 md:px-20 lg:px-32 lg:top-0 lg:border-b-2 lg:border-t-0'>
        
        <p onClick={() => handleNavigate("")} className='w-full text-3xl font-bold cursor-pointer lg:block sm:hidden'><span className='text-transparent bg-clip-text bg-gradient-to-tr from-primary to-secondary dark:from-darkPrimary dark:to-darkSecondary'>Deal</span>Dash</p>


        <div className='flex flex-row items-center justify-start w-full border rounded sm:hidden lg:flex border-text/20 bg-secondaryBackground dark:border-darkText/20 dark:bg-darkSecondaryBackground'>
          <input type="text" className='w-full p-2 pl-3 text-sm bg-transparent outline-none' placeholder='Search an item...'/>
          <button className='p-1 pl-1.5 duration-200 bg-transparent mr-1'><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M19.023 16.977a35.13 35.13 0 0 1-1.367-1.384c-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.962 6.962 0 0 0 16 9c0-3.859-3.14-7-7-7S2 5.141 2 9s3.14 7 7 7c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604c-.379-.372-.885-.866-1.391-1.36zM9 14c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"></path></svg></button>
        </div>
    
        <div className='flex flex-row items-center justify-between w-full h-full lg:justify-end lg:gap-3'>

          <button onClick={() => handleNavigate("Notifications")} className={`flex flex-col px-2 items-center justify-center sm:hidden lg:flex ${location.pathname === '/Notifications' ? "border-b-2 lg:border-b-0 text-primary border-caribbean-green" : "text-anti-flash-white/80 dark:text-darkText"} h-full w-fit`}>
            <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M19 13.586V10c0-3.217-2.185-5.927-5.145-6.742C13.562 2.52 12.846 2 12 2s-1.562.52-1.855 1.258C7.185 4.074 5 6.783 5 10v3.586l-1.707 1.707A.996.996 0 0 0 3 16v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L19 13.586zM19 17H5v-.586l1.707-1.707A.996.996 0 0 0 7 14v-4c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 .266.105.52.293.707L19 16.414V17zm-7 5a2.98 2.98 0 0 0 2.818-2H9.182A2.98 2.98 0 0 0 12 22z"></path></svg></i>
          </button>          

          <button onClick={() => handleNavigate("")} className={`lg:hidden flex flex-col px-2 items-center justify-center ${location.pathname === '/' ? "border-b-2 lg:border-b-0 text-primary dark:text-darkPrimary border-secondary dark:border-darkSecondary" : "text-anti-flash-white/80 dark:text-darkText"} h-full w-fit`}>
            <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path></svg></i>
            <p className='text-xs font-medium lg:hidden'>Home</p>
          </button>

          <button onClick={() => handleNavigate("Shop")} className={`flex flex-col px-2 items-center justify-center ${location.pathname === '/Shop' ? "border-b-2 lg:border-b-0 text-primary dark:text-darkPrimary border-secondary dark:border-darkSecondary" : "text-anti-flash-white/80 dark:text-darkText"} h-full w-fit`}>
            <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentcolor"}}><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></i>
            <p className='text-xs font-medium lg:hidden'>Shop</p>
          </button>

          <button onClick={() => handleNavigate("Discover")} className={`flex flex-col px-2 items-center justify-center ${location.pathname === '/Discover' ? "border-b-2 lg:border-b-0 text-primary dark:text-darkPrimary border-secondary dark:border-darkSecondary" : "text-anti-flash-white/80 dark:text-darkText"} h-full w-fit`}>
            <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'currentcolor'}}><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></svg></i>
            <p className='text-xs font-medium lg:hidden'>Discover</p>
          </button>

          <button onClick={() => handleNavigate("Profile")} className={`lg:hidden flex flex-col px-2 items-center justify-center ${location.pathname === '/Profile' ? "border-b-2 lg:border-b-0 text-primary dark:text-darkPrimary border-secondary dark:border-darkSecondary" : "text-anti-flash-white/80 dark:text-darkText"} h-full w-fit`}>
            <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentcolor"}}><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></i>
            <p className='text-xs font-medium lg:hidden'>Profile</p>
          </button>

          <button onClick={() => handleProfileClick()} className='flex-col items-center justify-center px-2 sm:hidden lg:flex'>
            <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentcolor"}}><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg></i>
            <p className='text-xs font-medium lg:hidden'>Profile</p>
          </button>

        </div>
        
        {isProfileBtnActive && (
          isSignedIn ? 
            
            <div ref={dropdownRef} className='fixed flex flex-col gap-2 p-2 border rounded-md border-text/20 dark:border-darkText/20 h-fit w-80 top-20 right-20 bg-secondaryBackground dark:bg-darkSecondaryBackground'>
              
              <button className='relative flex flex-row items-center justify-start w-full gap-5 p-2 font-semibold duration-100 border-l-2 border-transparent hover:border-l-primary hover:dark:border-l-darkPrimary '>
                <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'currentcolor'}}><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg></i>
                Cart
                <span className='absolute w-6 h-auto p-1 text-xs font-semibold rounded-full dark:bg-darkPrimary right-3 bg-primary text-darkText'>1</span>
              </button>

              <button className='relative flex flex-row items-center justify-start w-full gap-5 p-2 font-semibold duration-100 border-l-2 border-transparent hover:border-l-primary hover:dark:border-l-darkPrimary '>
                <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: 'currentColor'}}><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg></i>
                Wishlist
                <span className='absolute w-6 h-auto p-1 text-xs font-semibold rounded-full dark:bg-darkPrimary right-3 bg-primary text-darkText'>1</span>
              </button>

              <div className='flex flex-col w-full gap-2'>
                <span className='w-full h-[1px] border border-text/30 dark:border-darkText/30'></span>
                <button className='relative flex flex-row items-center justify-start w-full gap-5 p-2 font-semibold duration-100 border-l-2 border-transparent hover:border-l-primary hover:dark:border-l-darkPrimary '>
                  <i><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="m2 12 5 4v-3h9v-2H7V8z"></path><path d="M13.001 2.999a8.938 8.938 0 0 0-6.364 2.637L8.051 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051 2.051 3.08 2.051 4.95-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637c1.7-1.699 2.637-3.959 2.637-6.364s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path></svg></i>
                  Log out
                </button>
              </div>

            </div>
            :
            <div className='fixed flex flex-col gap-2 p-2 border rounded-md h-fit w-80 top-24 right-20 border-text/20 dark:border-darkText/20 bg-secondaryBackground dark:bg-darkSecondaryBackground'>
              
              <button className='relative flex flex-row items-center justify-start w-full gap-5 p-2 font-semibold duration-100 border-l-2 border-transparent hover:border-l-primary hover:dark:border-l-darkPrimary '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="m10.998 16 5-4-5-4v3h-9v2h9z"></path><path d="M12.999 2.999a8.938 8.938 0 0 0-6.364 2.637L8.049 7.05c1.322-1.322 3.08-2.051 4.95-2.051s3.628.729 4.95 2.051S20 10.13 20 12s-.729 3.628-2.051 4.95-3.08 2.051-4.95 2.051-3.628-.729-4.95-2.051l-1.414 1.414c1.699 1.7 3.959 2.637 6.364 2.637s4.665-.937 6.364-2.637C21.063 16.665 22 14.405 22 12s-.937-4.665-2.637-6.364a8.938 8.938 0 0 0-6.364-2.637z"></path></svg>
                Log in
              </button>

              <button className='relative flex flex-row items-center justify-start w-full gap-5 p-2 font-semibold duration-100 border-l-2 border-transparent hover:border-l-primary hover:dark:border-l-darkPrimary '>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'currentcolor'}}><path d="M4.5 8.552c0 1.995 1.505 3.5 3.5 3.5s3.5-1.505 3.5-3.5-1.505-3.5-3.5-3.5-3.5 1.505-3.5 3.5zM19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2z"></path></svg>
                Register
              </button>

            </div>
        )}

      </div>
    )
  }

  export default Navbar