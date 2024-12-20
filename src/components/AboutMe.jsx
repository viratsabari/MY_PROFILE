import React, { useEffect, useState } from "react";
import Swal from "sweetalert2"; 
import "../Styles/AboutMe.css";
import image from "./../assests/image.jpg";


const AboutMe = () => {
  const [text, setText] = useState("");

  const fullText = "MMERN Stack Developer";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText((prevText) => prevText + fullText[i]);
      i += 1;

      if (i === fullText.length) {
        i = 0;
        setText("");
      }
    }, 250);

    return () => clearInterval(typingInterval);
  }, []);

  const handleSpeech = () => {

    window.speechSynthesis.cancel();

    const speechText = document.getElementById("speech").textContent + " thanks for visiting";
    const speech = new SpeechSynthesisUtterance(speechText);
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
          heightAuto: false, 
          customClass: {
            popup: 'swal-popup-custom', 
          },
        });
      }
    }, 100); 
  };

  return (
    <div className="about-container" id="about">
      
      <img src={image} alt="Sabarinathan" className="about-img" />
      <div className="about-content">
        <div className="about-text">
          <h2>About me</h2>
          <h3>
            I'm Sabarinathan S <br />
            <span>{text}</span>
          </h3>
          <p id="speech">
            I am a passionate and dedicated MERN stack developer with a strong
            foundation in full-stack web development. My skills include building
            interactive and responsive web applications using MongoDB, Express,
            React, and Node.js. I am continuously learning and exploring new
            technologies, with a focus on creating efficient, scalable, and
            user-friendly applications.
          </p>
          <div className="tts-container">
            <button onClick={handleSpeech} className="tts-button">
              CAN I INTRODUCE MYSELF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
