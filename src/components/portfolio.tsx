"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import project from "@/assets/proj1.jpg";
import project1 from "@/assets/proj2.jpg";

const projects = [
  {
    title: "Recipe Viewer website",
    desc: "A website to view recipe put it on favorites and manage favorites.",
    devstack: "Next.js, MongoDB, Daisy UI,React.js, Tailwind CSS",
    link: "https://recipe-viewer-beta.vercel.app/",
    git: "https://github.com/AbubakkarSithik/Recipe_Viewer",
    src: project,
  },
  {
    title: "HRMS Web app",
    desc: "A Human Resource management system done for our client during my internship at Afablez Semiconductors",
    devstack: "React.js, MsSQL, API Integration",
    link: "#",
    git: "#",
    src: project1,
  },
];

const Portfolio = () => {
  return (
    <div
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-30 w-full md:min-w-[950px] "
      id="portfolio"
    >
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 my-10">
        Selected<span className="text-orange-400"> Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-24 space-y-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-12 flex flex-col ${
              index % 2 == 1
                ? "md:flex-row-reverse gap-12"
                : "md:flex-row"
            }`}
          >
            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg break-words text-white/70">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devstack}
              </p>
              <div className="w-64 h-[1px] bg-gray-400 my-4">
                <a href={project.link} className="mr-6 text-xl md:text-md" target="_blank">
                  Link
                </a>
                <a href={project.git} target="_blank" className="text-xl md:text-md">Git</a>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="mt-8 md:mt-0 h-[350px] w-[500px] object-cover border rounded border-gray-700"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
