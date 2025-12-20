import React from 'react'
import girl  from "../assets/Starship-img.png"
import doller from "../assets/Starshipimg02.png"

const Sright = () => {
  return (
    <div className='h-full w-[50%]  px-8 py-7 '>
      <div>   
    <img src={doller} alt="doller" className='h-[200px] absolute z-10 right-46 bottom-[25%] w-[300px]' />
    </div>

    <div className='h-full w-[50%] bg-amber-300 rounded-full overflow-hidden  px-3 py-6 relative right-[-200px] bottom-[5%] '>
      <img src={girl}  alt="main-model" className=" rounded-full w-[300px]"/>
    </div>
    </div>
  )
}

export default Sright
