// import React from 'react'

import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#150E28] bg-orange4  flex justify-center items-center bg-center bg-cover bg-boot-bg font-pop">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] flex flex-col justify-center items-center gap-4 lg:gap-7">
            <div className="text-[150px] lg:text-[200px] text-whit text-orange-400">
                <IoCheckmarkDoneCircle />
            </div>

            <p className=" text-white text-center text-[13px] md:text-[16px] lg:text-[20px]">
                Your Vote has been casted successfully.
            </p>

            <div className=" text-white text-center text-[13px] md:text-[16px] lg:text-[20px]">
                Thank you for participating in this poll. 
            </div>

            <NavLink to="/result">
                <button className="p-2 px-5 bg-orange-400 text-white rounded-[50px] text-[13px] md:text-[16px] font-bold animate-pulse">See Live Poll Results</button>
            </NavLink>

            <p className="text-white  text-center text-[13px] md:text-[16px] lg:text-[20px] mt-[20px] flex flex-col gap-1">
                <span>Note: This Poll does not in anyway have influence over the General Election.</span> <br />
                Go out and vote on November 16th, 2024.. Remember, Your Vote is Your Power..
            </p>

            {/* <a href="https://chat.whatsapp.com/HKRrDCXyjYAFbQo3FXmNMh" className="p-2 bg-blue-400 text-white px-5 rounded-[30px] hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out animate-pulse">
                Join Whatsapp Community
            </a> */}
        </div>
    </div>
  )
}

export default ThankYou