import React from "react";

const Card = ({imageUrl, title, description}) => {
    return (
        <div className="max-w-sm mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <img
            src={imageUrl}
            alt={title}
            className="w-full h-[550px] object-cover rounded-md"
            />
            <h2 className="text-2x1 font-bold mb-4 text-gray-800">{title}</h2>
            <p className="text-gray-600">{description}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Click Me!
            </button>
        </div>
    );
};

export default Card;