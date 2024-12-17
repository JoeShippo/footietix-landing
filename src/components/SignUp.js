import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import BackgroundImage from "../assets/images/signup-bg.webp";
import { FaXTwitter, FaInstagram, FaTiktok } from "react-icons/fa6";

const SignUp = () => {
    const [userType, setUserType] = useState("Fan");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        club: "",
        location: "",
        position: "",
        contactNumber: "",
    });

    const [alert, setAlert] = useState({ type: "", message: "" }); // Alert state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // EmailJS configuration
        emailjs
            .send(
                "service_xjvxnce", // Replace with your EmailJS Service ID
                "template_sn3hhyc", // Replace with your EmailJS Template ID
                {
                    name: formData.name, // Matches {{name}}
                    email: formData.email, // Matches {{email}}
                    club: formData.club, // Matches {{club}}
                    location: userType === "Fan" ? formData.location : "", // Matches {{location}}
                    position: userType === "Club" ? formData.position : "", // Matches {{position}}
                    contactNumber: userType === "Club" ? formData.contactNumber : "", // Matches {{contactNumber}}
                    userType, // Matches {{userType}}
                },
                "ncdBcZ3-ARLVW-yE7" // Replace with your EmailJS Public Key
            )
            .then(
                (response) => {
                    console.log("Success!", response.status, response.text);
                    setAlert({ type: "success", message: "Thank you for signing up!" }); // Success alert
                    setFormData({ name: "", email: "", club: "", location: "", position: "", contactNumber: "" }); // Reset form
                },
                (error) => {
                    console.error("Failed...", error);
                    setAlert({ type: "error", message: "Oops! Something went wrong. Please try again or drop us an email at hello@footietix.co.uk" }); // Error alert
                }
            );
    };

    return (
        <motion.section
            className="relative bg-cover bg-center py-16 text-white"
            style={{ backgroundImage: `url(${BackgroundImage})` }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="container w-full md:w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 bg-white bg-opacity-90 rounded-lg shadow-lg p-8">
                {/* Left Column */}
                <motion.div
                    className="flex flex-col justify-start text-black p-4"
                    initial={{ opacity: 0, x: -50 }} // Slide in from the left
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">
                        Club Representative? A Fan? Register Your Interest Today
                    </h2>
                    <p className="mb-8">
                        Be the first to know about new games, exclusive features, and how
                        FootieTix can revolutionise your experience.
                    </p>
                    <h3 className="text-xl font-bold">See What We're Up To</h3>
                    <p className="mb-2">
                        Follow us on our socials and see what we're up to...
                    </p>
                    <ul className="flex space-x-6 mb-8">
                        <li>
                            <a
                                href="https://twitter.com/FootieTix"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black-400 hover:text-black-600"
                            >
                                <FaXTwitter size={24} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://instagram.com/FootieTix"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-pink-600 hover:text-pink-700"
                            >
                                <FaInstagram size={24} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://tiktok.com/@FootieTix"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black hover:text-gray-700"
                            >
                                <FaTiktok size={24} />
                            </a>
                        </li>
                    </ul>
                    <h3 className="text-xl font-bold">Any other business?</h3>
                    <p className="mb-2">
                        Want to send us an email? Sure thing! Drop us a line on: <br className="hidden md:block"/>
                        <a href="mailto:hello@footietix.co.uk" className="hover:underline">
                            hello@footietix.co.uk
                        </a>
                    </p>
                </motion.div>

                {/* Right Column */}
                <motion.form
                    className="flex flex-col space-y-6 p-4"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: true, amount: 0.3 }}
                    onSubmit={handleSubmit}
                >
                    {/* Alert */}
                    {alert.message && (
                        <div className={`alert ${alert.type === "success" ? "alert-success" : "alert-error"} shadow-lg`}>
                            <div>
                                <span>{alert.message}</span>
                            </div>
                        </div>
                    )}
                    <div>
                        <label className="block text-sm font-medium text-black mb-1">I am signing up as:</label>
                        <select
                            value={userType}
                            onChange={(e) => {
                                setUserType(e.target.value);
                                handleChange(e);
                            }}
                            name="userType"
                            className="select select-bordered w-full text-black"
                        >
                            <option value="Fan">A Fan</option>
                            <option value="Club">A Club Representative</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-1">Name:</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="input input-bordered w-full"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-1">Email:</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black mb-1">Club:</label>
                        <input
                            type="text"
                            name="club"
                            placeholder="Enter your club"
                            className="input input-bordered w-full"
                            value={formData.club}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {userType === "Fan" && (
                        <div>
                            <label className="block text-sm font-medium text-black mb-1">Location:</label>
                            <input
                                type="text"
                                name="location"
                                placeholder="Enter your location"
                                className="input input-bordered w-full"
                                value={formData.location}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}
                    {userType === "Club" && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-black mb-1">Position:</label>
                                <input
                                    type="text"
                                    name="position"
                                    placeholder="Enter your position"
                                    className="input input-bordered w-full"
                                    value={formData.position}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-black mb-1">Contact Number:</label>
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    placeholder="Enter your contact number"
                                    className="input input-bordered w-full"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </>
                    )}
                    <button type="submit" className="btn btn-primary w-full">
                        Join Now
                    </button>
                </motion.form>
            </div>
        </motion.section>
    );
};

export default SignUp;