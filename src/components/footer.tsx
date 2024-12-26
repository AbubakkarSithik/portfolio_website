"use client";
import React from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full md:min-w-[950px]  px-6 md:px-0 mt-12 text-white/70 py-8 max-w-[1000px] mx-auto border-t border-gray-700 pt-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Abubakkar Sithik</h1>
      <div className="flex space-x-6 mt-4 ">
        <a href="https://www.linkedin.com/in/abubakkar-s-8480091b9/" target="_blank" className="hover:text-gray-300">
          <FaLinkedin size={24} />
        </a>
        <a href="https://www.instagram.com/abuxsithik/profilecard/?igsh=cThnMjdyencxeDRn" className="hover:text-gray-300" target="_blank">
          <FaInstagram size={24} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
