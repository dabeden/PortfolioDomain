import React from "react";
import GradientBackground from "../components/GradientBackground";

const About = () => {
    return (
        <GradientBackground fromColor="rgb(137, 152, 120)" viaColor="rgb(224, 175, 160)" toColor="rgb(46, 41, 78)">
                        <div className="flex justify-center items-center h-full">
                        <h1 className="text-center text-4xl font-bold text-white mb-8">The Story  </h1>
                        
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
                <h1 className="text-center text-4xl mt-8">Download My Resume</h1>
                <div className="mt-8 text-center">
                    <a
                        href="/resume/DEVON-B-FALL24-RESUME.pdf"  // Link to the PDF in the public folder
                        download="devonb_resume.pdf"  // The file will be downloaded with this name
                        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
                    >
                        Download My Resume
                    </a>
                    </div>
                </div>
            </div>
        </GradientBackground>
    );
};

export default About;