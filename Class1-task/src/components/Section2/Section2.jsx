import React from 'react'

const Section2 = () => {
  //Main Div Start
  return (
    <div className=' h-full w-full bg-black text-white'>
  <div className='flex justify-between py-0 px-15'>
   <div>
    <button>About Horizon</button>
    </div>
    
    <div>
      <h1>At Horizon, we don't just play tennis - we live it. Since 2021, <br /> our club has been a home for players of all levels, from eager <br /> beginners to seasoned pros.</h1>
    </div>
    </div>

{/* Box Main Div Start */}
    <div className='flex gap-3  justify-between py-10 px-10 '>


      <div className='h-[300px] w-[330px] bg-indigo-950 flex flex-col justify-between  py-15 px-10 rounded-2xl' >
        <h1>Professional hard courts <br /> <span className='text-gray-600'>with tournament-grade lighting & climate control -- <br /> play in </span> perfect conditios, in any season,</h1>
        <div>
          <button className='bg-sky-500 py-1 px-2 rounded-2xl'>Game Mode</button>
        </div>
      </div>

      <div  className='h-[300px] w-[330px] bg-[url("https://plus.unsplash.com/premium_photo-1733342645393-8d00c5e901b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNwb3J0JTIwbWVufGVufDB8fDB8fHww")] bg-cover bg-center bg-no-repeat flex justify-center items-center rounded-2xl'>
        <h1 className='bg-transparent py-1 px-2 rounded-2xl text-white backdrop-blur-xs '>Private & Group Lesson</h1>
      </div>

      <div  className='h-[300px] w-[330px] rounded-2xl bg-gray-300 flex flex-col justify-between text-black  py-7 px-8'>
        <div>
        <h1 className='text-5xl font-bold'>100+</h1>
        <h4 className='text-xl'>Pro Coaches</h4>
        <p className='text-gray-500'>Certified professionals ready to boost your  game from first serve to tournament level</p>
        </div>

        <div className='leading-6'>
          <h1>Beginner <span className='text-blue-600 '>oooooooooo</span></h1>
          <h1>Intermediate <span className='text-blue-600 '>oooooooo</span></h1>
          <h1>Advanced <span className='text-blue-600 '>ooooooooo</span></h1>
        </div>

      </div>

{/* Box Main Div End */}
    </div>

    <h1 className='text-center'>A few more facts about us in numbers</h1>
{/* Progress Div  */}
    <div className='flex justify-between py-5 px-20 text-center '>

      <div>
        <h1>12000+</h1>
        <h5>Hours of play annually</h5>
      </div>

      <div>
        <h1>89%</h1>
        <h5>Player Retantion Rate</h5>
      </div>

      <div>
        <h1>1,299+</h1>
        <h5>Active members</h5>
      </div>

      <div>
        <h1>125+</h1>
        <h5>Annual Tournament</h5>
      </div>
    </div>


{/* Bottom Div  */}
    <div className='flex gap-3 bg-black  justify-between py-10 px-10 '>


      <div className='h-[300px] w-[330px] bg-indigo-950 flex flex-col justify-between  py-15 px-10 rounded-2xl' >
        <h1>Professional hard courts <br /> <span className='text-gray-600'>with tournament-grade lighting & climate control -- <br /> play in </span> perfect conditios, in any season,</h1>
        <div>
          <button className='bg-black py-1 px-2 rounded-2xl'>Explore More</button>
        </div>
      </div>

      <div  className='h-[300px] w-[330px] bg-[url("https://media.istockphoto.com/id/542197824/photo/portrait-of-a-man-tying-shoelaces.webp?a=1&b=1&s=612x612&w=0&k=20&c=5exN-PJBu_hsWDRIl5bfWNEijd4euwlKsSclYgwukB8=")] bg-cover bg-center bg-no-repeat flex justify-center items-center rounded-2xl'>
        <h1 className='bg-transparent py-1 px-2 rounded-2xl text-white backdrop-blur-xs '>Training Program</h1>
      </div>

      <div  className='h-[300px] w-[330px] rounded-2xl bg-gray-300 flex flex-col justify-between text-black  py-7 px-8   bg-[url("https://images.unsplash.com/photo-1670898839060-8b0a8902ee1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVubmlzJTIwYmFsbHxlbnwwfHwwfHx8MA%3D%3D")] bg-cover bg-center bg-no-repeat'>

      <h1 className='bg-transparent w-fit py-1 px-2 rounded-2xl text-white backdrop-blur-xl '>Hourly Court Rental</h1>
   
      </div>

{/* Bottom  Main Div End */}
    </div>
  
  {/* Main div End */}
    </div>

    
  )
}

export default Section2
