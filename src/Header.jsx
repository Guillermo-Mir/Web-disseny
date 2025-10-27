import React from "react";
import { FaBars } from 'react-icons/fa'; 

class Header extends React.Component {

    render() {
        const primaryColor = "#d17842"; 
        
        return (
            <header style={{ backgroundColor: "#F3E9DC" }} className="shadow-lg sticky top-0 z-50">
                
                <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

                    <div className="flex items-center flex-shrink-0">
                        <img src="../public/logo.png" alt="Logo de Pastel" className="h-16 md:h-20"/>
                        <span className="ml-3 text-2xl md:text-3xl font-bold tracking-wider text-gray-800 hidden sm:block"></span>
                    </div>

                    <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                        <ul className="flex space-x-10 uppercase text-base font-semibold text-gray-700">
                            <li>
                                <a 
                                    href="#" 
                                    className={`hover:text-[${primaryColor}] transition-colors duration-200`}
                                >
                                    Historia
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className={`hover:text-[${primaryColor}] transition-colors duration-200`}
                                >
                                    Galería
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className={`hover:text-[${primaryColor}] transition-colors duration-200`}
                                >
                                    Tienda Online
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className={`hover:text-[${primaryColor}] transition-colors duration-200`}
                                >
                                    Fórum
                                </a>
                            </li>
                        </ul>
                    </nav>

                    
                    <div className="flex items-center space-x-4">
                        
                        <button className="lg:hidden p-2 text-gray-700 hover:text-[${primaryColor}] transition duration-200" aria-label="Abrir Menú">
                            <FaBars size={24} />
                        </button>
                        
                        <a href="#" aria-label="Perfil de Usuario">
                            <img 
                                src="../public/user.svg" 
                                alt="Usuario" 
                                className={`h-10 w-10 rounded-full hover:ring-2 hover:ring-[${primaryColor}] transition duration-200 cursor-pointer`}
                            />
                        </a>
                    </div>

                </div>

                <div className={`h-1 bg-[${primaryColor}] w-full`}></div>
            </header>
        );
    }
}

export default Header;