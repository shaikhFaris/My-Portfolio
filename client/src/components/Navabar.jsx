import React from "react";
import { TiThMenu } from "react-icons/ti";
import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import { RxCross2 } from "react-icons/rx";

function Navabar() {
  let skillEl = null;
  let expEl = null;
  let contactEl = null;
  useEffect(() => {
    skillEl = document.body.querySelector("#skills-section");
    expEl = document.body.querySelector("#experience-section");
    contactEl = document.body.querySelector("#contact-section");
    // console.log(skillEl);
  }, []);

  const [menu, setMenu] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    if (menu === true) {
      menuRef.current.style.display = "flex";
    } else {
      menuRef.current.style.display = "none";
    }
  }, [menu]);

  return (
    <div>
      <div className=" flex justify-between items-center px-4 my-5 w-full xl:flex xl:justify-between xl:my-0 xl:px-10 xl:py-3 xl:mt-3 2xl:mt-10">
        <div className=" w-[80%] flex py-3 gap-2 justify-start items-center xl:text-center xl:flex  xl:gap-3 xl:w-1/3 xl:justify-center xl:py-0 ">
          <img src={logo} alt="nothing" className="w-8 xl:w-6" />
          <h3 className="font-semibold text-xl 2xl:text-4xl">
            Devloper | Faris
          </h3>
        </div>
        <div className="hidden lg:font-normal lg:w-5/12 lg:flex lg:text-gray-500 ">
          <ul className="lg:flex lg:justify-evenly lg:text-center lg:items-center lg:w-full">
            <li
              className="lg:hover:text-white lg:ease-in lg:duration-100 cursor-pointer 2xl:text-4xl"
              onClick={() => {
                expEl?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Experience
            </li>
            <li
              className="lg:hover:text-white lg:ease-in lg:duration-100 cursor-pointer 2xl:text-4xl"
              onClick={() => {
                skillEl?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Skills
            </li>
            <li
              className="hover:text-white lg:ease-in lg:duration-100 cursor-pointer 2xl:text-4xl"
              onClick={() => {
                contactEl?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="lg:hidden">
          <TiThMenu
            size={25}
            onClick={() => {
              console.log("clicked");
              setMenu(true);
            }}
          />
        </div>
      </div>
      {/* // Responsive menu */}
      <div
        ref={menuRef}
        className="absolute-dropleft hidden bg-transparent text-white font-bold  flex-col pt-10 items-center justify-top gap-5 absolute w-60 h-full  top-0 right-0 xl:hidden"
      >
        <RxCross2
          size={35}
          className="absolute top-0 right-0 "
          onClick={() => setMenu(false)}
        />
        <h2 className="bg-transparent text-2xl">Home</h2>
        <h2 className="bg-transparent text-2xl">Skills</h2>
        <h2 className="bg-transparent text-2xl">Experience</h2>
        <h2 className="bg-transparent text-2xl">Contact me</h2>
      </div>
    </div>
  );
}

export default Navabar;
