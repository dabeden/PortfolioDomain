import React from "react";
import { NavLink } from "react-router-dom";

import alienLogo from "../assets/icons/alien2.png";

const Navbar = () => {
    return (
        <header className="navbar header flex items-center px-6 py-3 rounded-b-lg bg-black-500 opacity-100 shadow-md">
            <NavLink 
                to="/" 
                className="sm:text-3xl lg:text-3xl w-10 h-10 rounded-lg  items-center justify-center flex font-bold"
            >
                <img
                src={alienLogo}
                alt="Dev Home Logo"
                className="w-full h-full object-contain rounded-xl"
                />
            </NavLink>
            <nav className="silkscreen-regular sm:text-xl lg:text-xl flex ml-auto text-lg gap-7 font-medium">
                <NavLink 
                    to="/contactme"  
                    className={({ isActive }) => isActive ? 'text-blue-500' : 'text-blue-100'}
                >
                    Contact
                </NavLink>
                <NavLink 
                    to="/projects"  
                    className={({ isActive }) => isActive ? 'text-blue-500' : 'text-blue-100'}
                >
                    Projects
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;