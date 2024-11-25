import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber"; 
import React from "react";

import fishScene from "../assets/fish_animated.glb"

//model and animations from 
//https://sketchfab.com/3d-models/fish-animated-665ab73155a44d91908519d84e5fd002

const Fish = () => {
    const {scene, animations} = useGLTF(fishScene);
    const fishRef = useRef();

    const { actions } = useAnimations(animations, fishRef);

    useEffect(() => {
        actions["Take 001"].play();
    }, []);

    useFrame(({ clock, camera }) => {
        //update the x position to mimic swaying in the water
        fishRef.current.position.x = Math.sin(clock.elapsedTime) * 0.2 + 2;

        //Check if fish has reached edge of camera, if he has, turn around. 
        if(fishRef.current.position.x > camera.position.x + 10 ) {
            //change backwards
            fishRef.current.rotation.y = Math.PI;
        
        } else if (fishRef.current.position.x < camera.position.x -10) {
            fishRef.current.rotation.y = 0
        }

        //Now, update the x and z positions based on the direction the fish is facing
        if(fishRef.current.rotation.y === 0) {
            //Forward Movement
            fishRef.current.position.x -= 0.1;
            fishRef.current.position.z += 0.1;

        } else {
            //Backwards Movement
            fishRef.current.position.x -= 0.1;
            fishRef.current.position.z += 0.1
        }
    });

    return (
        <mesh position={[10,-10,-10]} scale={[.03,.03,.03]} ref = {fishRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Fish;