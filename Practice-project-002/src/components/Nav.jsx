import React from 'react'




const Nav = () => {
  return (
    // Main Div
    <div className='py-7 px-5 flex justify-between text-white '>

  <div className='flex gap-10 items-center'>
    <h1 className='text-3xl font-bold'>Jolt</h1>
    <div className='font-semibold text-xl flex gap-5' >
      <a href="#"> Categories</a>
      <a href="#">Collection</a>
      <a href="#">Store</a>
      <a href="#">Blog</a>
      <a href="#">Find Store</a>
    </div>
  </div>

  <div className='flex items-center font-semibold text-xl gap-5'>
    <a href="#">Search</a>
    <a href="#"> Cart</a>
    <a href="#">Login</a>
  </div>
    </div>
  )
}

export default Nav
