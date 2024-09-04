import React from "react";
import NeoButton from "./NeoButton";

function SkillsDetails() {
  return (
    <div className="p-3  xl:ml-28 xl:mt-32 my-12 xl:p-0 2xl:mt-64">
      <h3 className="text-gray-600 my-2 xl:text-2xl xl:my-3 font-semibold 2xl:text-3xl ">
        SKILLS IN DETAIL
      </h3>
      <h1 className="white text-4xl mb-5 md:text-5xl xl:text-6xl font-bold xl:mb-10 2xl:text-7xl">
        My <span className="text-purple-400 ">Resume.</span>
      </h1>
      <p className="text-[12px] text-gray-500 md:text-left md:text-sm xl:text-left xl:text-gray-500 font-light xl:font-normal xl:text-base xl:w-10/12 2xl:text-lg">
        Here's a detailed version of my skills. Please click the button below to
        download my full resume. You can also access my certifications by
        clicking on the button below.
      </p>
      <div className="flex flex-col gap-12  xl:flex-row xl:flex xl:gap-16 my-7 xl:my-0 xl:items-center">
        <NeoButton />
        <button className="bg-transparent border rounded-md text-green-500 border-green-600 hover:-translate-y-1 hover:border-white transition duration-300 w-2/3 h-14 mx-auto xl:mx-0 xl:my-10 font-light xl:font-normal xl:w-60 xl:h-[74px] xl:mb-16 2xl:h-[5rem] 2xl:w-1/5 2xl:text-lg 2xl:border-[1px]">
          View Certifications
        </button>
      </div>
      <p className="text-xs text-center text-gray-500 mt-10 xl:text-left xl:mt-5 xl:text-base 2xl:text-lg">
        Feel free to
        <a
          href="https://www.linkedin.com/in/shaikh-mohammad-faris-561550295/"
          target="_blank"
          className="text-cyan-400"
        >
          {" "}
          contact me
        </a>{" "}
        for collaboration or any inquiries.
      </p>
    </div>
  );
}

export default SkillsDetails;
