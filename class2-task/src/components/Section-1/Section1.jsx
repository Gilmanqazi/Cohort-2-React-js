import React from 'react'
import mainimg from "../Section-1/Main-img.jpeg"

const Section1 = () => {
  return (
    // Main div
    <div className='py-3 px-4'>

{/* MAin Img Div */}
      <div className="h-[85vh] w-[100%] bg-cover bg-top rounded-xs"
      style={{ backgroundImage: `url(${mainimg})` }}>
     {/* Main ke img ka Text */}

     <div className='text-white relative'>
<h1 className='text-7xl absolute top-40 left-20'>DESIGN </h1>
<h1  className='text-7xl absolute top-60 left-40'> & FREEDOM</h1>
<p className='text-1xl absolute top-80 left-40'>Explore Indeoendent Style by Embracing Uniqueness <br /> with Our Exclusive Designer Appare!</p>
     </div>
      </div>
<div className='h-50 w-[100%]  mt-3 py-3 px-0 flex gap-2 '>

<div className='h-45 w-70 bg-[#333] flex flex-col justify-between px-5 py-7 text-white'>
<div className='flex flex-col gap-4'>
  <h1>INDEPENDENCY</h1>
  <p className='text-xs'>Explore the creativity of independent br designs from around the globle</p>
</div>
<div>
  <button>LEARN MORE</button>
</div>
</div>

<div className='h-45 w-70 bg-[#333] flex flex-col justify-between px-5 py-7 text-white'>
<div className='flex flex-col gap-4'>
  <h1>UNIQUITY</h1>
  <p className='text-xs'>Discover the charm of unique pieces that stand out effortlessly</p>
</div>
<div>
  <button>LEARN MORE</button>
</div>
</div>

<div className='h-45 w-70 bg-[#333] flex flex-col justify-between px-5 py-7 text-white'>
<div className='flex flex-col gap-4'>
  <h1>QUALITY</h1>
  <p className='text-xs'>Expreinces unparalleled craftmanship and attention to details</p>
</div>
<div>
  <button>LEARN MORE</button>
</div>
</div>

<div className='h-45 w-70 bg-[#333] flex flex-col justify-between px-5 py-7 text-white'>
<div className='flex flex-col gap-4'>
  <h1>SUSTAINABILITY</h1>
  <p className='text-xs'>Embarace eco-consious fashion chaices without compromising in style</p>
</div>
<div>
  <button>LEARN MORE</button>
</div>
</div>

</div>

<div className='h-30 w-[100%] flex items-center py-5 px-7 text-white justify-between'>
  <div>
<p className='text-xs'>DESIGNERS</p>
<h1 className='text-4xl font-bold'> 150+</h1>
  </div>

  <div>
<p  className='text-xs'>CLIENTS</p>
<h1 className='text-4xl font-bold'>500+</h1>
  </div>

  
  <div>
<p  className='text-xs'>MASTERPIECES</p>
<h1 className='text-4xl font-bold'>20K+</h1>
  </div>

  
  <div>
<p  className='text-xs'>EVENTS</p>
<h1 className='text-4xl font-bold'>50+</h1>
  </div>

</div>

    </div>
  )
}

export default Section1
