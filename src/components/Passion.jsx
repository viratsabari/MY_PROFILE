import React from "react";
import "../Styles/Passion.css";

const Passion = () => {
  const passions = [
    {
      title: "Design",
      description: "Design encompasses both functionality and aesthetics.",
      icon: "🎨",
    },
    {
      title: "Development",
      description: "Passionate about web design and development.",
      icon: "💻",
    },
    {
      title: "Continuous Learning",
      description: "Constantly improving and learning new technologies.",
      icon: "📚",
    },
  ];

  return (
    <div className="passion-container" id="passion">
      
      <h2>Passion</h2>
      <div className="passion-cards">
        {passions.map((item, index) => (
          <div key={index} className="card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Passion;
