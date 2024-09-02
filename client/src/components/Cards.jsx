import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineKubernetes } from "react-icons/ai";
import { FaLinux, FaDocker } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";
import { TbBrandThreejs } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";

import { FaNode, FaCss3Alt } from "react-icons/fa";

function Cards() {
  return (
    <div>
      <div
        className="my-6 p-3 mt-0 xl:mt-12 xl:ml-28 xl:mb-14 xl:p-0"
        id="skills-section"
      >
        <h3 className="text-gray-600 my-2 xl:text-2xl xl:my-3 font-semibold 2xl:text-3xl ">
          SKILLS OVERVIEW
        </h3>
        <h1 className="white text-4xl mb-5 md:text-5xl xl:text-6xl font-bold xl:mb-9 2xl:text-7xl">
          My <span className="text-purple-400 ">Skills. </span>
        </h1>
        <p className="text-[12px]  text-gray-500 md:text-left md:text-sm xl:text-left xl:text-gray-500 font-light xl:font-normal xl:text-base xl:w-10/12 2xl:text-lg">
          I specialize in web development, with a strong command of the MERN
          stack—MongoDB, Express.js, React, and Node.js. My expertise extends to
          crafting dynamic 3D animations using three.js, bringing interactivity
          and depth to web experiences. I leverage Tailwind CSS to create
          responsive, efficient UIs that are both functional and aesthetically
          pleasing. Additionally, I'm an active contributor to the Hasnode
          community, where I share insights on data structures, algorithms, and
          modern web development practices.
        </p>
      </div>
      <div className="flex flex-wrap items-center mb-10 w-5/6 gap-10 mx-auto md:justify-center md:gap-7 md:w-11/12 xl:gap-10 xl:w-11/12 xl:justify-evenly">
        {/*  */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4">
          <div className="border border-purple-700 rounded-2xl h-full w-full">
            <FaReact size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 2xl:mb-4">
                React
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                React is a JavaScript library for building dynamic user
                interfaces with reusable components. It uses a virtual DOM for
                efficient rendering.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <RiTailwindCssFill size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 2xl:mb-4">
                Tailwind
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Tailwind CSS is a utility-first framework that allows for rapid
                UI development by providing pre-defined classes. It enables
                custom styling without writing CSS from scratch.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <TbBrandThreejs size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 2xl:mb-4">
                Three JS
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Three.js is a JavaScript library for creating 3D graphics in the
                browser using WebGL, ideal for interactive visualizations and
                animations.
              </p>
            </div>
          </div>
        </div>
        {/* // linux */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <SiMongodb size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 2xl:mb-4">
                MongoDB
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                MongoDB is a NoSQL database that stores data in flexible,
                JSON-like documents. It’s designed for scalability and high
                performance.
              </p>
            </div>
          </div>
        </div>

        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <SiExpress size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 2xl:mb-4">
                Express
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Express is a minimalist Node.js web framework for building fast
                APIs and web applications. It simplifies server-side routing and
                middleware management.
              </p>
            </div>
          </div>
        </div>
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <FaNode size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 2xl:mb-4">
                Node
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Node.js is a runtime for running JavaScript on the server,
                enabling full-stack development with a single language and
                supporting scalable applications.
              </p>
            </div>
          </div>
        </div>
        {/* Devops */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <AiOutlineMail size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 2xl:mb-4">
                Email JS
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                DevOps merges development and operations to enhance
                collaboration and automate processes. It aims for faster, more
                reliable software delivery.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <SiJavascript size={50} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 2xl:mb-4">
                Javascript
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                JavaScript is a versatile scripting language for adding
                interactivity and dynamic content to web pages. It's essential
                for front-end and back-end development.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <FaCss3Alt size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 2xl:mb-4">
                CSS
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                CSS (Cascading Style Sheets) styles and layouts web pages,
                controlling design aspects like color, spacing, and typography.
                It separates content from presentation.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default Cards;
