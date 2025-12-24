import React from 'react'


const Section3 = () => {

  return (
    <div className='py-5 px-7 flex gap-4 '>
<div className='h-[60vh] w-[50%] bg-sky-950 overflow-hidden rounded-xl '>
<img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1758328522081-3322352200df?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>

<div className='h-[60vh] w-[50%] rounded-xl py-0 px-5 flex flex-col gap-3' >
<h1 className='text-4xl  font-medium'>Find Your Perfect <br />Look at Jolt,s Stylish <br /> New on Tokyo</h1>
<p className='text-s font-semibold text-[#444]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptate doloribus beatae deleniti voluptatibus dicta fuga alias optio, dolore sed, numquam iure eius officiis magnam quam voluptatem ipsum porro quis.</p>

<div className='flex flex-col gap-4 mt-0 ' >
<h3 className='text-xl font-medium'>Come and Enjoy Sale!</h3>
<h1 className='text-7xl font-bold'>50%</h1>
<button className='w-fit py-1 px-5 bg-black rounded-full text-white'>See On Map</button>
</div>

</div>
    </div>
  )
}

export default Section3
