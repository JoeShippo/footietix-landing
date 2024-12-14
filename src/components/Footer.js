import React from "react";
import { FaXTwitter, FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black border-white border-t-2 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Section: Links */}
        <div className="flex space-x-6">
          <a
            href="mailto:hello@footietix.co.uk"
            className="text-white hover:opacity-70"
            aria-label="Email"
          >
            <FaEnvelope size={20} />
          </a>
          <a
            href="https://twitter.com/FootieTix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-70"
            aria-label="Twitter"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://instagram.com/FootieTix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-70"
            aria-label="Instagram"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://tiktok.com/@FootieTix"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-70"
            aria-label="TikTok"
          >
            <FaTiktok size={20} />
          </a>
        </div>
        <div className="flex space-x-6">
          <a
            href="/privacy-policy"
            className="text-gray-400 hover:text-white text-sm"
          >
            Privacy Policy
          </a>
          <a
            href="/terms-and-conditions"
            className="text-gray-400 hover:text-white text-sm"
          >
            Terms & Conditions
          </a>
          <a
            href="/cookie-policy"
            className="text-gray-400 hover:text-white text-sm"
          >
            Cookie Policy
          </a>
        </div>
        
        {/* Right Section: Footer Text */}
        
      </div>
      <div className="container mx-auto pt-4">
        <p className="text-sm text-center text-gray-400">
            &copy; {new Date().getFullYear()} FootieTix. All rights reserved.
          </p>

          
        </div>
    </footer>
  );
};

export default Footer;