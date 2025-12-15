import React from "react";
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'

function Navbar() {

    const location = useLocation()
    const isActive = (path) => location.pathname === path
    const primaryColor = "#d17842";

    return (
        <header style={{ backgroundColor: "#F3E9DC" }} className="shadow-lg sticky top-0 z-50 border-b-4 border-orange-400">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

                <div className="flex items-center flex-shrink-0">
                    <img src="../public/logo.png" alt="Logo de Pastel" className="h-16 md:h-20" />
                    <span className="ml-3 text-2xl md:text-3xl font-bold tracking-wider text-gray-800 hidden sm:block"></span>
                </div>

                <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
                    <ul className="flex space-x-10 uppercase text-base font-semibold text-gray-700">
                        <li>
                            <Link
                                to="/"
                                className={`transition-colors duration-200 hover:text-[${primaryColor}] nav-link ${isActive('/') ? 'active' : ''}`}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/historia"
                                className={`transition-colors duration-200 hover:text-[${primaryColor}] nav-link ${isActive('/historia') ? 'active' : ''}`}
                            >
                                Historia
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/galeria"
                                className={`transition-colors duration-200 hover:text-[${primaryColor}] nav-link ${isActive('/galeria') ? 'active' : ''}`}
                            >
                                Galería
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/tienda"
                                className={`transition-colors duration-200 hover:text-[${primaryColor}] nav-link ${isActive('/tienda') ? 'active' : ''}`}
                            >
                                Tienda Online
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/forum"
                                className={`transition-colors duration-200 hover:text-[${primaryColor}] nav-link ${isActive('/forum') ? 'active' : ''}`}
                            >
                                Fórum
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/formulari"
                                className={`transition-colors duration-200 hover:text-[${primaryColor}] nav-link ${isActive('/forum') ? 'active' : ''}`}
                            >
                                Contacta
                            </Link>
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
        </header>
    );
}

export default Navbar;