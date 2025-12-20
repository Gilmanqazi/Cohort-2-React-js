import React from 'react';

const Navbar = () => {
  return (
    <div className='text-center h-200px w-100% flex justify-between px-8 py-6'>
<div>
  <h1 className='text-2xl  font-bold'>Starship</h1>
</div>
<div className=' flex gap-4 uppercase font-bold text-s'>
  <a href="#">home</a>
  <a href="#">pricing</a>
  <a href="#">services</a>
  <a href="#">blog</a>
  <a href="#">about us</a>
</div>
<div className=' flex gap-4 uppercase font-bold text-s'>
  <a href="#">login</a>
  <a href="#">get started</a>
</div>
    </div>
  );
};

export default Navbar;