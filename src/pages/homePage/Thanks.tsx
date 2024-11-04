// import React from 'react'

import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Thanks = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#150E28]  flex justify-center items-center bg-center bg-cover bg-boot-bg font-pop">
        <div className="w-[90%] md:w-[70%] lg:w-[50%] flex flex-col justify-center items-center gap-4 lg:gap-7">
            <div className="text-[150px] lg:text-[200px] text-white">
                <IoCheckmarkDoneCircle />
            </div>

            <div className=" text-white text-center text-[13px] md:text-[16px] lg:text-[20px]">
                Thank you for joining our Waitlist. We look forward to having a great experience with you. We will reach out to you for the latest updates on LYFECARE app. 
            </div>

            <p className="text-white  text-center text-[13px] md:text-[16px] lg:text-[20px]">
                Remember, Your health is most important to us..
            </p>

            {/* <a href="https://chat.whatsapp.com/HKRrDCXyjYAFbQo3FXmNMh" className="p-2 bg-blue-400 text-white px-5 rounded-[30px] hover:bg-[#3e4095] border-none  transition-all duration-500 ease-in-out animate-pulse">
                Join Whatsapp Community
            </a> */}
        </div>
    </div>
  )
}

export default Thanks