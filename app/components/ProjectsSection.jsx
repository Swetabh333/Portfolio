"use client";
import React,{useRef} from 'react'
import ProjectCard from './ProjectCard'
import {motion,useInView} from "framer-motion"

const projectsData = [
    {
        id:1,
        title:"File Sharing System",
        image:"/images/fileshare.jpg",
        description:"Developed a sophisticated file sharing system in Go, integrating user file uploads, metadata retrieval, and shareable access links. The system leverages PostgreSQL for data persistence and Redis for performance-enhancing caching. Key features include the implementation of goroutines for efficient concurrent large file uploads and a background worker for automatic deletion of expired files, optimizing both system performance and storage management.",
        gitUrl:"https://github.com/Swetabh333/File-Sharing-App"
    },
    {
        id:2,
        title:"Multi-Threaded Proxy Server",
        image:"/images/proxy.jpg",
        description:"Engineered a C++ proxy server capable of handling multiple client requests concurrently while implementing a caching mechanism for improved performance. The system utilizes mutex locks in conjunction with the libcurl library for efficient response management. An LRU (Least Recently Used) cache, implemented using a linked list, optimizes data retrieval. The project leverages the pthread library to achieve multithreaded behavior, effectively managing concurrent operations while mitigating race conditions.",
        gitUrl:"https://github.com/Swetabh333/multi-threaded-proxy-server"
    },
    {
        id:3,
        title:"Productivity Tracker",
        image:"/images/Productivity.png",
        description:"Developed a Notion-inspired productivity tracker app that serves as a comprehensive digital hub for personal and professional organization. The application features customizable workspaces, dynamic task management, and collaborative tools, allowing users to create tailored environments for various projects and life aspects. Key functionalities include an intuitive knowledge base for building personal wikis, progress visualization through insightful analytics, and seamless cross-platform synchronization. This versatile tool adapts to diverse user needs, from busy professionals to creative minds, streamlining workflow and enhancing productivity across multiple domains.",
        gitUrl:"https://github.com/Swetabh333/Jotion",
        previewUrl:"https://jotion-lime.vercel.app/",
    },
    {
        id:4,
        title:"Employee Tracking System",
        image:"/images/Employee.png",
        description:"The website streamlines employee attendance tracking by offering a user-friendly platform for managers to efficiently monitor and manage attendance records. Supervisors can seamlessly track employee punctuality, absences, and time-off requests. The platform’s intuitive interface and robust features enable businesses to improve efficiency, reduce administrative burdens, and ensure accurate attendance data. By leveraging cutting-edge technologies like ReactJS, NodeJS, and MongoDB, the website provides a reliable and scalable solution for managing employee attendance.",
        gitUrl:"https://github.com/Swetabh-Shreyam333/EmpTracker-frontend",
        previewUrl:"https://emp-tracker.vercel.app/"
    },
    // {
    //     id:5,
    //     title:"Chat-App",
    //     image:,
    // },

]


const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const cardVariants = {
    initial : {y:50 ,opacity:0},
    animate:{y:0,opacity:1}
  }
  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <ul ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
          {
            projectsData.map((project,index)=>{
            
                return( 
                  <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                >

                <ProjectCard key={project.id} title={project.title} description = {project.description} imageUrl = {project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl} />
                </motion.li>
                )
})
}</ul>
      
    </section>
  )
}

export default ProjectsSection
