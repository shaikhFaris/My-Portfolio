import React from "react";
import resumPDF from "/resume.pdf";

const handleResumeCLick = () => {
  // console.log("clicked");
  window.open(resumPDF);
};

function NeoButton() {
  return (
    <div>
      <button
        className="neo-btn w-2/3 h-14  mx-auto xl:mx-0 xl:my-10 xl:w-60 xl:h-[68px] xl:mb-16 2xl:h-[5rem] 2xl:w-[18rem] 2xl:text-xl"
        onClick={handleResumeCLick}
      >
        Resume
      </button>
    </div>
  );
}

export default NeoButton;
