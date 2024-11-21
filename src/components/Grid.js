import React from "react";

const Grid = ({children}) => {
    return (
        <div className="grid grid-cols-1sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
            {children}
        </div>
    );
};

export default Grid;