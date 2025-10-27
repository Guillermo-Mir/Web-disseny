import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

class Footer extends React.Component {
    render() {
        const primaryColor = "#d17842"; 
        
        const linkStyle = `text-gray-600 hover:text-[${primaryColor}] transition-colors duration-300 text-sm md:text-base`;

        return (
          <footer style={{ backgroundColor: "#F3E9DC" }} className="py-10 md:py-12 w-full border-t-4 border-orange-400">
            
            
            <div className={`h-1 bg-[${primaryColor}] w-full mb-8`}></div>

            <div className="max-w-6xl mx-auto px-4">
                
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center md:text-left mb-10">
                    
                    
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-4 text-gray-800">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            <li><a href="/home" className={linkStyle}>Inicio</a></li>
                            <li><a href="/productos" className={linkStyle}>Productos</a></li>
                            <li><a href="/nosotros" className={linkStyle}>Sobre Nosotros</a></li>
                            <li><a href="/faq" className={linkStyle}>Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    
                    
                    <div className="md:col-span-1">
                        <h4 className="text-lg font-semibold mb-4 text-gray-800">Legal</h4>
                        <ul className="space-y-3">
                            <li><a href="/privacidad" className={linkStyle}>Política de Privacidad</a></li>
                            <li><a href="/cookies" className={linkStyle}>Política de Cookies</a></li>
                            <li><a href="/terminos" className={linkStyle}>Términos de Servicio</a></li>
                            <li><a href="/contacto" className={linkStyle}>Contacto</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-1 flex flex-col items-center md:items-start">
                        <h4 className="text-lg font-semibold mb-4 text-gray-800">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook className={`text-gray-700 hover:text-[${primaryColor}] transition-colors duration-300`} size={28} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter className={`text-gray-700 hover:text-[${primaryColor}] transition-colors duration-300`} size={28} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className={`text-gray-700 hover:text-[${primaryColor}] transition-colors duration-300`} size={28} />
                            </a>
                        </div>
                    </div>

                </div>


                <hr className="border-t border-gray-300 my-8" />

                <p className="text-center text-gray-600 text-sm">
                    &copy; 2025 Copyright Pastel. Todos los derechos reservados. | Diseñado con amor en React.
                </p>

            </div>
          </footer>
        );
    }
}

export default Footer;