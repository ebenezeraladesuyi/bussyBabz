import React from 'react'

// import {IoIosArrowDropdown} from "react-icons/io";
// import { MdClose } from "react-icons/md";
// import lady from "../../assets/images/lady-2.jpg";

// import apc from "../../assets/images/apc.jpg";

interface iCard {
    image: string;
    logo: string;
    name: string;
    brief: string;
}


const ElectionCard:React.FC<iCard> = ({image, name, brief, logo}) => {

    // const [open, setOpen] = React.useState(false)

    // const drop = () => {
    //     setOpen(!open)
    // }

  return (
    <div className="w-[300px]  lg:w-[24%] p-[10px] text-white">
        <img className="w-full h-[280px] rounded-[10px]" src={image} alt="" />

        <div className="mt-[10px] flex justify-between items-center border-[1px] border-gray-400 p-2 rounded-md">
            <h1 className="text-[15px] md:text-[17px] font-bold">
                {/* HON. LUCY AYEDAMIDATHA */}
                {name}
                <img className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full overflow-hidden mt-[5px]" src={logo} alt="" />
            </h1>

            {/* { open ? 
                (<span onClick={drop} className="text-[22px] md:text-[26px] cursor-pointer"><MdClose /></span>)
            : */}
                {/* (<span  className="text-[22px] md:text-[26px]  cursor-pointer"><IoIosArrowDropdown /></span>) */}
            {/* } */}

        </div>

        {/* {
            open ?   */}
            <div className="text-[12px] md:text-[14px] text-justify mt-[6px] transform transition-all duration-700 ease-in-out">
                <p>
                    {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo labore animi ut veritatis dignissimos a aliquam ratione accusamus. Amet in, hic corporis consequatur tempore eum beatae earum qui sit. Dolorum. */}
                    {brief}
                </p>

                {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi harum repellendus cum perspiciatis quis facilis atque sit tempore provident totam.
                </p> */}
            </div> 
        {/* :   
            null
        } */}
    </div>
  )
}

export default ElectionCard