import {Suspense, React, useRef, useEffect, useState, forwardRef} from "react";
import {Canvas} from '@react-three/fiber';
import {Loader} from '../components/index.js';
import Tilt from "react-tilt";
import { motion, useInView } from "framer-motion";

import Island from "../models/Island.jsx"
import Sky from "../models/Sky.jsx"
import Ufo from "../models/Ufo.jsx";
import HomeInfo from "../components/HomeInfo.js";

import { fadeIn, textVariant } from "../utils/motion.js";

const Home = () => {
    const images = [
        { src: "images/acme_spaceship.png", title: "Alien Spaceship", description: "Made in Blender for exporting into Unreal Engine"},
        { src: "images/sword_in_stone.png", title: "Sword in the Stone", description: "Made in Blender for animation and scene setting practice"},
      
    ];

    const cottageRef = useRef();
    

    const [currentStage, setCurrentStage] = useState(1);
    const [isRotating, setIsRotating] = useState(false);
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);

    const adjustIslandForScreenSize = () => {
        let screenScale, screenPosition;
    
        if (window.innerWidth < 768) {
          screenScale = [10, 10, 10];
          screenPosition = [0, -6.5, -43.4];
        } else {
          screenScale = [15, 15, 15];
          screenPosition = [0, -6.5, -43.4];
        }
    
        return [screenScale, screenPosition];
      };
    
    
    
    
    const adjustUfoForScreenSize = () => {
        let screenScale, screenPosition;
    
        if(window.innerWidth < 768){
            screenScale = [1, 1, 1];
            screenPosition = [0, 5.2, -10];
        } else { 
            screenScale = [1, 1, 1];
            screenPosition = [0, 5.2, -10];
        }


        
        return [screenScale, screenPosition];
    
    }

    //const [islandScale, islandPosition, islandRotation] = adjustModelForScreenSize();
    const [islandScale, islandPosition] = adjustIslandForScreenSize();
    const [ufoScale, ufoPosition] = adjustUfoForScreenSize();

    return (
        <section className="w-fill h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
                {currentStage && <HomeInfo currentStage={currentStage} />}
            </div>
            <Canvas
                className={`we-full h-screen bg-transparent ${isRotating ? 
                'cursor-grabbing' : 'cursor-grab'}`}
                
                camera={{near: 0.1, far: 1000}}
                style={{marginTop:'-8px'}}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1,1,1]} intensity={1} />
                    <ambientLight intensity={.5}/>
                    <pointLight />
                    <spotLight />
                    <hemisphereLight skycolor="#b1e1ff" groundColor="#000000" intensity={1}/>

                    
                    <Sky 
                    isRotating={isRotating}
                    rotation={[0,0,0]}
                    />;
                    
                    <Island
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        setCurrentStage={setCurrentStage}
                        position={islandPosition}
                        scale={[.7,.7,.7]}
                        rotation={[0.1, 4.7, 0]}
                        
                    />;
                    
                    <Ufo
                        isRotating={isRotating}
                        scale={ufoScale}
                        position={ufoPosition}
                        rotation={[.4, 5.2, -.2]}
                    />;
                    
                    
                </Suspense>
            </Canvas>
            <div className="spacer wave-svg-layer-bluepurpletop">
                <div className="flex h-full  items-end">
                    <motion.div variants={textVariant(0.5)}
                    initial="hidden"
                    animate="show"
                    className="px-20 text-blue-200 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] nunito-bold"
                    >
                        Overview.
                    </motion.div>
                    
                    
                </div>
            </div>
            <div className="spacer wave-svg-layer-undersea-bottom">
                    <div className="flex items-start ">
                    <motion.p
                        variants={fadeIn("up", "", 1, 1)}
                        initial="hidden"
                        animate="show"
                        className='mt-4 px-40 text-blue-300 text-secondary text-[17px] max-w-3xl leading-[30px] nunito-bold'
                    >
                        I’m a motivated Fullstack Developer with experience in JavaScript, TypeScript, Python, C++, Unreal Engine, and UI design.

                        I collaborate closely with clients to deliver tailored, effective solutions and seek opportunities to grow and learn as a programmer.
                    </motion.p>
                    </div>
            </div>
        </section>


      
    );
  };

export default Home;