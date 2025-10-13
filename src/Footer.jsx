import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

class Footer extends React.Component {
    render() {
        return (
          <footer style={{ backgroundColor: "#F3E9DC" }} className="py-8 relative">
            
            {/* Línea naranja en la parte superior del footer */}
            <div className="h-1 bg-[#d17842] w-full mb-6"></div>

            <div className="flex flex-wrap justify-center items-center gap-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook className="hover:text-[#d17842] transition-colors duration-300" size={40} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaTwitter className="hover:text-[#d17842] transition-colors duration-300" size={40} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram className="hover:text-[#d17842] transition-colors duration-300" size={40} />
              </a>
            </div>

            <p className="text-center text-gray-600 text-sm mt-3">
                &copy; 2025 Copyright Pastel. Todos los derechos reservados.
            </p>

          </footer>
        );
    }
}

export default Footer;
