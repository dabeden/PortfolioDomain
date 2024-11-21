import React from "react";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="max-w-sm min-w-[550px] mx-auto bg-white rounded-lg shadow-lg">
      {/* Card Image */}
      <div className="overflow-hidden rounded-md border-2 border-gray-300">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-[550px] object-cover transition-transform transform hover:scale-105" // Image hover effect
        />
      </div>

    </div>
  );
};

export default Card;



