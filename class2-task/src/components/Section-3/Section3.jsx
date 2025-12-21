import React from 'react'
import Left from "./Left.jsx"
import Right from './Right.jsx'

const Section3 = () => {
  return (
    <div className='h-[120vh] w-[100%] text-white px-5 py4 flex gap-5'>
       {/* <h1 className='text-3xl mt-8 ml-6'>OUR ADVANTAGES</h1> */}
      <Left/>
      <Right/>
     
    </div>
  )
}

export default Section3
