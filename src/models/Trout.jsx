import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; 
import React from "react";

import troutScene from "../assets/bull_trout.glb"

//model and animations from 
//https://sketchfab.com/3d-models/bull-trout-c34b0bdf58be422ca42af1f5a6106a00

const Trout = ({...props}) => {
    const {scene, animations} = useGLTF(troutScene);
    const troutRef = useRef();

    const { actions } = useAnimations(animations, troutRef);

    useEffect(() => {
        
    }, []);



return (
    <mesh position={[0,-4,-10]} scale={[.003,.003,.003]} ref = {troutRef}>
        <primitive object={scene} />
    </mesh>
)
}

export default Trout;