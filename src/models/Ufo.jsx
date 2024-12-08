import { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; 
import ufoScene from '../assets/ufo.glb';

const Ufo = ({ isRotating, ...props }) => {
    const ref = useRef();
    const { scene } = useGLTF(ufoScene);

    // Bobbing animation variables
    const bobbingSpeed = 4.5; // Adjust speed of bobbing
    const bobbingHeight = 0.4; // Adjust how high it bobs

    const initialPosition = useRef([0, 0, 0]);

    //Initialize initial position
    useEffect(() => {
        if (ref.current) {
            initialPosition.current = [...ref.current.position];
        }
    }, []);

    // Animation loop for bobbing
    useFrame((state) => {
        if (ref.current) {
            //if (isRotating && ref.current) {
            const time = state.clock.getElapsedTime(); // Get elapsed time
            const [x, y, z] = initialPosition.current;
            // Apply bobbing effect as an offset to the initial position
            ref.current.position.set(x, y + Math.sin(time * bobbingSpeed) * bobbingHeight, z);
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