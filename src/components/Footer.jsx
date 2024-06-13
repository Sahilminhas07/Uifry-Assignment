import React from 'react'

import logo from "../assets/Frame.png"
import mail from "../assets/msg.png"
import phone from "../assets/call.png"

const Footer = () => {
  return (
    <>
      <section className='flex mx-10 xl:mx-32  xl:mt-16 gap-20 xl:justify-between flex-wrap  dark:text-white'>
        <ul className=''>
          <li className='text-xl font-extrabold flex w-7'> <img src={logo} alt="" /> uifry</li>
          <li className='text-base font-semibold mt-3 flex gap-1'>
            <img src={mail} alt="" />helpuifry@email.com</li>
          <li className='text-base font-semibold mt-3 flex gap-1'><img src={phone} alt="" />+123-456-889-584</li>

        </ul>
        <ul>
          <li className='text-2xl font-bold font-condensed'>Links</li>
          <li className='text-base font-semibold mt-3'>Home</li>
          <li className='text-base font-semibold mt-3'>About Us</li>
          <li className='text-base font-semibold mt-3'>Bookings</li>
          <li className='text-base font-semibold mt-3'>Blog</li>
        </ul>
        <ul>
          <li className='text-2xl font-bold'>Legal</li>
          <li className='text-base font-semibold mt-3'>Terms of Use</li>
          <li className='text-base font-semibold mt-3'>Privacy Policy</li>
          <li className='text-base font-semibold mt-3'>Cookie Policy</li>
        </ul>
        <ul className=''>
          <li className='text-2xl font-bold'>Product</li>
          <li className='text-base font-semibold mt-3'>Take Tour</li>
          <li className='text-base font-semibold mt-3'>Live Chat</li>
          <li className='text-base font-semibold mt-3'>Reviews</li>
        </ul>
        <ul>
          <li className='text-2xl font-bold'>Newsletter</li>
          <li className='text-base font-semibold mt-3'>Stay Up to Date</li>
          <li className='xl:flex gap-3 mt-3 flex-wrap'>
            <input className='py-3 px-2 rounded-lg dark:invert' type="text" placeholder='Your Email' />
            <button className='bg-black text-white px-8 py-3 rounded-md dark:invert'>Subscribe</button>

          </li>
        </ul>
      </section>

      <hr className='w-full mt-8 h-2' />

      <h1 className='text-center m-8 font-semibold dark:text-white'> Copyright 2022 uifry.com all rights reserved</h1>
    </>
  )
}

export default Footer