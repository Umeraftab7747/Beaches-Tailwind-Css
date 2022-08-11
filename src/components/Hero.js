import React from "react";
import BeachVideo from "../assets/beachVid.mp4";

import { BsSearch } from "react-icons/bs";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover "
        src={BeachVideo}
        alt={"/"}
        autoPlay
        muted
        loop
      />
      <div className="w-full h-full absolute bg-gray-900/60 top-0">
        <div className="absolute top-0 flex flex-col text-center w-full h-full justify-center ">
          <h1 className="text-white font-bold text-3xl">
            Get Your Vaction Now!
          </h1>
          <p className="text-white text-xl py-3 pb-5">
            Top 1% Places of the World
          </p>
          {/* search bar */}
          <form className="w-[350px] md:w-[550px] h-[45px] mx-auto items-center bg-gray-100 flex justify-between rounded p-1 transition-all duration-300">
            <div>
              <input
                className="w-[210px] h-full bg-transparent "
                placeholder="Search Destination"
                type="text"
              />
            </div>
            <div>
              <button>
                <BsSearch />
              </button>
            </div>
          </form>
          {/* search bar */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
