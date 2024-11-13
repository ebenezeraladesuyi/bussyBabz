// import React from 'react'

// import {AiOutlineUser} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { RiUser2Fill } from "react-icons/ri";

const ElectionHero = () => {
  return (
    <div className="w-full min-h-[100vh] flex justify-center items-center bg-bg5 bg-center bg-cover relative">
      <div className="w-full h-full bg-black opacity-50 absolute"></div>
      <div className="w-[90%] flex flex-col items-center md:flex-row md:justify-between gap-5 mt-[50px] md:mt-0 z-20">
        <div className="font-bold text-orange-400 flex flex-col text-center md:text-left items-center md:items-start gap-">
          <h1 className="text-[40px] md:text-[60px] lg:text-[80px]">ONDO</h1>
          <h2 className="text-[40px] md:text-[60px] lg:text-[80px]">DECIDES '24</h2>
          <h3 className="text-white w-[80%] md:text-[20px] text-[13px]">
            An Independent Online Poll for the Guber Election in Ondo State. 
          </h3>

          <NavLink to="/askmail2">
            <button className="bg-orange-400 p-2 px-7 text-white font-bold rounded-[30px] animate-bounce mt-[20px] border-none outline-none hover:bg-[#063e60] ] transition-all duration-700 ease-in-out">
              Vote Now
            </button>
          </NavLink>
        </div>

        <div className="  ">
          <div className="border-[4px border-black w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] text-[350px] rounded-full flex items-center justify-center overflow-hidden relative">
            <RiUser2Fill />
            <div className="w-full h-full bg-black opacity-75 absolute"></div>
            <h4 className="text-white absolute top-[5%] text-[130px] lg:text-[300px]">?</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElectionHero