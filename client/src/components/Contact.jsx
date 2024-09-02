import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { BsDatabaseFillCheck } from "react-icons/bs";

function Contact() {
  // const toggledivEl = document.body.querySelector("#toggle-div");
  const [toggle, setToggle] = useState(false);
  const [userObj, setuserObj] = useState({
    username: "",
    email: "",
    msg: "",
  });

  const handleUsername = (e) => {
    // console.log(e.target.value);
    setuserObj({
      ...userObj,
      username: e.target.value,
    });
  };
  const handleEmail = (e) => {
    setuserObj({
      ...userObj,
      email: e.target.value,
    });
  };
  const handleMsg = (e) => {
    setuserObj({
      ...userObj,
      msg: e.target.value,
    });
  };
  const handleToggle = () => {
    setToggle(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form submitted!");
    console.log(userObj);
    console.log("Work in progress");
    setToggle(true);
    // let ResFromServer = await fetch("http://192.168.1.101:3689/mail", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    //   //We need to convert js object into JSON string to pass over
    //   body: JSON.stringify({
    //     username: userObj.username,
    //     email: userObj.email,
    //     message: userObj.msg,
    //   }),
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("from server: ");
    //     console.log(data);
    //     return data;
    //   });
    // console.log("status: " + ResFromServer.status);
  };

  return (
    <div>
      {toggle && (
        <div
          className="h-screen xl:h-[125vh] md:h-[] w-full bg-transparent toggle-screen absolute flex justify-center items-center "
          id="toggle-div"
        >
          <div className=" bg-black rounded-3xl h-72 w-4/5 xl:h-1/2 xl:w-3/5">
            <h4 className="text-3xl bg-black font-bold text-red-600 mt-12 mb-6 text-center xl:text-5xl xl:mb-12">
              Work in Progress!
            </h4>
            <p className="text-center text-sm mx-2 bg-black xl:text-lg xl:mx-12 ">
              The code for backend has not been be deployed yet. This website
              will be updated in the future. Sorry for the inconvenience.
            </p>
            <button
              className="bg-black w-2/3 border-[2px] h-10 mt-8 border-white mx-auto block rounded-xl font-bold text-green-500 xl:w-3/5 xl:h-12 xl:mt-16"
              onClick={handleToggle}
            >
              back
            </button>
          </div>
        </div>
      )}

      <div className="p-3 xl:ml-28 xl:mt-32 my-12 xl:p-0 xl:mb-7 2xl:mt-48">
        <h3
          className="text-gray-600 my-2 xl:text-2xl xl:my-3 font-semibold 2xl:text-3xl "
          id="contact-section"
        >
          CONTACT ME
        </h3>
        <h1 className="white text-4xl mb-5 md:text-5xl xl:text-6xl font-bold xl:mb-10 2xl:text-7xl">
          My <span className="text-purple-400 ">Contact.</span>
        </h1>

        <p className="text-[12px] text-gray-500 mb-12 md:text-left md:text-sm xl:text-left xl:text-gray-500 font-light xl:font-normal xl:text-base xl:w-10/12 xl:mb-0 2xl:text-lg">
          Get in touch with me by filling out the form below. I'll make sure to
          respond as soon as possible. Looking forward to hear from you!
        </p>
        {/* FORM */}
        <div className="lg:flex xl:justify-start xl:items-center xl:gap-8">
          <div className="w-full  bg-[#0f0a2b] rounded-lg my-5 pt-5 pl-5 xl:w-3/6 xl:pl-6 xl:pt-5 2xl:mt-7 2xl:w-6/12">
            {/* <h3></h3> */}
            <form onSubmit={handleFormSubmit} className="bg-[#090a2c]">
              <p className="bg-transparent text-xs mb-2 font-medium text-[#bf1650] xl:text-sm 2xl:text-xl">
                Your Name
              </p>
              <input
                type="text"
                autoComplete="username"
                placeholder="What's your name?"
                maxLength={10}
                minLength={4}
                onChange={handleUsername}
                className="bg-[#0c0d38] h-9 rounded-lg pl-4 text-xs w-11/12 xl:h-10 2xl:h-14 2xl:text-base"
                // onChange={handleInput}
              />
              <p className="bg-transparent text-xs mb-2 mt-6 font-medium text-[#bf1650] xl:text-sm 2xl:text-xl">
                Your Email
              </p>
              <input
                type="email"
                autoComplete="username"
                placeholder="What's your email?"
                maxLength={25}
                minLength={11}
                onChange={handleEmail}
                className="bg-[#0c0d38]  h-9 rounded-lg pl-4 text-xs w-11/12 xl:h-10 2xl:h-14 2xl:text-base"
                // onChange={handleInput}
              />
              <p className="bg-transparent text-xs mb-2 mt-6 font-medium text-[#bf1650] xl:text-sm 2xl:text-xl">
                Your Message
              </p>
              <textarea
                id=""
                onChange={handleMsg}
                className="bg-[#0c0d38]   rounded-lg pl-4 text-xs w-11/12 h-48 pt-3  2xl:text-base 2xl:h-64"
                placeholder="What do you want to say?"
              ></textarea>
              <button
                type="submit"
                className="bg-[#0c0d38]  text-sm h-10 my-3 mx-1 w-[30%] rounded-md font-medium xl:text-[#bf1650] xl:font-bold xl:text-base hover:text-white hover:bg-[#bf1650]  hover:font-semibold  hover:scale-105 transition duration-150   xl:h-11 2xl:h-14 2xl:text-xl 2xl:my-6"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="text-cyan-600 hidden lg:block">
            <BsDatabaseFillCheck size={400} className="2xl:hidden" />
            <BsDatabaseFillCheck size={550} className="hidden 2xl:block" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
