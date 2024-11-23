import {Suspense, React} from "react";
import {Button} from 'react-bootstrap';
import {Canvas} from '@react-three/fiber';
import GradientBackground from "./GradientBackground.js";
import Card from "./Card";
import Grid from "./Grid";
import Loader from "./Loader";
import Island from "../models/Island.jsx"
import Cottage from "../models/Cottage.jsx"

const Home = () => {
    const images = [
        { src: "images/acme_spaceship.png", title: "Alien Spaceship", description: "Made in Blender for exporting into Unreal Engine"},
        { src: "images/sword_in_stone.png", title: "Sword in the Stone", description: "Made in Blender for animation and scene setting practice"},
        { src: "images/acme_spaceship.png", title: "Alien Spaceship", description: "Made in Blender for exporting into Unreal Engine"},
        { src: "images/sword_in_stone.png", title: "Sword in the Stone", description: "Made in Blender for animation and scene setting practice"},
        { src: "images/acme_spaceship.png", title: "Alien Spaceship", description: "Made in Blender for exporting into Unreal Engine"},
        { src: "images/sword_in_stone.png", title: "Sword in the Stone", description: "Made in Blender for animation and scene setting practice"},
        { src: "images/acme_spaceship.png", title: "Alien Spaceship", description: "Made in Blender for exporting into Unreal Engine"},
    ];
    
    const adjustCottageForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        //let islandRotation = [45, 4, 0];
        let cottageRotation = [.6, 3.8, 0];
    

        if(window.innerWidth < 768){
            screenScale = [14, 14, 14];
            screenPosition = [0, -6.5, -43];
        } else { 
            screenScale = [17, 17, 17];
            screenPosition = [10, -8, -50];
        }


        return [screenScale, screenPosition, cottageRotation];
       // return [screenScale, screenPosition, islandRotation];
    
    }

    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43];
        //let islandRotation = [45, 4, 0];
        let islandRotation = [45, 0, 0];
    

        if(window.innerWidth < 768){
            screenScale = [14, 14, 14];
            screenPosition = [0, -6.5, -43];
        } else { 
            screenScale = [17, 17, 17];
            screenPosition = [0, -6.5, -43];
        }


        
        return [screenScale, screenPosition, islandRotation];
    
    }

    //const [islandScale, islandPosition, islandRotation] = adjustModelForScreenSize();
    const [cottageScale, cottagePosition, cottageRotation] = adjustCottageForScreenSize();
    return (
        <section className="w-fill h-screen relative">
            <Canvas
                className="we-full h-screen bg-transparent"
                camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1,1,1]} intensity={1} />
                    <ambientLight intensity={.5}/>
                    <pointLight />
                    <spotLight />
                    <hemisphereLight skycolor="#b1e1ff" groundColor="#000000" intensity={1}/>
                    <Cottage
                        position={cottagePosition}
                        scale={cottageScale}
                        rotation={cottageRotation}
                    />
                </Suspense>
            </Canvas>
        </section>


      
    );
  };

export default Home;