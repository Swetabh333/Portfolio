/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop-with-neon-bg.jpg";

const imageAltText = "A laptop with neon lights and a cup on it.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "FileShareIO",
    description:
      "A go based application for file sharing between different users.",
    url: "https://github.com/Swetabh333/File-Sharing-App",
  },
  {
    title: "Productiviy Tracker",
    description:
      "A productivity Tracker App powered by Next.js.",
    url: "https://jotion-lime.vercel.app/",
  },
  {
    title: "Multi-Threaded Proxy Server",
    description:
      "A multi threaded proxy server with concurrency control andcaching implemented in C++.",
    url: "https://github.com/Swetabh333/multi-threaded-proxy-server",
  },
  {
    title: "Resume website",
    description:
      "A resume erbsite created using Next.js.",
    url: "https://swetabh.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
