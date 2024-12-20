import React from "react";
import Swal from "sweetalert2"; // Import Swal
import "../Styles/Projects.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "GRABIFY: An Intelligent E-Commerce Platform for Seamless Shopping and User Experience",
      description: "Developed a fully functional e-commerce website using React, featuring advanced UI/UX components and responsive design for optimal performance across devices.",
    },
    {
      title: "Fantasy Analysis System (Webview App)",
      description:
        "Provides winning dream teams for Indian Premier League 2023 matches.",
    },
    {
      title: "Grammar Gamification Website",
      description: "Built using HTML, CSS, JavaScript, PHP, and MySQL.",
    },
  ];

  const speakText = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);


    const interval = setInterval(() => {
      if (window.speechSynthesis.speaking === false) {
        clearInterval(interval);
        
        Swal.fire({
          position: "center",
          icon: "info",
          title: "For more info, visit my GitHub",
          showConfirmButton: false,
          timer: 5000,
          width: '60%', 
          height: 280, 
          customClass: {
            popup: 'swal-popup-custom', 
          },
        });
      }
    }, 100); 
  };

  return (
    <div className="projects-container" id="works">
      
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <button
            className="speak-button"
            onClick={() => speakText(`${project.title}. ${project.description}`)}
          >
            GIVE INTRO TO THE PROJECT
          </button>
        </div>
      ))}
    </div>
  );
};

export default Projects;
