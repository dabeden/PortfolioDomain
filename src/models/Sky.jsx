import {useRef} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';


import skyDrop from '../assets/skybox_default.glb'

const Sky = ({isRotating, ...props}) => {
    const sky = useGLTF(skyDrop)
    const skyRef = useRef();

    useFrame((_, delta) => {
        if(isRotating){
            skyRef.current.rotation.y += 0.03 *delta
            skyRef.current.rotation.z += 0.003 *delta
        }
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky;