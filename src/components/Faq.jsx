import React from 'react'
import Ques from './Ques'
import star from "../assets/Star 1.png"

const Faq = () => {
  return (
    <>
    <section className='xl:mt-[400px] mt-64 xl:mx-32 dark:text-white'>
      
    <img className='absolute rotate-12 right-40 xl:block hidden dark:invert' src={star} alt="" />
      <h1 className='text-xl mx-3 text-[#ff5555] font-semibold'>FAQ</h1>
      <h1 className='text-3xl font-extrabold mx-3'>Frequently asked <br /> questions</h1>
      <div className='flex flex-wrap'>
        <Ques />
        <div className='xl:block hidden'>
          
        <Ques />

        </div>

      </div>
    </section>
    </>
  )
}

export default Faq