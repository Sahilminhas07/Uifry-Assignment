import React from 'react'
import banner from "../assets/banner.png"
import star from "../assets/Star 1.png"
import orange from "../assets/Ellipse 1.png"
import yellow from "../assets/yellow.png"

const Banner = () => {
  return (
    <>
    <section className='mt-28 relative'>
    <img className='absolute -top-40 ' src={yellow} alt="" />

      <img className='absolute -top-32' src={orange} alt="" />
    <img className='float-right dark:invert' src={star} alt="" />
    <div className='z-50'>
      
    <img className='mx-auto relative dark:invert' src={banner} alt="" />

    </div>

      <img className='relative bottom-96 rotate-45 left-10 dark:invert' src={star} alt="" />
    </section>
    </>
  )
}

export default Banner