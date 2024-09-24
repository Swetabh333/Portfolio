"use client";
import Image from "next/image";
import React, { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Go</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>MySQL</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>C</li>
        <li>C++</li>
        <li>Python</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Vellore Institute of Technology : 2021-2025</li>
        <li>Bal Bharati Public School : 2017-2021</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Ethnus MERN Full Stack Internship Program.</li>
        <li>
          The Complete 2023 Web Development Bootcamp by Dr. Angela Yu .A
          comprehensive web development bootcamp covering HTML, CSS, Javascript.
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white py-8 px-4 sm:py-16 xl:px-16" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className=" md:top-20 md:pt-10 md:pl-10">
            <div className="relative w-full h-[300px]">
              <Image
                src="/images/about.jpg"
                fill
                objectFit="cover"
                alt="About me"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-base lg:text-lg mb-6">
            I am a backend developer and O specialize in building robust, scalable back-end systems using technologies like Go, Node.js, Docker, MySQL, PostgreSQL, MongoDB, and Redis. With experience in front-end frameworks like React.js and Next.js, I integrate seamless user experiences. Proficient in tools such as Git, Docker, and Linux, and skilled in languages including Go, JavaScript, TypeScript, and SQL, I create innovative solutions to drive business growth.
            </p>
            
          </div>
          <div className="flex md:flex-col mt-5 md:gap-2 mb-6">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
              
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
              
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("certifications")}
                active={tab === "certifications"}
              >
             
                Certifications
              </TabButton>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
