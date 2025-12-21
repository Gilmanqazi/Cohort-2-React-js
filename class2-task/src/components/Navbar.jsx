import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 w-[100%] flex items-center justify-between py-5 px-5 text-white">
      <div>
        <h1>DVSY</h1>
      </div>

      <div className="flex gap-2 text-xs ">
        <a className="bg-[#333] py-1 px-4 rounded-xs" href="#">
          DESIGNERS
        </a>
        <a className="bg-[#333] py-1 px-4 rounded-xs" href="#">
          COLLABS
        </a>
        <a className="bg-[#333] py-1 px-4 rounded-xs" href="#">
          EVENTS
        </a>
        <a className="bg-[#333] py-1 px-4 rounded-xs" href="#">
          BLOG
        </a>
        <a className="bg-[#333] py-1 px-4 rounded-xs" href="#">
          CARD
        </a>
        <button className="bg-[#ed7459] py-1 px-4 rounded-xs">GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default Navbar;
