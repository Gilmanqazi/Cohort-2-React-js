import React from 'react'
import hero from "../Section-1/hero.png"

const Section1 = () => {
  return (
    <div className='py-4 px-5 h-screen w-full flex justify-center items-center'>
      
     
      <div className='relative h-[90vh] w-[90vw] rounded-2xl overflow-hidden'>

  
        <img
          src={hero}
          alt="hero"
          className='h-full w-full object-cover'
        />

       
        <div className='absolute inset-0 z-10 flex flex-col gap-5 justify-center items-center'>
          <h1 className='text-center text-4xl text-amber-50'>
            Unleash Your Inner Champion Today <br /> All In One Place
          </h1>

          <p className='text-center text-white'>
            Join the ultimate tennis experience — where passion meets performance,
            <br /> and every swing brings you closer to victory
          </p>

          <button className='py-2 px-6 bg-white text-black rounded-2xl'>
            Start your own journey
          </button>
        </div>

     
        <div className='absolute bottom-5 left-0 right-0 z-10 px-6 flex justify-between items-center'>
          <p className='text-black font-bold text-xs'>
            Train with real professionals <br /> get the real result
          </p>

          <div className='bg-amber-50 py-2 px-5 rounded-2xl'>
            <h1 className='text-black text-xs font-bold'>
              Instagram • Facebook • TikTok
            </h1>
          </div>
        </div>

      </div>
    </div>
  )
}


export default Section1
