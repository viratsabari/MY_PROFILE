import React, { useState } from 'react';
import '../Styles/contact.css'; 
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; 
import Swal from 'sweetalert2';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const firebaseConfig = {
  apiKey: "AIzaSyB1T300Cx0c5qiRZ2pEHciaFt7EKWEpvXE",
  authDomain: "userdeails.firebaseapp.com",
  projectId: "userdeails",
  storageBucket: "userdeails.firebasestorage.app",
  messagingSenderId: "668698770850",
  appId: "1:668698770850:web:341f5dcc9eb559953c46fb",
  measurementId: "G-BEWS3RG8ZM"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    connectWithMe: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        connectWithMe: formData.connectWithMe,
        timestamp: new Date(),
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "THANKYOU FOR YOUR MESSAGE",
        showConfirmButton: false,
        width:600,
        height:500,
        timer: 3000
      });

      
      setFormData({
        name: '',
        email: '',
        message: '',
        connectWithMe: '',
      });

    } catch (error) {
      console.error("Error adding document: ", error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Oops, something went wrong.",
        showConfirmButton: true,
      });
    }
  };

  return (
    <div className="contact-container" id='contact'>
      <h2 className="contact-header">Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <input
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="connectWithMe" className="form-label">Connect with Me</label>
          <textarea
            id="connectWithMe"
            name="connectWithMe"
            value={formData.connectWithMe}
            onChange={handleChange}
            className="form-textarea"
            required
          />
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
