import React, { useRef } from "react";
import { Sphere, Decal, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three"; 




const IconSphere = ({ position,rotation, rotationY, scale, icon, scaleFactor = 1 }) => {
  const texture = useTexture(icon);
  const sphereRef= useRef();

  useFrame(() => {
    if (sphereRef.current) {
      // Apply rotation to the sphere
      //sphereRef.current.rotation.y += 0.01;  // Adjust this value for speed of rotation
    }
  });

    // Calculate the decal rotation (facing opposite the center)


  return (
    <Sphere ref={sphereRef} args={[1, 32, 32]} rotation={[0,rotationY,0]} position={position} scale={scale}>
      <meshStandardMaterial 
      transparent={true} 
      metalness={0.3}  // Pearls are somewhat metallic
      roughness={0.1}  // Pearls have a smooth surface
      envMapIntensity={1.5} // Adds reflection to simulate shine
      color={0xf5efdf}  // You can adjust to a pearl color, e.g., off-white />
      />

      <Decal
        position={[0, 0, 1]} // Place decal on the sphere's surface
        rotation={[0,0,0]} // Ensure decal faces outward
        scale={[scaleFactor, scaleFactor, scaleFactor]} // Scale the decal
        map={texture} // Apply the texture (icon)
        depthWrite={false}
      />
    </Sphere>
  );
};

export default IconSphere;