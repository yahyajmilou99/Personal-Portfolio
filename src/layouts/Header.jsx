import React, { useContext, useState } from 'react';
import '../pages/Layout/components/app.sass'
import "./app.css"
import { MyContext } from '../utils/ContextProvider';
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const [dark, setDark] = useContext(MyContext)

    const [respNav, setRespNav] = useState(true)

    const navFunction = () => {

        setRespNav(!respNav)
        document.body.classList.toggle("overflow-hidden")

    }




    const navigate = useNavigate()

    return (
        <>
            <header className={dark ? "text-black transition duration-150  relative" : "text-white transition duration-150 relative"}>
                <nav className='nav w-[100%] md:px-[10px] md:py-2 py-[20px]   md:h-[14vh] flex items-center px-6    md:justify-center justify-between  md:gap-0 gap-3'>
                    <div className="md:w-[95%] w-[95%] flex items-center justify-between  ">
                        <h1 className='md:text-[20px] text-[26px] lg:text-[28px] xl:text-[40px] font-[briem-extrabold]  font-bold hover:text-[#2596be] transition cursor-pointer' onClick={() => navigate("/")} >Yahya Codes</h1>
                        <div className="flex items-center md:justify-between md:gap-4  md:w-[65%] ">
                            <ul className='md:flex md:gap-2  justify-between hidden md:w-[75%] font-bold md:text-[16px] lg:text-[20px] xl:text-[26px] '>
                                <li className='hover:text-[#2596be] transition cursor-pointer font-[briem-bold] ' onClick={() => navigate("/")} >Home</li>
                                <li className='hover:text-[#2596be] transition cursor-pointer font-[briem-bold] ' onClick={() => navigate("/about")} >About Me</li>
                                <li className='hover:text-[#2596be] transition cursor-pointer font-[briem-bold] ' onClick={() => navigate("/skills")} >Skills</li>
                                <li className='hover:text-[#2596be] transition cursor-pointer font-[briem-bold] ' onClick={() => navigate("/about")} >Projects</li>
                                <li className='hover:text-[#2596be] transition cursor-pointer font-[briem-bold] ' onClick={() => navigate("/contact")} >Contact Me</li>
                            </ul>
                            <label className={dark ? "switch-name  mt-[5px] border-[black] border-[3px] " : "switch-name  mt-[5px] border-[white] border-[3px] "} >
                                <input type="checkbox" className="checkbox " checked={dark} onChange={() => {
                                    setDark(!dark)
                                }} />
                                <div className="back"></div>
                                <svg className="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                    <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                                </svg>
                                <svg className="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"></path>
                                </svg>
                            </label>
                        </div>
                    </div>

                    <label className="hamburger md:hidden" checked={respNav} >
                        <input type="checkbox" onClick={() => { navFunction() }} />
                        <svg viewBox="0 0 32 32">
                            <path class={dark ? "line line-top-bottom  stroke-black" : "line line-top-bottom stroke-white "} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path class={dark ? "line stroke-black" : " line stroke-white "} d="M7 16 27 16"></path>
                        </svg>
                    </label>
                </nav>

                <span className={respNav ? 'hidden' : 'w-[100%] flex justify-center absolute opacity-100 mt-4 transition duration-200'}>
                    <ul className='flex flex-col  justify-evenly items-center bg-[#6f6d6dea] rounded-[25px] md:hidden text-[30px] z-50  h-[70vh] w-[90%]  '>
                        <li className='hover:text-[#2596be] transition cursor-pointer font-[briem-bold] ' onClick={() => navigate("/")} >Home</li>
                        <li className='hover:text-[#2596be] transition cursor-pointer font-[briem-bold] ' onClick={() => navigate("/about")} >About Me</li>
                        <li className='hover:text-[#2596be] transition cursor-pointer font-[briem-bold] ' onClick={() => navigate("/skills")} >Skills</li>
                        <li className='hover:text-[#2596be] transition cursor-pointer font-[briem-bold] ' onClick={() => navigate("/contact")} >Projects</li>
                        <li className='hover:text-[#2596be] transition cursor-pointer font-[briem-bold] ' onClick={() => navigate("/contact")} >Contact Me</li>
                    </ul>
                </span>
            </header>
        </>
    );
};

