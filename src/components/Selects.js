import React from "react";

import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Maldives3 from "../assets/maldives3.jpg";
import KeyWest from "../assets/keywest.jpg";

function Selects() {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative">
        <img className="w-full h-full object-cover" src={BoraBora} alt="/" />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
            Bora Bora
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="w-full h-full object-cover" src={BoraBora2} alt="/" />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
            Maldives
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="w-full h-full object-cover" src={Maldives} alt="/" />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
            Antigua
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="w-full h-full object-cover" src={Maldives2} alt="/" />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
            Cozumel
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="w-full h-full object-cover" src={Maldives3} alt="/" />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
            Jamaica
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="w-full h-full object-cover" src={KeyWest} alt="/" />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
            Key West
          </p>
        </div>
      </div>

      {/* <SelectsCard bg={BoraBora} text='Bora Bora' />
  <SelectsCard bg={BoraBora2} text='Maldives' />
  <SelectsCard bg={Maldives} text='Antigua' />
  <SelectsCard bg={Maldives2} text='Cozumel' />
  <SelectsCard bg={Maldives3} text='Jamaica' />
  <SelectsCard bg={KeyWest} text='Key West' /> */}
    </div>
  );
}

export default Selects;
