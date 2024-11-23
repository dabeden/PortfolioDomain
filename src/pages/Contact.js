import React from "react";
import GradientBackground from "../components/GradientBackground";


const Contact = () => {
    return (
        <GradientBackground fromColor="rgb(224, 175, 160)" viaColor="rgb(46, 41, 78)" toColor="rgb(2, 40, 59)">
            <div className="flex justify-center items-center h-full">
            <h1 className="text-center text-4xl font-bold text-white mb-8">Contact Me</h1>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
                    
                    <p className="text-center text-lg text-gray-600 mb-4">
                        I'm always open to new opportunities! Feel free to reach out.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-gray-800">Email</h2>
                            <p className="text-gray-600">dabeden@gmail.com</p>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-gray-800">Phone</h2>
                            <p className="text-gray-600">(352)-745-9243</p>
                        </div>
                        
                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-gray-800">LinkedIn</h2>
                            <a href="https://www.linkedin.com/in/devonbedenbaugh/" className="text-blue-500">https://www.linkedin.com/in/devonbedenbaugh/</a>
                        </div>

                        <div className="flex justify-between items-center">
                            <h2 className="text-xl text-gray-800">GitHub</h2>
                            <a href="https://github.com/dabeden" className="text-blue-500">github.com/dabeden</a>
                        </div>
                    </div>
                </div>
            </div>
        </GradientBackground>
    );
};

export default Contact;