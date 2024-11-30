import {useRef} from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';


import skyDrop from '../assets/sky.glb'

const Sky = ({isRotating, ...props}) => {
    const sky = useGLTF(skyDrop)
    const skyRef = useRef();

    useFrame((_, delta) => {
        if(isRotating){
            skyRef.current.rotation.y += 0.06 *delta
            skyRef.current.rotation.z += 0.06 *delta
        }
    })

    return (
        <mesh ref={skyRef}>
            <primitive object={sky.scene} />
        </mesh>
    )
}

export default Sky;