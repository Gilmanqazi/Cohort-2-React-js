import React from 'react'

const Card = (Props) => {
 
  return (
    <div className='h-90 w-60 bg-white rounded-xl '>
      <div className='h-[180px] w-fit overflow-hidden rounded-xl'>
      <img className='h-full object-cover object-center  ' src={Props.image} alt="" />
    </div>
    <h1 className='py-2 px-2'>{Props.title}</h1>
    <h3 className='py-0 px-2'>{Props.flavour}</h3>
    <p className='text-[12px] py-3 px-2'>{Props.description}</p>
    <div className='flex justify-between px-4 py-4'>
      <h1>{Props.price}</h1>
      <button style={{ backgroundColor: Props.bgColor }} className='bg-yellow-600 py-1 px-2 rounded-2xl text-xs text-white'>{Props.buttonText}</button>
    </div>
    </div>
  )
}

export default Card
