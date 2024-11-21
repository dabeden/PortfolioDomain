import React from "react";

const GradientBackground = ({children, fromColor = "rgb(244, 175, 160)", viaColor = "rgb(46, 41, 78)", toColor = "rgb(255, 212, 0)" }) => {
    const gradientStyle = {
        background: `linear-gradient(to right, ${fromColor}, ${viaColor}, ${toColor})`,
    };

    return (
        <div style={gradientStyle} className="h-screen flex items-center justify-center">
            {children}
        </div>
    );
};

export default GradientBackground;