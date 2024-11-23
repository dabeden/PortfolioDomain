import React from "react";
import { useGLTF } from '@react-three/drei'

import ufoScene from '../assets/ufo.glb'

const Ufo = ({ isRotating, ...props }) => {
    const { scene, animations } = useGLTF(ufoScene);
    return (
        <mesh position={[0, 0, 1]} scale={[.3,.3,.3]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Ufo;