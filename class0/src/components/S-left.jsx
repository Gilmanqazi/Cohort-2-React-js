import React from 'react'

const Sleft = () => {
  return (
    <div className='h-full w-[50%]  px-8 py-7 flex flex-col gap-15'  >
      <div className='flex flex-col gap-4'>
        <p className='bg-yellow-400 w-fit px-3 py-1 rounded-2xl text-xs font-bold'>WE CAN HELP YOU</p>
        <h1 className='text-3xl font-semibold'>Grow <span className=' bg-linear-65 from-purple-500  to-pink-500 rounded-3xl px-2 py-1.4 text-xl'><i>faster</i></span> with our <br /> all-in-one marketing <br /> platform</h1>
      <h1 className="relative text-5xl font-bold">
  <span className="absolute left-0 -bottom-6 w-[350px] h-[6px]
    bg-[repeating-linear-gradient(45deg,#d1d5db_0px,#d1d5db_10px,transparent_10px,transparent_20px)]">
  </span>
</h1>

      </div>
      <div className='flex gap-6 flex-col '>
        <p className='text-[15px] font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis laudantium iure consequuntur, quam distinctio totam, vitae veniam quas in, ducimus natus corrupti blanditiis doloremque explicabo quia error laborum ipsa ipsum.</p>
        <div className='flex gap-7'>
        <button className='flex flex-start font-semibold bg-black px-4 py-1 rounded-2xl w-fit text-white'>Get Started</button>
        <button className='flex flex-start font-semibold px-4 py-1   '>LEARN MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Sleft
