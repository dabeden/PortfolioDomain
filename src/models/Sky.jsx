import React from "react";
import { useGLTF } from "@react-three/drei";
import skyDrop from '../assets/skydrop.glb'

const Sky = () => {
    const sky = useGLTF(skyDrop)
    return (
        <mesh>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky;