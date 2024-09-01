import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { BsDatabaseFillCheck } from "react-icons/bs";

function Contact() {
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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    // console.log("Form submitted!");
    console.log(userObj);
    let ResFromServer = await fetch("http://192.168.1.101:3689/mail", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      //We need to convert js object into JSON string to pass over
      body: JSON.stringify({
        username: userObj.username,
        email: userObj.email,
        message: userObj.msg,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("from server: ");
        console.log(data);
        return data;
      });
    console.log("status: " + ResFromServer.status);
  };

  return (
    <div>
      <div className="p-3 xl:ml-28 xl:mt-32 my-12 xl:p-0 xl:mb-7 2xl:mt-48">
        <h3
          className="text-gray-600 my-2 xl:text-2xl xl:my-3 font-semibold 2xl:text-4xl 2xl:my-5"
          id="contact-section"
        >
          CONTACT ME
        </h3>
        <h1 className="white text-4xl mb-5 md:text-5xl xl:text-6xl font-bold xl:mb-10 2xl:text-9xl">
          My <span className="text-purple-400 ">Contact.</span>
        </h1>
        <p className="text-[12px] text-gray-500 mb-12 md:text-left md:text-sm xl:text-left xl:text-gray-500 font-light xl:font-normal xl:text-base xl:w-10/12 xl:mb-0 2xl:text-2xl">
          Get in touch with me by filling out the form below. I'll make sure to
          respond as soon as possible. Looking forward to hear from you!
        </p>
        {/* FORM */}
        <div className="lg:flex xl:justify-start xl:items-center xl:gap-8">
          <div className="w-full  bg-[#0f0a2b] rounded-lg my-5 pt-5 pl-5 xl:w-3/6 xl:pl-6 xl:pt-5 2xl:my-12 2xl:w-7/12">
            {/* <h3></h3> */}
            <form onSubmit={handleFormSubmit} className="bg-[#090a2c]">
              <p className="bg-transparent text-xs mb-2 font-medium text-[#bf1650] xl:text-sm 2xl:text-3xl">
                Your Name
              </p>
              <input
                type="text"
                autoComplete="username"
                placeholder="What's your name?"
                maxLength={10}
                minLength={4}
                onChange={handleUsername}
                className="bg-[#0c0d38] h-9 rounded-lg pl-4 text-xs w-11/12 xl:h-10 2xl:h-20 2xl:text-xl"
                // onChange={handleInput}
              />
              <p className="bg-transparent text-xs mb-2 mt-6 font-medium text-[#bf1650] xl:text-sm 2xl:text-3xl">
                Your Email
              </p>
              <input
                type="email"
                autoComplete="username"
                placeholder="What's your email?"
                maxLength={25}
                minLength={11}
                onChange={handleEmail}
                className="bg-[#0c0d38]  h-9 rounded-lg pl-4 text-xs w-11/12 xl:h-10 2xl:text-xl 2xl:h-20"
                // onChange={handleInput}
              />
              <p className="bg-transparent text-xs mb-2 mt-6 font-medium text-[#bf1650] xl:text-sm 2xl:text-3xl">
                Your Message
              </p>
              <textarea
                id=""
                onChange={handleMsg}
                className="bg-[#0c0d38]   rounded-lg pl-4 text-xs w-11/12 h-48 pt-3 2xl:text-xl"
                placeholder="What do you want to say?"
              ></textarea>
              <button
                type="submit"
                className="bg-[#0c0d38]  text-sm h-10 my-3 mx-1 w-[30%] rounded-md font-medium xl:text-[#bf1650] xl:font-bold xl:text-base hover:text-white hover:bg-[#bf1650]  hover:font-semibold  hover:scale-105 transition duration-150   xl:h-11 2xl:h-16 2xl:text-3xl 2xl:my-10"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="text-cyan-600 hidden lg:block">
            <BsDatabaseFillCheck size={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
