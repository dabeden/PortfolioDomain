import React from "react";

const Grid = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mx-auto">
      {children}
    </div>
  );
};

export default Grid;
