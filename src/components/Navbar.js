import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="header flex items-center px-6 py-3 rounded-b-lg bg-black-500 opacity-100 shadow-md">
            <NavLink 
                to="/" 
                className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
            >
                <p className="blue-gradient_text">DB</p>
            </NavLink>
            <nav className="flex ml-auto text-lg gap-7 font-medium">
                <NavLink 
                    to="/contactme"  
                    className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}
                >
                    Contact
                </NavLink>
                <NavLink 
                    to="/aboutme"  
                    className={({ isActive }) => isActive ? 'text-blue-500' : 'text-white'}
                >
                    Projects
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;