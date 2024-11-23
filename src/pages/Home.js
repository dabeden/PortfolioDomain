import {Suspense, React, useRef, useEffect, useState} from "react";
import {Button} from 'react-bootstrap';
import {Canvas} from '@react-three/fiber';
import {GradientBackground, Card, Grid, Loader} from '../components/index.js';

import Island from "../models/Island.jsx"
import Cottage from "../models/Cottage.jsx"
import Sky from "../models/Sky.jsx"
import Ufo from "../models/Ufo.jsx";

const Home = () => {
    const images = [
        { src: "images/acme_spaceship.png", title: "Alien Spaceship", description: "Made in Blender for exporting into Unreal Engine"},
        { src: "images/sword_in_stone.png", title: "Sword in the Stone", description: "Made in Blender for animation and scene setting practice"},
      
    ];
    
    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    const adjustCottageForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];

        let rotation = [.5, 4, 0];
    

        if(window.innerWidth < 768){
            screenScale = [14, 14, 14];
            screenPosition = [0, -6.5, -43];
        } else { 
            screenScale = [17, 17, 17];
            screenPosition = [0, -8, -50];
        }


        return [screenScale, screenPosition, rotation];
       // return [screenScale, screenPosition, islandRotation];
    
    }

    const adjustUfoForScreenSize = () => {
        let screenScale, screenPosition;
    
       
    

        if(window.innerWidth < 768){
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else { 
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }


        
        return [screenScale, screenPosition];
    
    }

    //const [islandScale, islandPosition, islandRotation] = adjustModelForScreenSize();
    const [cottageScale, cottagePosition, cottageRotation] = adjustCottageForScreenSize();
    const [ufoScale, ufoPosition] = adjustUfoForScreenSize();

    return (
        <section className="w-fill h-screen relative">
            <Canvas
                className={`we-full h-screen bg-transparent ${isRotating ? 
                'cursor-grabbing' : 'cursor-grab'}`}
                
                camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1,1,1]} intensity={1} />
                    <ambientLight intensity={.5}/>
                    <pointLight />
                    <spotLight />
                    <hemisphereLight skycolor="#b1e1ff" groundColor="#000000" intensity={1}/>

                    
                    <Sky />
                    <Cottage
                        position={cottagePosition}
                        scale={cottageScale}
                        rotation={cottageRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Ufo
                        isRotating={isRotating}
                        ufoScale={ufoScale}
                        ufoPosition={ufoPosition}
                        rotation={[0, 20, 0]}
                    />
                    
                </Suspense>
            </Canvas>
        </section>


      
    );
  };

export default Home;