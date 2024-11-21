import React from "react";
import GradientBackground from "./GradientBackground";

const Contact = () => {
    return (
        <GradientBackground fromColor="rgb(224, 175, 160)" viaColor="rgb(46, 41, 78)" toColor="rgb(2, 40, 59)">
            <h1 className="text-center text-4xl mt-8">Contact Me</h1>
        </GradientBackground>
    );
};

export default Contact;