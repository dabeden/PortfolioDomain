import React from "react";
import {Button} from 'react-bootstrap';
//import './Home.css';
import GradientBackground from "./GradientBackground.js";


const Home = () => {
    return (
      <GradientBackground>
        <h1 className="text-white text-4xl font-bold">Welcome to My Portfolio!</h1>
        <p className="text-white mt-4">This is a React app styled with Tailwind CSS.</p>
      </GradientBackground>
    );
  };

export default Home;