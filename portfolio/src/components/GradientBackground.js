import React from "react";

const GradientBackground = ({children}) => {
    return (
        <div className="h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 flex items-center justify-center">
            {children}
        </div>
    );
};

export default GradientBackground;