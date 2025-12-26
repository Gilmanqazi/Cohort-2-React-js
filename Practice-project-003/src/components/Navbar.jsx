import React from 'react'
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="h-14 flex justify-between items-center px-10 ">
      <input
        className="bg-transparent border px-4 py-1 rounded-lg"
        placeholder="Search..."
      />

      <div className='flex items-center gap-4'>

      <div>
        <h1 className='text-xl'><IoMdNotificationsOutline /></h1>
      </div>

      <div className='h-10 w-10 rounded-full'>
        <img className='h-full w-full object-cover rounded-full' src="https://plus.unsplash.com/premium_photo-1722682239201-21c8173e776b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwbWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D" alt="" />
      </div>

      </div>

    </div>
  )
}


export default Navbar
