import React from 'react'

const Card = (Props) => {
 
  return (
    <div className=' bg-white border-2 border-red-500 rounded-xl h-40 px-5 py-3 w-40 text-center items-center  text-black '>
  <h1> {Props.user}</h1>
    </div>
  )
}

export default Card
