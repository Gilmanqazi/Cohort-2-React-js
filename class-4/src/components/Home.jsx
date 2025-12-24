import React from 'react'
// import mobileImg from "../assets/Mobile-png.png"


const Home = () => {
  return (
    <div className='h-full w-full bg-white text-black'>
      <div className='flex flex-col justify-center py-20 items-center gap-3'>

        <h3 className="text-[20px] text-emerald-400 font-bold ">Your Day, in prefect Rhythm</h3>

        <h1 className="text-8xl text-center font-bold">Work Smarter,<br />Not Harder</h1>

        <p className='w-[50%] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque ipsum blanditiis! Tenetur, reiciendis dignissimos rerum</p>

        <button  className='py-1 px-4 border-2 rounded-2xl w-fit'>TRY IT FOR FREE</button>
      </div>
      
    </div>
  )
}

export default Home
