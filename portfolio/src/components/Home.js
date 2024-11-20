import React from "react";
import {Button} from 'react-bootstrap';
//import './Home.css';
import GradientBackground from "./GradientBackground.js";
import Card from "./Card";
import Grid from "./Grid";

const Home = () => {
    const images = [
        { src: "/images/acme_spaceship.png", title: "Alien Spaceship", description: "Made in Blender for exporting into Unreal Engine"},
        { src: "/images/sword_in_stone.png", title: "Sword in the Stone", description: "Made in Blender for animation and scene setting practice"},
        { src: "/images/acme_spaceship.png", title: "Alien Spaceship", description: "Made in Blender for exporting into Unreal Engine"},
        { src: "/images/sword_in_stone.png", title: "Sword in the Stone", description: "Made in Blender for animation and scene setting practice"},
        { src: "/images/acme_spaceship.png", title: "Alien Spaceship", description: "Made in Blender for exporting into Unreal Engine"},
        { src: "/images/sword_in_stone.png", title: "Sword in the Stone", description: "Made in Blender for animation and scene setting practice"},
        { src: "/images/acme_spaceship.png", title: "Alien Spaceship", description: "Made in Blender for exporting into Unreal Engine"},
    ];

    return (
    <div>
        <GradientBackground>
            <h1 className="text-white text-4xl font-bold">Welcome to My Portfolio!</h1>
            <p className="text-white mt-4">This is a React app styled with Tailwind CSS.</p>
        </GradientBackground>
    <div className>
    
        <div className="bg-gray-100 min-h-screen p-2">
            <h1 className="text-3xl font-bold text-center mb-8">My Cards</h1>
            <Grid>
                {images.map((image,index) => (
                    <Card
                        key={index}
                        imageUrl={image.src}
                        title={image.title}
                        description={image.description}
                    />
                ))}
                </Grid>
            </div>
        </div>
    </div>
      
    );
  };

export default Home;