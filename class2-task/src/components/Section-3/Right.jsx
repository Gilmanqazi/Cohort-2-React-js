import React from "react";
import Model3 from "../Section-3/Model3.png"

const Right = () => {
  return (
    <div className="h-[100%] w-[100%] ">
      <div className="h-[25vh] w-[100%] bg-[#333]  py-3 px-5 text-white  rounded-[0.5rem] mt-6 flex  flex-col gap-3">
        <h1>INDEPENDEN DESIGNERS</h1>
        <p className="text-[0.6rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          adipisci reiciendis accusantium labore quo! Fugit illo quasi officiis
          pariatur quod tenetur hic ab magnam reiciendis, earum vel aliquid,
          quos error deserunt placeat voluptas a. Quae molestiae quaerat a magni
          dicta harum delectus, voluptates quam perspiciatis quia optio, cumque
          consequatur minima.
        </p>
      </div>

      <div className="h-[25vh] w-[100%] bg-[#333]  py-3 px-5 text-white  rounded-[0.5rem] mt-6 flex  flex-col gap-3">
      <h1>EXCLUSIVE & UNIQUITY</h1>
        <p className="text-[0.6rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
          adipisci reiciendis accusantium labore quo! Fugit illo quasi officiis
          pariatur quod tenetur hic ab magnam reiciendis, earum vel aliquid,
          quos error deserunt placeat voluptas a. Quae molestiae quaerat a magni
          dicta harum delectus, voluptates quam perspiciatis quia optio, cumque
          consequatur minima.
        </p>
      </div>

        <div className='h-[55vh] w-[100%] bg-[#333]  py-3 px-5 text-white bg-cover  rounded-[0.5rem] mt-6'
        style={{ backgroundImage: `url(${Model3})`,}}>
      
            </div>
    </div>
  );
};

export default Right;
