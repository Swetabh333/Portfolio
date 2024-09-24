"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import {motion } from "framer-motion"
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}} className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl lg:text-8xl lg:leading-normal sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">
              Hello I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Swetabh",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Backend Dev",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
          Hi there! I&apos;m a passionate backend developer with a strong foundation in building robust and scalable server-side applications. I enjoy crafting efficient code that powers the core functionality of web and mobile applications. My expertise lies in Go, Node.js, SQL & NOSQL databases. I&apos;m always eager to learn new technologies and solve complex problems. Let&apos;s build something great together!


          </p>
          <div>
            <Link href="#contact" className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800  to-red-800 hover:bg-slate-200 text-white">
              Hire Me
            </Link>
            <button  className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-800  to-red-800 hover:bg-slate-200 text-white   mt-3">
              <Link href="https://drive.google.com/file/d/1ipNeu6mYq6_rY_Ewa_ZIRQ4txUFt_YTs/view?usp=drive_link">
              {" "}
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {" "}
                Resume
              </span>
              </Link>
            </button>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,scale:0.5}} animate={{opacity:1,scale:1}} transition={{duration:0.5}}  className="col-span-4 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative overflow-hidden lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/Hero.jpeg"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="Hero image"
              width={500}
              height={500}
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
