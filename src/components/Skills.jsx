import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss,  SiMongodb, SiMysql, SiExpress, SiRedux } from "react-icons/si";
import { SiSass } from 'react-icons/si'; 
import "../Styles/Skills.css";


const skillsData = [
  { skill: "HTML", icon: <FaHtml5 />, level: "90%" },
  { skill: "CSS", icon: <FaCss3Alt />, level: "90%" },
  { skill: "SCSS", icon: <SiSass />, level: "70%" },
  { skill: "TailWind", icon: <SiTailwindcss />, level: "70%" },
  { skill: "JavaScript", icon: <FaJs />, level: "65%" },
  { skill: "React", icon: <FaReact />, level: "60%" },
  { skill: "Node.js", icon: <FaNodeJs />, level: "75%" },
  { skill: "Express.js", icon: <SiExpress />, level: "80%" },
  { skill: "MongoDB", icon: <SiMongodb />, level: "72%" },
  { skill: "MySQL", icon: <SiMysql />, level: "70%" },
  { skill: "Git", icon: <FaGitAlt />, level: "85%" },
  { skill: "Redux", icon: <SiRedux />, level: "85%" },
];

const Skills = () => {
  return (
   
    <div className="skills-container" id="skills">
      
 
      <h2>Skills</h2>
      <div className="skills-row">
        {skillsData.map((item, index) => (
          <div key={index} className="skill-bar">
            <div className="skill-header">
              {item.icon}
              <span>{item.skill}</span>
            </div>
            <div className="progress">
              <div className="progress-fill" style={{ "--progress-width": item.level }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
