import React from 'react'

const Navbar = () => {

  return (
   <div className='h-20 w-full bg-[#ddd3d3] flex items-center justify-between py-2 px-13'>

<div><h1 className='font-bold'>Enblox</h1></div>

<div className='flex gap-6 font-semibold'>
<h4>Home</h4>
<h4>Services</h4>
<h4>Features</h4>
<h4>Blog</h4>
<h4>Pricing</h4>
</div>

<div className='py-1 px-4 border-2 rounded-2xl'>
  <button>TRY IT FOR FREE</button>
</div>


</div>
  )
}

export default Navbar
