import React from "react";
import * as Three from "three";
import { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FlakesTexture, RGBELoader } from "three/examples/jsm/Addons.js";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { LuInstagram } from "react-icons/lu";

// NOT USED IMPORTS
// import {
//   clearcoat,
//   clearcoatRoughness,
//   metalness,
//   normalMap,
//   roughness,
// } from "three/examples/jsm/nodes/Nodes.js";

function Hero() {
  useEffect(() => {
    const div3d = document.getElementById("hero-threejs");
    const renderer = new Three.WebGLRenderer({ alpha: true, antialias: true });
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    renderer.setSize(div3d.clientWidth, div3d.clientHeight);
    // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    div3d.appendChild(renderer.domElement);
    // The below is import foe color
    renderer.outputEncoding = Three.sRGBEncoding;
    renderer.toneMapping = Three.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    const scene = new Three.Scene();
    const camera = new Three.PerspectiveCamera(
      50,
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      div3d.clientWidth / div3d.clientHeight,
      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      1,
      1000
    );
    camera.position.set(0, 0, 500);
    // const controls = new OrbitControls(camera, renderer.domElement);

    const pointlight = new Three.DirectionalLight(0xfffff, 1);
    pointlight.position.set(200, 200, 200);
    scene.add(pointlight);
    // const dlightHelper = new Three.DirectionalLightHelper(pointlight, 2);
    // scene.add(dlightHelper);

    const evmaploader = new Three.PMREMGenerator(renderer);

    new RGBELoader().load("/christmas_photo_studio_04_4k.hdr", (hdrmap) => {
      const evmap = evmaploader.fromCubemap(hdrmap);
      const texture = new Three.CanvasTexture(new FlakesTexture());
      texture.wrapS = Three.RepeatWrapping;
      texture.wrapT = Three.RepeatWrapping;
      texture.repeat.x = 10;
      texture.repeat.y = 6;

      const ballMaterial1 = {
        clearcoat: 1.0,
        clearcoatRoughness: 0.1,
        metalness: 1,
        roughness: 1,
        color: 0x8418ca,
        // color: 0x800080,
        // color: 0x00000,
        normalMap: texture,
        normalScale: new Three.Vector2(0.15, 0.15),
        envMap: evmap.texture,
      };
      const boxGeo1 = new Three.BoxGeometry(40, 40, 40);
      const boxGeo2 = new Three.BoxGeometry(100, 100, 100);
      const boxGeo3 = new Three.BoxGeometry(40, 40, 40);
      const boxMat1 = new Three.MeshPhysicalMaterial(ballMaterial1);
      // const boxMat2 = new Three.MeshPhysicalMaterial(ballMaterial1);
      const box1 = new Three.Mesh(boxGeo1, boxMat1);
      const box2 = new Three.Mesh(boxGeo2, boxMat1);
      const box3 = new Three.Mesh(boxGeo3, boxMat1);
      const box4 = new Three.Mesh(boxGeo3, boxMat1);
      const box5 = new Three.Mesh(boxGeo3, boxMat1);
      const box6 = new Three.Mesh(boxGeo3, boxMat1);
      const box7 = new Three.Mesh(boxGeo3, boxMat1);
      const box8 = new Three.Mesh(boxGeo3, boxMat1);
      scene.add(box1);
      scene.add(box2);
      scene.add(box3);
      scene.add(box4);
      scene.add(box5);
      scene.add(box6);
      scene.add(box7);
      scene.add(box8);
      box1.position.set(-200, 70, 0);
      box3.position.set(120, -100, 0);
      box4.position.set(-30, 160, 0);
      box5.position.set(90, 40, 0);
      box6.position.set(-125, -120, -100);
      box7.position.set(190, 150, 0);
      box8.position.set(190, 150, 0);

      const animate = () => {
        box1.rotation.x += 0.01;
        box1.rotation.y += 0.01;

        box2.rotation.x -= 0.005;
        box2.rotation.y -= 0.005;

        box3.rotation.x -= 0.02;
        box3.rotation.y -= 0.005;

        box4.rotation.x -= 0.01;
        box4.rotation.y -= 0.01;
        box4.rotation.z -= 0.01;

        box5.rotation.x -= 0.03;
        box5.rotation.y += 0.03;
        box5.rotation.z += 0.03;

        box6.rotation.x -= 0.008;
        box6.rotation.y -= 0.009;

        box7.rotation.x -= 0.01;
        box7.rotation.y -= 0.01;

        box8.rotation.x += 0.01;
        box8.rotation.y += 0.01;
        renderer.render(scene, camera);
      };
      renderer.setAnimationLoop(animate);
    });
    const handleResize = () => {
      const width = div3d.clientWidth;
      const height = div3d.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set the correct size

    return () => {
      // Clean up on component unmount
      window.removeEventListener("resize", handleResize);
      div3d.removeChild(renderer.domElement);
    };
  }, []);
  const [text] = useTypewriter({
    words: [
      "Student...",
      "Open Source Contributor...",
      "Web Devloper...",
      "Learner...",
    ],
    loop: {},
  });

  return (
    <div className=" block custom-vh-class md:flex md:justify-center xl:flex my-3 xl:my-0 ">
      <div className="hero-content  w-full my-5 mt-20 md:mt-14 md:w-2/5 xl:mt-20 xl:mb-0 xl:w-2/5 xl:h-full xl:ml-28 xl:mt-22 ">
        <h1 className="text-4xl mx-3 mt-5 text-left font-extrabold  md:text-4xl xl:text-6xl xl:mb-9 2xl:text-9xl 2xl:mt-48">
          Hi, I am <span className="text-purple-400">Faris </span>
        </h1>
        <p className="mx-4 my-2 text-xl xl:text-3xl 2xl:text-6xl 2xl:my-12">
          I am a <span className=" text-purple-700 ">{text}</span>
          <Cursor />
        </p>
        <p className="mx-4 my-2 text-xs font-light md:text-base xl:text-lg xl:my-5 text-gray-500 2xl:text-4xl 2xl:font-normal">
          I'm a web developer proficient in the MERN stack and passionate about
          creating immersive 3D animations using three.js. I specialize in
          building responsive, visually appealing web applications with Tailwind
          CSS. Let's create something amazing together!
        </p>
        <div className="flex justify-center gap-5 mt-5 xl:gap-10 xl:mt-10 2xl:hidden">
          <a href="https://x.com/faris_shaikh247" target="_blank">
            <FaXTwitter
              size={25}
              className="text-gray-500 hover:text-white ease-in duration-100"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/shaikh-mohammad-faris-561550295/"
            target="_blank"
          >
            <FaLinkedinIn
              size={25}
              className="text-gray-500 hover:text-white ease-in duration-100"
            />
          </a>
          <a href="https://github.com/shaikhFaris" target="_blank">
            <FaGithub
              size={25}
              className="text-gray-500 hover:text-white ease-in duration-100"
            />
          </a>
          <a href="https://faristheprogrammer.hashnode.dev/" target="_blank">
            <SiHashnode
              size={25}
              className="text-gray-500 hover:text-white ease-in duration-100"
            />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <LuInstagram
              size={25}
              className="text-gray-500 hover:text-white ease-in duration-100"
            />
          </a>
        </div>
      </div>
      {/* // the threejs model was not appearing because I did not give a height to
      it */}
      <div
        className="hero-threejs w-full h-72 md:h-96 md:w-3/5 xl:w-3/5 xl:h-full"
        id="hero-threejs"
      ></div>
    </div>
  );
}

export default Hero;
