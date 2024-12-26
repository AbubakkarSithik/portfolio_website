"use client";
import Image from "next/image";
import cursor from "@/assets/icon1.png";
import lightning from "@/assets/icon2.png";
import { motion } from "framer-motion";
import profilepic from "@/assets/profilepic.png";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full md:min-w-[950px] re1ative overflow-clip bg-[linear-gradient(to_bottom,#000,#2B1942_35%,#8F5C55_60%,#DBAF6E_80%)]">
      <div className="relative">
        <div className="text-4xl md:text-8xl font-bold text-center">
          <h1 className="text-[#98B4CE]">Hi, I am</h1>
          <h1 className="text-[#E48A57]">Abubakkar Sithik</h1>
        </div>

        <motion.div className="hidden md:block absolute left-[50px] top-[170px]" drag>
          <Image
            src={cursor}
            alt="cursor"
            height="190"
            width="190"
            draggable="false"
            className=""
          />
        </motion.div>
        <motion.div className="hidden md:block absolute right-[50px] top-[80px]" drag>
          <Image
            src={lightning}
            alt="cursor"
            height="110"
            width="110"
            draggable="false"
            className=""
          />
        </motion.div>

        <p className="text-center text-xl max-w-[550px] mx-auto mt-8 text-white/80">
          I am a full-stack developer focused on creating websites that provide
          the best experience for users and also I am a student and an enthusiast.
        </p>
        <Image
          src={profilepic}
          alt="profile picture"
          className="h-[340px] w-[340px] mx-auto shadow-2xl rounded-[50%] mt-4 bg-[radial-gradient(closest-side,#000_60%,#2B1942)] hover:scale-75 duration-200"
        />
      </div>
    </div>
  );
};

export default Hero;
