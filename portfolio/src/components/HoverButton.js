import React from "react";

const HoverButton = () => {
  return (
    <div className="text-center my-10">
      <button className="bg-blue-500 text-white px-6 py-3 rounded-full transform transition duration-300 hover:scale-110 hover:bg-blue-600">
        Hover Me!
      </button>
    </div>
  );
};

export default HoverButton;

