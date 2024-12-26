"use client";
import React from "react";
import Image from "next/image";
import finance from "@/assets/finance.png";
import pc from "@/assets/pc.png";
import book from "@/assets/book.png";
import card from "@/assets/card.png";

const About = () => {
  return (
    <div className="w-full md:min-w-[950px] max-w-[1200px] mx-auto mt-10" id="about">
      <h1 className="text-white text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4">
        About <span className="text-orange-400">Me</span>
      </h1>

      <div className="px-6 md:px-0 grid md:grid-cols-8 place-items-center gap-6">
        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700  to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row gap-6">
            <Image src={book} alt="book" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl text-white/80 font-bold">Education</h2>
              <p className="tezt-lg text-white/80 mt-2">
                I am a currently pursuing B.Tech Computer Science and
                Engineering at BSARCIST.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700  to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row gap-6">
            <Image src={finance} alt="finance" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl text-white/80 font-bold">
                Problem Solving
              </h2>
              <p className="tezt-lg text-white/80 mt-2">
                I approach problems in a creative and systematic way and analyze
                solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-3 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700  to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row gap-6">
            <Image src={card} alt="card" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl text-white/80 font-bold">Experience</h2>
              <p className="tezt-lg text-white/80 mt-2">
                I have great projects done and published and had Internship
                experiences.
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:col-span-5 relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-purple-700  to-orange-800 opacity-30 animate-gradient-xy"></div>
          <div className="flex flex-row gap-6">
            <Image src={pc} alt="pc" className="w-auto h-[130px]" />
            <div className="flex flex-col mt-4">
              <h2 className="text-2xl text-white/80 font-bold">
                Technical Skills
              </h2>
              <p className="tezt-lg text-white/80 mt-2">
                As a Fullstack Web Developer, I specialize in React JS, Next.js,
                and Tailwind CSS. My expertise extends to creating responsive,
                user-friendly interfaces.I am also great in C++ and Python. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
