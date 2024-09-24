"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-600">
              Hello I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Swetabh",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "a back-end developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque,
            animi laudantium. Doloremque cupiditate adipisci maiores vel? Quis
            ut vero reiciendis fuga mollitia exercitationem? Illum debitis hic,
            accusamus maiores asperiores sit.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800  to-red-800 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-800  to-red-800 hover:bg-slate-200 text-white   mt-3">
              {" "}
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                {" "}
                Resume
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
