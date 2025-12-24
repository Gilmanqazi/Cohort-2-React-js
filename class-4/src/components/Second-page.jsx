import React from 'react'
import HeadphoneImg from "../assets/person_headphones (3).png"

const Secondpage = () => {
  return (
    <div>
       <div className=' text-black min-h-[70vh] w-full '>
   <div className='flex py-10 px-5 justify-between'>
    <h1 className='text-8xl'>Designed to <br /> Help You Do <br /> More <i>With Less Stress</i></h1>
    <p className='text-[1.5rem] pt-40'>Our productivity app is build for <br /> modern professionals who <br /> want to stay organized focused and in controll</p>
   </div>

<div className='flex items-center justify-center h-70 py-4 px-5 gap-4'>

  <div className='flex flex-col gap-4'>
    <h1 className='font-bold'>Smart Task Management</h1>
    <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatibus modi dolorum nihil libero saepe eos culpa incidunt.</p>
  </div>

  <div className='flex flex-col gap-4'>
    <h1 className='font-bold'>Integrate Calender & Deadlines</h1>
    <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatibus modi dolorum nihil libero saepe eos culpa incidunt.</p>
  </div>

  <div className='flex flex-col gap-4'>
    <h1 className='font-bold'>Focus Mode</h1>
    <p className='font-semibold text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatibus modi dolorum nihil libero saepe eos culpa incidunt.</p>
  </div>
  
</div>

<div className='h-full w-full'>
  <img className='h-full w-full object-cover object-center' src={HeadphoneImg} alt="" />
</div>

   </div>
    </div>
  )
}

export default Secondpage
