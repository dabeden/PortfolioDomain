import React from 'react';
import ParticlesComponent from '../components/Particles';

const Project = () => {

    return (

        
        <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "20px" }}>
          <h1>Welcome to My Project Page</h1>
          <p>This is an awesome page with a particle background.</p>
          <ParticlesComponent id="particles" />
        </div>
      
    );
  };
  
  export default Project;