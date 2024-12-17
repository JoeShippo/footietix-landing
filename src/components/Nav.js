import React from "react";

const Nav = () => {
    return (
        <nav className="w-full bg-black text-white py-4 px-6 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <a href="/" className="text-xl font-bold hover:text-gray-400">
                    FootieTix
                </a>
                <ul className="flex space-x-4">
                    <li>
                        <a href="/" className="hover:underline hover:text-gray-400">
                            Home
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;