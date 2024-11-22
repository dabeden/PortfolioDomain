import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import{ useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import CottageScene from '../assets/painterly_cottage.glb';



export function Cottage(props) {
    const cottageRed = useRef();
    const { nodes, materials } = useGLTF(CottageScene);
    return (
      <a.group {...props} dispose={null}>
        <a.group rotation={[-Math.PI / 2, 0, 0]} scale={0.28}>
          <a.group rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.polySurface55_blinn3_0.geometry}
              material={materials.blinn3}
            />
            <mesh
              geometry={nodes.polySurface55_blinn2_0.geometry}
              material={materials.blinn2}
            />
            <mesh
              geometry={nodes.polySurface55_blinn4_0.geometry}
              material={materials.blinn4}
            />
          </a.group>
        </a.group>
      </a.group>
    )
  }
  
  export default Cottage;