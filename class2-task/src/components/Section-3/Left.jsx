import React from 'react'
import Model2 from '../Section-3/Model2.png'

const Left = () => {
  return (
    <div className='h-[100%] w-[100%]'>
      <div className='h-[55vh] w-[100%] bg-[#333]  py-3 px-5 text-white bg-cover  rounded-[0.5rem] mt-6'
  style={{ backgroundImage: `url(${Model2})`,}}>
      </div>

      <div className="h-[25vh] w-[100%] bg-[#333]  py-3 px-5 text-white  rounded-[0.5rem] mt-6 flex  flex-col gap-3">
        <h1>HIGH QUALITY</h1>
        <p className="text-[0.6rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          adipisci reiciendis accusantium labore quo! Fugit illo quasi officiis
          pariatur quod tenetur hic ab magnam reiciendis, earum vel aliquid,
          quos error deserunt placeat voluptas a. Quae molestiae quaerat a magni
          dicta harum delectus, voluptates quam perspiciatis quia optio, cumque
          consequatur minima.
        </p>
      </div>

      <div className="h-[25vh] w-[100%] bg-[#333]  py-3 px-5 text-white  rounded-[0.5rem] mt-6 flex  flex-col gap-3">
      <h1>ECO-FRIENDLY</h1>
        <p className="text-[0.6rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          adipisci reiciendis accusantium labore quo! Fugit illo quasi officiis
          pariatur quod tenetur hic ab magnam reiciendis, earum vel aliquid,
          quos error deserunt placeat voluptas a. Quae molestiae quaerat a magni
          dicta harum delectus, voluptates quam perspiciatis quia optio, cumque
          consequatur minima.
        </p>
      </div>
    </div>
  )
}

export default Left
