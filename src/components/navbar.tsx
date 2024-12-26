"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Contact", path: "#contact"},
];

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  const menuVarients = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className="text-white/70 pt-4 bg-black">
      <div className="hidden md:flex items-center justify-center px-2 py-2 mx-auto max-w-[400px]">
        <ul className="flex flex-row space-x-10 p-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className="group">
                <h1 className="text-lg text-white/70 cursor-pointer">{link.title}</h1>
                <div className="relative">
                <div className="abso1ute w-2/3 h-1 transition-all duration-30 ease-out bg-orange-700 rounded-full group-hover:w-full"></div>
                <div className="mt-1 abso1ute w-1/3 h-1 transition-all duration-30 ease-out bg-orange-500 rounded-full group-hover:w-full"></div>
              </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={toggleNav}
        className="md:hidden absolute top-5 left-2 border rounded text-white/70 border-white/70 p-2"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <motion.div
        initial={false}
        variants={menuVarients}
        animate={nav ? "open" : "closed"}
        className="fixed left-0 mt-20 top-0 w-full z-40 bg-black/90"
      >
        <ul className="text-4xl font-semibold my-24 text-center space-y-4">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} onClick={closeNav}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navbar;
