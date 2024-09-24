"use client";

import React,{useState} from 'react'
import LinkedinIcon from "../../public/linkedin-icon.svg"
import GithubIcon from "../../public/github-icon.svg"
import Link from 'next/link'
import Image from 'next/image'


const EmailSection = () => {
    const [emialSubmitted,setEmailSubmitted] = useState(false)
    const handleSubmit = async (e) =>{
        e.preventDefault(); 
        const data = {
            email:e.target.email.value,
            subject:e.target.subject.value,
            message:e.target.message.value,
        }
        console.log(data)
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send"

        const options = {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSONdata,
        }
        const response = await fetch(endpoint,options);
        const resData  = await response.json();
        console.log(resData)
        if(response.status === 200){
            console.log("Message sent.")
            setEmailSubmitted(true)
        }
    }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="contact">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="">
            <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always open.Whether you have a question or just want to say hi,I&apos;ll try my best to get back to you!
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/Swetabh333">
                    <Image src={GithubIcon } alt="github icon"/>
                </Link>
                <Link href="https://www.linkedin.com/in/swetabh-shreyam/">
                    <Image src={LinkedinIcon } alt="linkedin icon"/>
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your Email</label>
                <input type="email" id="email" name="email" required 
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="jacob@google.com" />
                </div>
                <div className="mb-6">
                <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                <input type="text" id="subject" name="subject" required 
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi." />
                </div>
                <div className="mb-6">
                   <label htmlFor="message" className="text-white block text-sm mb-2 font-medium"></label> 
                   <textarea name="message" id="message"
                   className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                   placeholder="Let's talk about..."
                   />
                </div>
                <button type="submit" className="bg-gradient-to-br from-blue-800  to-red-800 hover:bg-slate-200 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                    Send Message
                </button>{
                    emialSubmitted && (<p className="text-green-500 text-sm mt-2">Email sent successfully!</p>)
                }
            </form>
        </div>
    </section>
  )
}

export default EmailSection
