import React from "react";
import { FaPlay } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { HiDotsHorizontal } from "react-icons/hi";

const Section1 = () => {
  return (
    <div className="p-10 h-full w-full  ">
      <div className="h-full w-full rounded-3xl relative ">
        <img
          className="h-full w-full object-cover overflow-hidden rounded-3xl object-center"
          src="https://www.filmibeat.com/wimg/mobi/2014/09/i_141049513600.jpg"
          alt=""
        />

        <div className="absolute top-10 left-10">
          <h1 className="bg-white/15 text-white backdrop-blur-4xl py-1 px-4 rounded-full">
            🔥 Now Trending
          </h1>
        </div>

        <div className="absolute top-40 left-10 flex gap-4">
          <h1 className="bg-white/15  text-white backdrop-blur-4xl py-1 px-4 rounded-full">
            Romance
          </h1>
          <h1 className="bg-white/15 text-white backdrop-blur-4xl py-1 px-4 rounded-full">
            Thriller
          </h1>
          <h1 className="bg-white/15 text-white backdrop-blur-4xl py-1 px-4 rounded-full">
            Action
          </h1>
          <h1 className="bg-white/15 text-white backdrop-blur-4xl py-1 px-4 rounded-full">
            Drama
          </h1>
        </div>

        <div className="absolute top-70 left-10 flex flex-col gap-4">
          <h1 className="text-5xl text-[#e00b1d] font-semibold">I (2025)</h1>
          <p className="text-lg font-medium text-white">
            Love turns into obsession when betrayal destroys a <br /> brilliant
            artist’s life, pushing him toward a dark path of <br /> revenge.
          </p>

          <div className=" flex items-center gap-5">
            <button className="py-2 px-5 flex items-center gap-3 bg-violet-500 rounded-lg">
              {" "}
              <FaPlay />
              Watch Now
            </button>
            <FaDownload className="text-2xl" />
            <HiDotsHorizontal className="text-2xl" />
          </div>
        </div>
      </div>

      <div>
        <div className="flex justify-between py-5 px-0">
          <h1 className="text-2xl font-semibold">Continue Watching</h1>
          <h4 className="py-1 px-3 bg-gray-600 text-white rounded-lg">See All</h4>
        </div>

        <div className="flex flex-wrap justify-between mb-7 text-white ">
          <div className='h-[23vh] w-[22vw] rounded-xl bg-[url("https://www.filmibeat.com/wimg/mobi/2014/09/i_141049513600.jpg")] bg-cover relative'>
            <h1 className="absolute bottom-11 left-2 text-xl font-medium capitalize">
              dark path of revenge.
            </h1>

            <div className="absolute bottom-4 left-2 flex justify-between w-full px-5 font-medium">
              <h4 className="py-0 px-3 bg-white/15 text-white backdrop-blur-4xl rounded-full">Movie</h4>
              <h4>30min 20sec</h4>
            </div>

            <div className="h-1 w-[20vw] rounded-full bg-gray-100  absolute bottom-2 left-5 ">
              <div className="h-full w-[10vw] bg-purple-500 rounded-full "></div>
            </div>
          </div>

          <div className='h-[23vh] w-[22vw] rounded-xl bg-[url("https://cdn.dribbble.com/userupload/7252256/file/original-0ffbfa4287889182faf1193fdb696ef8.jpg")] bg-cover relative'>
            <h1 className="absolute bottom-11 left-2 text-xl font-medium capitalize">
              Reddy
            </h1>

            <div className="absolute bottom-4 left-2 flex justify-between w-full px-5 font-medium">
              <h4 className="py-0 px-3 bg-white/15 text-white backdrop-blur-4xl rounded-full">Movie</h4>
              <h4>30min 20sec</h4>
            </div>

            <div className="h-1 w-[20vw] rounded-full bg-gray-100  absolute bottom-2 left-5 ">
              <div className="h-full w-[10vw] bg-purple-500 rounded-full "></div>
            </div>
          </div>

          <div className='h-[23vh] w-[22vw] rounded-xl bg-[url("https://xstreamcp-assets-msp.streamready.in/assets/SONYLIV_VOD/MOVIE/6787a127e561811c32ef770d/images/pani_1_1920x1080_clean_airtel_landscape.jpg")] bg-cover relative'>
            <h1 className="absolute bottom-11 left-2 text-xl font-medium capitalize">
              Love Story
            </h1>

            <div className="absolute bottom-4 left-2 flex justify-between w-full px-5 font-medium">
              <h4 className="py-0 px-3 bg-white/15 text-white backdrop-blur-4xl rounded-full">Movie</h4>
              <h4>30min 20sec</h4>
            </div>

            <div className="h-1 w-[20vw] rounded-full bg-gray-100  absolute bottom-2 left-5 ">
              <div className="h-full w-[10vw] bg-purple-500 rounded-full "></div>
            </div>
          </div>
        </div>

        <div className="flex justify-between py-5 px-0">
          <h1 className="text-2xl font-semibold">You Might Like</h1>
          <h4 className="py-1 px-3 bg-gray-600 text-white rounded-lg">See All</h4>
        </div>

        <div className="flex justify-between text-white">
          <div className='h-[23vh] w-[22vw] rounded-xl bg-[url("https://www.tallengestore.com/cdn/shop/products/BeautyAndTheBeast-LiveAction-HollywoodEnglishMoviePoster_3f70710e-5d7c-4b01-8aa3-ee9b40961e58.jpg?v=1625220679")] bg-cover relative'>
            <h1 className="absolute bottom-11 left-2 text-xl font-medium capitalize">
              Beauty and the Beast
            </h1>

            <div className="absolute bottom-4 left-2 flex justify-between w-full px-5 font-medium">
              <h4 className="py-0 px-3 bg-white/15 text-white backdrop-blur-4xl rounded-full">Movie</h4>
              <h4>30min 20sec</h4>
            </div>

            <div className="h-1 w-[20vw] rounded-full bg-gray-100  absolute bottom-2 left-5 ">
              <div className="h-full w-[10vw] bg-purple-500 rounded-full "></div>
            </div>
          </div>

          <div className='h-[23vh] w-[22vw] rounded-xl bg-[url("https://i.ytimg.com/vi/OHyWQ2Q41Jo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDD0uGkr2H56IQ1oSfxKH3wFRvaRQ")] bg-cover relative'>
            <h1 className="absolute bottom-11 left-2 text-xl font-medium capitalize">
               revenge.
            </h1>

            <div className="absolute bottom-4 left-2 flex justify-between w-full px-5 font-medium">
              <h4 className="py-0 px-3 bg-white/15 text-white backdrop-blur-4xl rounded-full">Movie</h4>
              <h4>30min 20sec</h4>
            </div>

            <div className="h-1 w-[20vw] rounded-full bg-gray-100  absolute bottom-2 left-5 ">
              <div className="h-full w-[10vw] bg-purple-500 rounded-full "></div>
            </div>
          </div>

          <div className='h-[23vh] w-[22vw] rounded-xl bg-[url("https://stat4.bollywoodhungama.in/wp-content/uploads/2016/03/56269401.jpg")] bg-cover relative'>
            <h1 className="absolute bottom-11 left-2 text-xl font-bold capitalize text-red-600">
         English vinglish
            </h1>

            <div className="absolute bottom-4 left-2 flex justify-between w-full px-5 font-medium">
              <h4 className="py-0 px-3 bg-white/15 text-white backdrop-blur-4xl rounded-full">Movie</h4>
              <h4>30min 20sec</h4>
            </div>

            <div className="h-1 w-[20vw] rounded-full bg-gray-100  absolute bottom-2 left-5 ">
              <div className="h-full w-[10vw] bg-purple-500 rounded-full "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
