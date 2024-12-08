import React from 'react';
import ParticlesComponent from '../components/Particles';
import Particles from '@tsparticles/react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Project = () => {

  const projects = [
    {
      title: "Sword in the Stone",
      description: "A blender project created to practice lighting, environment building, animation, and asset creation",
      techStack: ["Blender"],
      image:["images/sword_in_stone.png"],
      link: "https://example.com/weather-tracker"
    },
    {
      title: "NEFP Multilingual Database Solution",
      description: "A Fullstack webapp with a PostgreSQL database. This was a hands on experiment to create a unified asset for the foodbank",
      techStack: ["React", "Django", "Chart.js"],
      image:["images/NEFP_Showcase.png"],
      link: "https://example.com/expense-tracker"
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my projects, skills, and contact information in a responsive design.",
      techStack: ["React", "CSS", "JavaScript", "Threejs"],
      image:["images/website_showcase_ph.png"],
      link: "https://beden.show/"
    },
    {
      title: "Tech Ninja",
      description: "A 2d platformer roguelike. This was built from the ground up using SDL and other basic libraries",
      techStack: ["C++", "SDL2", "Aseprite"],
      image:["images/techninja.png"],
      link: "https://example.com/e-commerce"
    },
    {
      title: "Acme Spaceship",
      description: "Amateur project to test how capable I was with 3d modeling without referring to any resources",
      techStack: ["Blender"],
      image:["images/sword_in_stone.png"],
      link: "https://example.com/chat-app"
      
    }
    
  ];

  return (
    <div style={{ textAlign: "center", padding: "0px", display: "flex", alignItems: "center",height: "100vh",}}>
      <h1>My Projects</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          opacity: 0.001,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        style={{
          display: "flex",
          justifyContent: "center", // Center the swiper container
          alignItems: "center", // Align slides vertically (if necessary)
          
        }}
        >
        {projects.map((project, index) => (
           <SwiperSlide
           key={index}
           style={{
             width: "400px", // Increase the width of the slide
             height: "550px",
             display: "flex", // Enable flexbox for centering
             justifyContent: "center", // Center card horizontally
             alignItems: "center", // Center card vertically
           }}
         >
           <div
             style={{
               background: "rgba(255, 255, 255, 0.9)",
               padding: "40px", // Increase padding for a larger card
               borderRadius: "10px",
               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
               width: "100%", // Card width matches slide width
               height: "90%", // Card height matches slide height
               textAlign: "center", // Center text inside the card
             }}
           >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Tech:</strong> {project.techStack.join(", ")}
              </p>
              <button
                style={{
                  marginTop: "10px",
                  padding: "10px",
                  border: "none",
                  borderRadius: "5px",
                  background: "#007bff",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => window.open(project.link, "_blank")}
              >
                View Project
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ParticlesComponent id="particles"
           />
           <div style={{ 
  display: 'grid', 
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
  gap: '20px', 
  padding: '20px', 
  position: 'relative',
  zIndex: 2,
}}></div>
    </div>
  );
};

  export default Project;