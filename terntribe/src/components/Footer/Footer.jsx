import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-800 text-white py-6 text-center">
    <p className="mb-4">Contact us at: <a href="mailto:auwaluizziddin2212@gmail.com" className="text-blue-400 underline">auwaluizziddin2212@gmail.com</a></p>
    <div className="flex justify-center space-x-4">
      <a href="#facebook" aria-label="Facebook" className="text-white hover:text-blue-400">
        <FaFacebook size={24} />
      </a>
      <a href="#twitter" aria-label="Twitter" className="text-white hover:text-blue-400">
        <FaTwitter size={24} />
      </a>
      <a href="#instagram" aria-label="Instagram" className="text-white hover:text-blue-400">
        <FaInstagram size={24} />
      </a>
    </div>
  </footer>
);

export default Footer;
