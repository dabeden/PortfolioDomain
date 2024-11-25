import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; // Correct import for useFrame

import ufoScene from '../assets/ufo.glb';

const Ufo = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene } = useGLTF(ufoScene);

    // Bobbing animation variables
    const bobbingSpeed = 4.5; // Adjust speed of bobbing
    const bobbingHeight = 0.4; // Adjust how high it bobs

    // Animation loop for bobbing
    useFrame((state) => {
        if(isRotating){
        const time = state.clock.getElapsedTime(); // Get elapsed time
        if (ref.current) {
            ref.current.position.y = Math.sin(time * bobbingSpeed) * bobbingHeight;
        }
    }
    });

    return (
        <mesh {...props} ref={ref}>
            {/* Use the primitive element to embed the model */}
            <primitive object={scene} />
        </mesh>
    );
};

export default Ufo;