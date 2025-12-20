import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-5 py-5 text-white border-b-2'>
   <div>
    <h1>Horizon Courts</h1>
    </div>
   <div className='flex gap-8 '>
   <a href="#">About Us</a>
   <a href="#">Services</a>
   <a href="#">Coaches</a>
   <a href="#">Events</a>
   <a href="#">Contacts</a>
   </div>
   <div className='py-1 px-5 bg-white rounded-2xl text-black'>
    <button>Book Now</button>
    </div>
    </div>
  )
}

export default Navbar
