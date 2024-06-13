import React, { useState } from 'react'
import logo from "../assets/Frame.png"
import star from "../assets/Star 1.png"
import ModeButton from './ModeButton'
import Hamburger from "hamburger-react";


function Nav() {
  const[display,setDisplay]=useState(false)
 

  return (
    <>
    <nav className='mx-16 xl:mt-5 dark:bg-black'>
      <section className='xl:flex xl:justify-between hidden mx-16'>
        <div className='text-2xl font-bold flex dark:text-white'>
          <img className='h-8' src={logo} alt="" />

          uifry
        </div>
        <div>
          <ul className='flex gap-16 font-extrabold text-xl dark:text-white'>
            <li className='drop-shadow-lg text-[#ff5555]'>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Features</li>
            <li><ModeButton /></li>
          </ul>
        </div>
        <div>
          <button className='bg-black text-white px-8 py-3 rounded-md dark:invert'>Download</button>
        </div>
        
        
      </section>
      
      
    <img className='xl:top-16 xl:right-10 xl:absolute xl:flex hidden dark:invert' src={star} alt="" />

    
    </nav>
    <div className=' flex justify-between' >
      <div onClick={() => setDisplay(!display)} className="xl:hidden dark:invert">
        
      <Hamburger />

      </div>
      <div className='p-3 xl:hidden'>
      <ModeButton />
      </div>
        </div>
        <div
        className={
          display
            ? "shadow-2xl xl:hidden bg-[#888789] w-full p-3  z-[99] absolute origin-top transition-all"
            : "hidden"
        }
      >
        <ul className="text-center font-semibold text-base">
          <li>Home</li>
          <li>About Us</li>
          <li>Pricing</li>
          <li>Feature</li>
        </ul>
      </div>
    </>
  )
}

export default Nav