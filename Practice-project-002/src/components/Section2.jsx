import React from 'react'

const Section2 = (props) => {
  // console.log(props.price)
  
  return (
    <div className='h-full w-[40vh]  bg-[#9286868a]  py-5 px-5 flex flex-col justify-center  '>

      <div className='h-70 w-55 overflow-hidden rounded-lg'>
<img className=' h-full w-full  object-cover object-center' src={props.img} alt="" />
      </div>
      <div className='flex flex-col gap-1 '>
      <h1 className='text-lg font-semibold'>{props.name}</h1>
      <p className='font-semibold'>{props.price}</p>
      </div>

    </div>
  )
}

export default Section2
