import React from 'react';

const App = (props) => {
  console.log(props)
  return (
    <div className='h-screen w-full bg-black px-4 py-4 text-white'>
    <div
      className="h-[60%] w-[50%] bg-white rounded-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${props.bgImage})` }}>
<h1 className='py-3 px-5 text-center  '>{props.name}</h1>
<p className='text-center mt-22  text-xs py-0 px-5'>{props.description}</p>
<div  className='flex justify-between items-center gap-2 py-2 px-4'>
<div>
  <h4 className=' font-semibold'>{props.value}</h4>
  <p className='text-xs font-semibold'>{props.label}</p>
</div>

<div>
  <h4 className='font-semibold'>$45k+</h4>
  <p className='text-xs font-semibold'>Earned</p>
</div>

<div>
  <h4 className=' font-semibold'>$50/hr</h4>
  <p className='text-xs font-semibold'>Rate</p>
</div>
</div>

  <div className='flex justify-center gap-2  '>
        <button className=' bg-emerald-600 py-1 px-2 rounded-lg'>{props.primary}</button>
        <button className=' bg-emerald-600 py-1 px-2 rounded-lg'>{props.secondary}</button>
        </div>

   
      </div>
     
    </div>
  );
};

export default App;