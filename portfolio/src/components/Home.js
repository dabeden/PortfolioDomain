import React from "react";
import {Button} from 'react-bootstrap';
//import './Home.css';
import GradientBackground from "./GradientBackground.js";
import Cards from "./Cards";

const Home = () => {
    return (
    <div>
      <GradientBackground>
        <h1 className="text-white text-4xl font-bold">Welcome to My Portfolio!</h1>
        <p className="text-white mt-4">This is a React app styled with Tailwind CSS.</p>
      </GradientBackground>
      <div>
            <h1 className="text-3xl font-bold text-center mt-8">Welcome to My Portfolio</h1>
            <Cards /> {/* This is how you call and use the Card component */}
      </div>
    </div>
      
    );
  };

export default Home;