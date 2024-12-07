import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import IconSphere from './IconSphere';
import RotatingGroup from './RotatingGroup';

const CanvasBox = ({ title, description, icons }) => {



  return (
    <div
      style={{
        border: "14px solid #ccc",
        borderRadius: "10px",
        padding: "16px",
        margin: "16px",
        width: "600px",
        height: "200px",
        boxShadow: "0 0px 0px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>

      <div style={{ width: "100%", height: "300px" }}>
        <Canvas onPointerDown={() => console.log("CanvasBox Clicked")}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} />
          {/* Map through the icons array and create an IconSphere for each */}
          <RotatingGroup icons={icons}  />
        </Canvas>
      </div>
    </div>
  );
};

export default CanvasBox;