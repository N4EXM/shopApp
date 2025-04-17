import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isDropMenuActive, setIsDropMenuActive] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropMenuActive(false);
            }
        };

        // Add event listener when dropdown is active
        if (isDropMenuActive) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // Cleanup function
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropMenuActive]);

    const handleNavigate = (link) => {
        navigate(`/${link}`);
    };

    return (
        <div className='fixed top-0 left-0 z-10 w-full p-5 px-20 '>
            <div className='relative flex flex-row items-center justify-between w-full p-3 px-20 rounded-lg bg-background bg-opacity-90' ref={dropdownRef}>
                
                {/* logo button */}
                <div className='flex flex-row items-center justify-center gap-4 cursor-pointer' onClick={() => handleNavigate("/")}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" style={{fill: "#0ea5e9",transform: '',msFilter:''}}><path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z"></path></svg>
                    <h1 className='text-2xl font-bold'>Zofy</h1>
                </div>

                {/* page links */}
                <div className='flex flex-row items-center gap-10 font-semibold'>
                    <button 
                        onClick={() => setIsDropMenuActive(!isDropMenuActive)} 
                        className='flex flex-row items-center justify-center gap-1 transition duration-200 hover:text-primary'
                    >
                        Home
                        <i className='pt-[1px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path></svg>
                        </i>
                    </button>
                    <button className='transition duration-200 hover:text-primary'>Shop</button>
                    <button className='transition duration-200 hover:text-primary'>About Us</button>
                    <button className='transition duration-200 hover:text-primary'>Contact Us</button>
                </div>

                {/* user buttons */}
                <div className='flex flex-row items-center gap-4'>
                    <button className='p-1 transition duration-200 text-text hover:text-primary hover:scale-125 active:scale-90 active:duration-75'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z"></path><circle cx="10.5" cy="19.5" r="1.5"></circle><circle cx="17.5" cy="19.5" r="1.5"></circle></svg>
                    </button>
                    <button className='p-1 transition duration-200 text-text hover:text-primary hover:scale-125 active:scale-90 active:duration-75'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M20.205 4.791a5.938 5.938 0 0 0-4.209-1.754A5.906 5.906 0 0 0 12 4.595a5.904 5.904 0 0 0-3.996-1.558 5.942 5.942 0 0 0-4.213 1.758c-2.353 2.363-2.352 6.059.002 8.412L12 21.414l8.207-8.207c2.354-2.353 2.355-6.049-.002-8.416z"></path></svg>
                    </button>
                    <button className='p-1 transition duration-200 text-text hover:text-primary hover:scale-125 active:scale-90 active:duration-75'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill: "currentColor",transform: '',msFilter:''}}><path d="M12 2C6.579 2 2 6.579 2 12s4.579 10 10 10 10-4.579 10-10S17.421 2 12 2zm0 5c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm-5.106 9.772c.897-1.32 2.393-2.2 4.106-2.2h2c1.714 0 3.209.88 4.106 2.2C15.828 18.14 14.015 19 12 19s-3.828-.86-5.106-2.228z"></path></svg>
                    </button>
                </div>

                {isDropMenuActive && 
                    <div className='bg-opacity-90 transition duration-200 ease-in absolute top-[68px] left-[35%] bg-background w-44 rounded-md flex flex-col gap-2 z-10 py-2 shadow-lg'>
                        <button className='flex items-start justify-start w-full p-1 px-4 transition duration-200 hover:bg-zinc-50 hover:text-primary'>Hero</button>
                        <button className='flex items-start justify-start w-full p-1 px-4 transition duration-200 hover:bg-zinc-50 hover:text-primary'>Top Selling</button>
                        <button className='flex items-start justify-start w-full p-1 px-4 transition duration-200 hover:bg-zinc-50 hover:text-primary'>What we offer</button>
                        <button className='flex items-start justify-start w-full p-1 px-4 transition duration-200 hover:bg-zinc-50 hover:text-primary'>Who are we</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;