// import React from 'react'

import Countdown from "../../../components/static/Countdown";

const HomeInfo = () => {

  const targetDate = new Date('2024-11-16T00:00:00');

  return (
    <div className="w-full min-h-[40vh] flex justify-center items-center py-[40px]  bg-white">
        {/* <div className="w-[90%] text-[14px] md:text-[17px] text-justify"> */}
          <div className="w-[90%] flex gap-3 items-center justify-center">
                <Countdown targetDate={targetDate} />
            </div>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, voluptate, iure fuga molestias suscipit dolore expedita nihil et soluta, labore totam ad quia illum minus sunt quam blanditiis voluptatem quibusdam sed consequatur odio corporis ut? Omnis ipsa minus magnam, sed beatae quae officia magni voluptatum adipisci assumenda. Libero modi dicta voluptatem fuga culpa repellendus nesciunt error, obcaecati dolor, consequatur sunt cumque similique quae id. Quidem temporibus aspernatur sunt quaerat tenetur mollitia dolorem beatae. Porro, voluptatum repudiandae? Ea doloribus facilis beatae, quibusdam mollitia pariatur voluptate! Adipisci aperiam quas at vitae fuga, quisquam sequi labore aut deserunt suscipit omnis nostrum totam ipsam in blanditiis quam iste nemo repudiandae vero alias inventore? Vitae, quae inventore quasi iusto nemo, provident sit repellat aut accusamus illo quos eveniet dicta vero laudantium natus, consequuntur quaerat */}
        {/* </div> */}
    </div>
  )
}

export default HomeInfo