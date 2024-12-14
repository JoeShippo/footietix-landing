import React from "react";
import { motion } from "framer-motion";
import heroBackground from "../assets/images/heroBG.jpg";

const Hero = () => {
    return (
        <header
            className="hero relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70"></div>

            {/* Hero Content with Animation */}
            <motion.div
                className="relative flex items-center justify-center h-full container p-4 py-8 md:py-4  "
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                {/* Main Bordered Container */}
                <div className="border-2 border-white rounded-xl p-8 flex flex-col space-y-6 w-full h-auto lg:h-[90vh]">
                    {/* Navigation */}
                    <nav className="w-full flex justify-between items-center">
                        <div className="text-white text-xl md:text-2xl font-bold">FootieTix</div>
                        <ul className="hidden md:flex space-x-6 text-white">
                            <li>
                                <a href="#fans" className="hover:underline">
                                    For the Fans
                                </a>
                            </li>
                            <li>
                                <a href="#clubs" className="hover:underline">
                                    For the Clubs
                                </a>
                            </li>
                            <li>
                                <a href="#signup" className="hover:underline">
                                    Sign Up
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Content Columns */}
                    <div className="flex flex-col lg:flex-row lg:space-x-12 items-start lg:items-end h-full">
                        {/* Left Column */}
                        <motion.div
                            className="w-full lg:w-8/12 flex flex-col justify-start lg:justify-end"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            <h1 className="text-4xl md:text-6xl text-white mb-4">
                                For the fans, by the fans:{" "}
                                <span className="text-5xl md:text-8xl font-bold">
                                    Football the way it should be.
                                </span>
                            </h1>
                            <div className="w-full lg:w-3/4">
                                <p className="text-gray-200 mb-8 text-lg md:text-xl">
                                    Say goodbye to paid memberships &amp; frustrating queues.
                                    FootieTix connects fans directly with football clubs to access
                                    tickets. Whether you're a loyal supporter or just want to
                                    experience the thrill of the game, we've got you covered.
                                </p>
                            </div>
                            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                                <a
                                    href="#signup"
                                    className="btn btn-primary rounded-full btn-md"
                                >
                                    Register For More Information
                                </a>
                                <a
                                    href="#fans"
                                    className="btn btn-outline btn-primary rounded-full btn-md"
                                >
                                    View Features
                                </a>
                            </div>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                            className="w-full lg:w-4/12 flex flex-col justify-end items-start mt-8 lg:mt-0 "
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                        >
                            <h2 className="text-lg md:text-xl font-semibold text-white uppercase">
                                For the Fans
                            </h2>
                            <p className="text-gray-200 text-left mb-1">
                                Browse games by location with no memberships, book with your
                                friends and family and get your hands on free tickets, and enjoy
                                live football like never before.
                            </p>
                            <p className="text-gray-200 text-left mb-4">
                                <a href="#fans" className="underline hover:opacity-90">
                                    Learn More
                                </a>
                            </p>
                            <h2 className="text-lg md:text-xl font-semibold text-white uppercase">
                                For the Clubs
                            </h2>
                            <p className="text-gray-200 text-left mb-1">
                                Boost ticket sales, connect with fans, and unlock powerful
                                insights. Gain access to real-time analytics, new revenue
                                streams, and enhanced marketing opportunities with FootieTix.
                            </p>
                            <p className="text-gray-200 text-left">
                                <a href="#clubs" className="underline hover:opacity-90">
                                    Learn More
                                </a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </header>
    );
};

export default Hero;