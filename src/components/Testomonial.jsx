import React from 'react'
import PhoneImg from './PhoneImg'
import photo from "../assets/Group 1000002331.png"
import people from "../assets/people.png"
import star from "../assets/Star 1.png"


const Testomonial = () => {
  return (
    <>
    
      <section className='xl:mt-[500px] w-[88%] xl:block hidden dark:text-white'>


        
    <img className='absolute rotate-45 right-[10%] dark:invert' src={star} alt="" />
        <div>
          <h1 className='text-xl capitalize text-center'>TESTIMONIAL</h1>
          <h1 className='text-4xl text-center capitalize font-extrabold'>what our users say about us?</h1>
        </div>
        <div>
          <div className='rotate-[-15deg]'>
            <PhoneImg  value={photo}/>
          </div>
          <div >
          <div className='relative xl:left-[800px] top-40 block xl:w-[35%] mx-10'>
              
              <div className='mt-8'>
                <h1 className='font-bold capitalize text-2xl'>the best financial accounting app ever!</h1>
                <p className='font-extralight mt-3'>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. 
                In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et 
                blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, 
                gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
                Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
                </p>
              </div>
              <img className='mt-10' src={people} alt="" />
              <h1 className='mt-8 font-bold'>NICK JOHNS</h1>
            </div>

          </div>
        </div>
      </section>
      
        
    <img className='absolute rotate-12 xl:block hidden dark:invert' src={star} alt="" />
    </>
  )
}

export default Testomonial