import React from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaJsSquare } from "react-icons/fa";
import { SiNextdotjs, SiPython, SiTailwindcss, SiCplusplus, SiMongodb } from 'react-icons/si';

const skillIcons = [
  { icon: <FaHtml5 size={140} />, label: "HTML" },
  { icon: <FaCss3Alt size={140} />, label: "CSS" },
  { icon: <FaReact size={140} />, label: "React" },
  { icon: <FaJsSquare size={140} />, label: "Javascript" },
  { icon: <SiNextdotjs size={140} />, label: "Next.js" },
  { icon: <SiPython size={140} />, label: "Python" },
  { icon: <SiTailwindcss size={140} />, label: "Tailwind CSS" },
  { icon: <SiCplusplus size={140} />, label: "C++" },
  { icon: <SiMongodb size={140} />, label: "MongoDB" },
];

const Skills = () => {
  return (
    <div className="w-full md:min-w-[950px] bg-[linear-gradient(to_top,#000,#381a5f_85%)] py-32">
      <div className="text-white w-[400px] md:min-w-[950px] mx-auto p-8 text-center">
        <h2 className="text-6xl font-bold mb-4">What I do</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skillIcons.map((skill, index) => (
            <div
              key={index}
              className="h-[140px] w-[140px] md:h-[220px] md:w-[220px] flex flex-col justify-between 
                        items-center bg-white/10 p-4 rounded-xl"
            >
              {skill.icon}
              <p className="mt-2">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
