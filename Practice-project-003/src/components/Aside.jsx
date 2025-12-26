import React from 'react'
import { MdOutlineMenuOpen } from "react-icons/md";
import { MdLiveTv } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { FaSquarespace } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { GoFileDirectory } from "react-icons/go";
import { FaDownload } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

const Aside = () => {
  return (
    <div className="w-[18vw] h-[150vh] border-2 p-5 rounded-xl ">

      <div className='flex justify-between py-2 px-1 items-center'>
        <h1 className='text-2xl font-semibold flex items-center gap-1'><MdLiveTv className='text-violet-500 text-3xl' /> Drameeo</h1>
        <h5 className='text-3xl font-semibold '><MdOutlineMenuOpen /></h5>
      </div>

<div className='flex flex-col gap-10'>

<div className='flex flex-col gap-4 py-2 px-1 '>
  <a className='flex items-center gap-3 text-violet-300' href="#"><FaHome className='text-violet-500 '/> Home</a>
  <a className='flex items-center gap-3' href="#"><MdExplore /> Explore</a>
  <a className='flex items-center gap-3' href="#"><FaSquarespace />Genres</a>
  <a className='flex items-center gap-3' href="#"><MdFavorite /> Favourites</a>
</div>


<div className='flex flex-col gap-4 py-2 px-1 '>
  <a className='flex items-center gap-3' href="#"><FaPlay /> Contonue Watching</a>
  <a className='flex items-center gap-3' href="#"><IoMdTime />Recently Added</a>
  <a className='flex items-center gap-3' href="#"><GoFileDirectory />My Collection</a>
  <a className='flex items-center gap-3' href="#"><FaDownload /> Downloads</a>
</div>


<div className='flex flex-col gap-4 py-2 px-1 '>
  <a className='flex items-center gap-3' href="#"><IoSettingsOutline />Settings</a>
</div>

</div>

    </div>
  )
}


export default Aside
