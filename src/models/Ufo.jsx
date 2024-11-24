import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

import ufoScene from '../assets/ufo.glb'

const Ufo = ({ isRotating, ...props }) => {
    const ref = useRef();
    //load 3d model and it's animations
    const { scene, animations } = useGLTF(ufoScene);
    const { actions } = useAnimations(animations,ref);
    return (
        <mesh {...props} ref={ref}>
          // use the primitive element when you want to directly embed a complex 3D
          model or scene
          <primitive object={scene} />
        </mesh>
      );
    }

export default Ufo;