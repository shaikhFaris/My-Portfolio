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
              <h3 className="my-2 text-xl text-center text-green-500 ">
                React
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Docker is a platform for developing, shipping, and running
                applications in isolated containers, ensuring consistency across
                environments.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <RiTailwindCssFill size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 ">
                Tailwind
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Kubernetes is an open-source platform for automating the
                deployment, scaling, and management of containerized
                applications.
              </p>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <TbBrandThreejs size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 ">
                Three JS
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Helm charts are packages that simplify the deployment and
                management of Kubernetes applications by defining and
                configuring resources.
              </p>
            </div>
          </div>
        </div>
        {/* // linux */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <SiMongodb size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 ">
                MongoDB
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Linux is favored for its stability, security, and flexibility,
                making it ideal for managing servers, deploying applications,
                and automating workflows.
              </p>
            </div>
          </div>
        </div>

        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <SiExpress size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 ">
                Express
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Azure is Microsoft's cloud computing platform offering a wide
                range of services, including storage, computing, and networking.
              </p>
            </div>
          </div>
        </div>
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <FaNode size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 ">Node</h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                AWS (Amazon Web Services) is a comprehensive cloud platform
                offering a variety of services, such as computing power,
                storage, and databases.
              </p>
            </div>
          </div>
        </div>
        {/* Devops */}
        <div className="green-pink-gradient w-full md:w-2/5 h-56 xl:h-60 rounded-2xl p-[1px] flex-wrap xl:w-1/4 ">
          <div className="border border-purple-700 rounded-2xl h-full w-full ">
            <AiOutlineMail size={60} className="mx-auto mt-4 " />
            <div className="mx-2 my-2 ">
              <h3 className="my-2 text-xl text-center text-green-500 ">
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
              <h3 className="my-2 text-xl text-center text-green-500 ">
                Javascript
              </h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Terraform is an open-source tool for automating infrastructure
                setup and management. It uses code to define and provision
                resources across various cloud providers.
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
              <h3 className="my-2 text-xl text-center text-green-500 ">CSS</h3>
              <p className="xl:font-normal text-xs xl:text-sm font-light text-center text-gray-400 ">
                Cisco ASA (Adaptive Security Appliance) is a security device
                that combines firewall, VPN, and intrusion prevention features.
                It protects networks using security policies.
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
