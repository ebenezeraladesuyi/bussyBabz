import React from 'react'
// import { MdClose } from "react-icons/md";

const SelectCand = () => {
    const [selectedCandidate, setSelectedCandidate] = React.useState("");
  
    const handleSelection = (event : any) => {
      setSelectedCandidate(event.target.value);
    };
  
    return (
      <div className="w-full min-h-[100vh] flex justify-center items-center relative bg-bg6 bg-cover bg-center">
        <div className="w-full h-full absolute bg-black opacity-35"></div>
  
        <div className="w-[90%] flex flex-col z-20 gap- items-center mt-[80px]">
          <h1 className="text-[18px] md:text-[22px] font-bold text-white text-center">
            Please, select your preferred candidate <br />
            <span className="text-[14px] md:text-[19px]">
              (Note: You can only vote once with an Email.)
            </span>
          </h1>
  
          <form
            className="w-full md:w-[60%] lg:w-[40%] flex flex-col gap-4 bg-whit p-7 rounded-lg"
            action=""
          >
            <div className="flex gap-3 items-center">
              <input
                className="w-[20px] h-[20px] rounded-sm"
                type="radio"
                name="candidate"
                value="LUCKY AIYEDATIWA (APC)"
                checked={selectedCandidate === "LUCKY AIYEDATIWA (APC)"}
                onChange={handleSelection}
              />
              <h2 className="text-[17px] md:text-[23px] text-white font-bold">
                LUCKY AIYEDATIWA (APC)
              </h2>
            </div>
  
            <div className="flex gap-3 items-center">
              <input
                className="w-[20px] h-[20px] rounded-sm"
                type="radio"
                name="candidate"
                value="AGBOOLA AJAYI (PDP)"
                checked={selectedCandidate === "AGBOOLA AJAYI (PDP)"}
                onChange={handleSelection}
              />
              <h2 className="text-[17px] md:text-[23px] text-white  font-bold">
                AGBOOLA AJAYI (PDP)
              </h2>
            </div>
  
            <div className="w-full flex gap-3 items-center">
              <input
                className="w-[26px] h-[26px] rounded-sm"
                type="radio"
                name="candidate"
                value="AYODELE FESTUS OLORUNFEMI (LP)"
                checked={selectedCandidate === "AYODELE FESTUS OLORUNFEMI (LP)"}
                onChange={handleSelection}
              />
              <h2 className="text-[17px] md:text-[23px] text-white font-bold">
                AYODELE FESTUS OLORUNFEMI (LP)
              </h2>
            </div>
  
            <div className="flex gap-3 items-center">
              <input
                className="w-[30px] h-[30px] rounded-sm"
                type="radio"
                name="candidate"
                value="OLUGBENGA OMOGBEMI EDEMA (NNPP)"
                checked={selectedCandidate === "OLUGBENGA OMOGBEMI EDEMA (NNPP)"}
                onChange={handleSelection}
              />
              <h2 className="text-[17px] md:text-[23px] text-white font-bold">
                OLUGBENGA OMOGBEMI EDEMA (NNPP)
              </h2>
            </div>
  
            <button
              className="bg-orange-400 text-white text-[14px] font-bold w-full h-[40px] border-none outline-none rounded-[30px] hover:bg-[#063e60] transition-all duration-700 ease-in-out cursor-pointer animate-pulse"
              type="submit"
            >
              Vote
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default SelectCand;
  