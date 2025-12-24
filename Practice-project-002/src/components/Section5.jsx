import React from 'react'

const Section5 = () => {
  return (
    <div className='h-screen w-full bg-black flex flex-col ' >

    <div className='text-white bg-blue-600 h-[50vh] flex flex-col items-center justify-center gap-7
    bg-[url("https://images.unsplash.com/photo-1681474172645-3931276cf5c3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTJGd2hpdGUlMjBzcG9ydHxlbnwwfHwwfHx8MA%3D%3D")] bg-no-repeat bg-cover bg-center'>
<h1 className='text-center text-2xl font-semibold'>Sing Up to Our Newsletter</h1>
<p className='text-center text-lg font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, sit?</p>
<div className=' flex gap-3'>
<input className='bg-transparent text-white py-2 px-10  rounded-full  border-2 ' type="email" placeholder='Your Email' />
<button className='bg-amber-50 py-1 px-10 text-black rounded-full'>Submit</button>
</div>
    </div>


    <div className='text-white h-[50vh] flex  py-20 px-10 gap-20 justify-between '>
<div className='flex flex-col gap-4 '>
  <h1 className='text-5xl font-semibold'>Jolt</h1>
  <p className='w-[70vh] font-normal text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, deleniti?Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ipsam perferendis, consectetur alias quia perspiciatis, similique, </p>
</div>

<div className='flex flex-col'>
<h1 className='text-xl font-semibold '>Categories</h1>
<a href="#">Jacket</a>
<a href="#">Shirt</a>
<a href="#">T-shirt</a>
<a href="#">Bottoms</a>
<a href="#">Accesories</a>
<a href="#">Night-Pant</a>
</div>

<div className='flex flex-col'>
<h1 className='text-xl font-semibold'>Customer Care</h1>
<a href="#">FAQ</a>
<a href="#">Shipping</a>
<a href="#">Order Status</a>
<a href="#">Return & Exchange</a>
</div>

<div className='flex flex-col'>
<h1 className='text-xl font-semibold'>Company</h1>
<a href="#">Privacy</a>
<a href="#">Guides</a>
<a href="#">Term & Conditions</a>
</div>
    </div>
    </div>
  )
}

export default Section5
