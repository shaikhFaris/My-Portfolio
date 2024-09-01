import React from "react";
import expObjs from "../info/experience";

function ExpCards() {
  return (
    <>
      {expObjs.map((card) => (
        <div key={card.year}>
          <div className="flex my-0 ">
            <div className="flex flex-col items-center ">
              <div className="h-4 w-4 border-2 rounded-full my-[8px] border-gray-400 xl:h-12 xl:w-12 xl: overflow-hidden xl:my-0">
                <img src={card.companyImg} className="h-full w-full" alt="" />
              </div>
              <div className="h-[19rem] bg-gray-gradient w-[2px] bg-gray-400 xl:h-[32rem]" />
            </div>
            <div className="ml-3 w-full xl:ml-10">
              <div className="text-md font-light font-mono text-green-500 mb-3 mt-3 xl:mt-12 xl:text-2xl xl:mb-7">
                {card.year}
              </div>
              <div className=" bg-[#11092c]  rounded-lg hover:-translate-y-5 transition duration-500  h-64 w-full pt-3 pl-3 xl:h-[21rem] xl:w-[45%] xl:pt-4 xl:pl-6">
                <h2 className=" text-2xl bg-transparent font-bold xl:text-4xl ">
                  {card.companyPost}
                </h2>
                <div className="bg-transparent">
                  <h3 className="bg-transparent font-bold text-gray-500 text-lg mt-1 font-mono xl:text-2xl xl:mt-3">
                    {card.companyName}
                  </h3>
                  <ul className="bg-transparent mt-2font-light text-xs text-400 list-disc pl-2 xl:text-base xl:font-light xl:mt-6">
                    <li className="bg-transparent my-2 xl:my-3">
                      {card.message[0]}
                    </li>
                    <li className="bg-transparent my-2 xl:my-3">
                      {card.message[1]}
                    </li>
                    <li className="bg-transparent my-2 xl:my-3">
                      {card.message[2]}
                    </li>
                    <li className="bg-transparent my-2 xl:my-3">
                      {card.message[3]}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ExpCards;
