
import React from 'react';
import Hero from '../components/Hero';
import OrganizationsList from '../components/Organizations';
import { FaWhatsapp, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'; // Import social media icons

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Organizations List */}
      <OrganizationsList />

      {/* Footer Section */}
      <footer className="bg-white py-6 mt-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-black">
          {/* Dynamic Year Handling */}
          <p className="text-lg">&copy; {new Date().getFullYear()} Mazingira. All rights reserved.</p>
          <p className="mt-2 text-sm">Your support helps protect the planet for future generations.</p>

          {/* Social Media Links */}
          <div className="flex justify-center mt-4 space-x-6">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp size={30} className="text-green-600 hover:text-green-800" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={30} className="text-blue-600 hover:text-blue-800" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={30} className="text-pink-600 hover:text-pink-800" />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter size={30} className="text-blue-400 hover:text-blue-600" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

