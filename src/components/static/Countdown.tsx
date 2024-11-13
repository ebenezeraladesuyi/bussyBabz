import React, { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
//   console.log(timeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetDate]);

  return (
    <div className="w-full flex gap-3 md:gap-4 lg:gap-7 items-center justify-center">
        <div className="w-[21%] md:w-[15%] h-[80px] md:h-[110px] border-[1px] rounded bg-black text-white flex flex-col justify-center items-center gap-2 text-whit lg:w-[12%] lg:h-[120px]">
            <h5 className="h-[60%] font-semibold text-[35px] text-blac md:text-[45px] lg:text-[55px]">
              {timeLeft.days}
              {/* 0 */}
            </h5>
            {/* <hr className="w-full border-[1px] border-white"/> */}
            <h5 className="font-semibold text-[10px] md:text-[14px] lg:text-[17px] text-blac">DAY(S)</h5>
        </div>

        <div className="w-[21%] md:w-[15%] h-[80px] md:h-[110px] border-[1px] rounded bg-black flex flex-col justify-center items-center gap-2 text-white lg:w-[12%] lg:h-[120px]">
            <h5 className="h-[60%] font-semibold text-[35px] text-blac md:text-[45px] lg:text-[55px]">
              {timeLeft.hours}
              {/* 0 */}
              </h5>
            {/* <hr className="w-full border-[1px] border-white"/> */}
            <h5 className="font-semibold text-[10px] md:text-[14px] lg:text-[17px] text-blac">HOUR(S)</h5>
        </div>

        <div className="w-[21%] md:w-[15%] h-[80px] md:h-[110px] border-[1px] rounded bg-black flex flex-col justify-center items-center gap-2 text-white lg:w-[12%] lg:h-[120px]">
            <h5 className="h-[60%] font-semibold text-[35px] text-blac md:text-[45px] lg:text-[55px]">
              {timeLeft.minutes}
              {/* 0 */}
              </h5>
            {/* <hr className="w-full border-[1px] border-white"/> */}
            <h5 className="font-semibold text-[10px] md:text-[14px] lg:text-[17px] text-blac">MINUTE(S)</h5>
        </div>

        <div className="w-[21%] md:w-[15%] h-[80px] md:h-[110px] border-[1px] rounded bg-black flex flex-col justify-center items-center gap-2 text-white lg:w-[12%] lg:h-[120px]">
            <h5 className="h-[60%] font-semibold text-[35px] md:text-[45px] text-blac lg:text-[55px]">
              {timeLeft.seconds}
              {/* 0 */}
              </h5>
            {/* <hr className="w-full border-[1px] border-white"/> */}
            <h5 className="font-semibold text-[10px] md:text-[14px] lg:text-[17px] text-blac">SECOND(S))</h5>
        </div>
    </div>
  );
};

export default Countdown;