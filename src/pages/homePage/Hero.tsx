import React, { useState, useEffect } from 'react';
import {motion}  from "framer-motion";
import { FaFacebookSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const HeroPage: React.FC = () => {
  // Define an array of background image URLs
  const backgroundImageUrls = [
    'url("/hero/lyfe.jpg")',
    'url("/hero/insurance3.jpg")',
    'url("/hero/insurance2.jpg")',
    'url("/hero/insurance.jpg")',
  ];

  // State to manage the index of the current background image
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

  // Function to handle changing the background image
  const changeBackground = () => {
    setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % backgroundImageUrls.length);
  };

  useEffect(() => {
    // Automatically change background every 2 seconds
    const intervalId = setInterval(changeBackground, 3000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <motion.div
      className="bg-cover bg-center w-full h-screen flex justify-center items-center font-pop relative overflow-hidden"  

      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}

      style={{
        backgroundImage: backgroundImageUrls[currentBackgroundIndex],
        transition: 'background-image 2s ease',
      }}
      >
        <div className="absolute bg-black h-full w-full top-0 left-0 opacity-60 "></div>

        <div className="w-[90%] lg:w-[90%] h-full z-30 text-white flex flex-col gap-4 justify-center items-center md:items-start mt-[60px] md:mt-[100px] overflow-hidden">

            {/* <motion.h5 className='text-[17px] text-center md:text-left tracking-[7px] md:text-[16px] font-bold lg:text-[22px] md:tracking-[9px] text-[#23a1db] bg-white w-[250px] lg:w-[300px] p-1 rounded-[20px] flex justify-center items-center lg:mb-[15px]'
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                WELCOME TO
            </motion.h5> */}

            <div className="text-white text-[35px] md:text-[60px] lg:text-[70px] font-bold flex flex-col md:flex-ro gap-2 md:gap-3 lg:gap-4 leading-[35px] lg:leading-[65px] text-center md:text-left mt-[px]">
                {/* <div className="flex flex-col md:flex-row items-center gap-2"> */}

                    <motion.h5 className="md:hidde"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.4 }}
                    >YOUR HEALTH</motion.h5>

                    {/* <div className="flex flex-col md:flex-row items-center gap-"> */}
                        <motion.h5 className="" 
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                        >YOUR FUTURE &nbsp;</motion.h5>

                        <motion.h5 className=""
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.0 }}
                        >YOUR CHOICE</motion.h5>
                    {/* </div> */}
                {/* </div> */}

                <motion.h6 className="text-white font-bol text-[12px] md:text-[16px] md:w-[60%] lg:w-[55% leading-[18px] md:leading-[25px]"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.7 }}
                >
                    ...Save Small, Live Healthy.
                </motion.h6>
            </div>

            <NavLink to="/joinwaitlist">
                <motion.button className="w-[150px md:w-[200px py-2 bg-blue-500 text-white rounded-lg text-[15px] md:text-[18px] animate-pulse"
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.9 }}
                >
                    Join Our Waitlist
                </motion.button>
            </NavLink>

            <div className="flex gap-3 items-center">
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.2 }}
            >
                    <FaSquareInstagram />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.5 }}
            >
                    <FaFacebookSquare />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px]"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 2.8 }}
            >
                    <FaTwitter />
                </motion.a>
                <motion.a href="" className="text-white text-[20px] md:text-[30px] "
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 3.1 }}
            >
                    <FaYoutube />
                </motion.a>
            </div>

        </div>
    </motion.div>
  );
};

export default HeroPage;