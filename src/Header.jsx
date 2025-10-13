import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header style={{ backgroundColor: "#F3E9DC" }} className="shadow-md">
                
                <div className="relative flex items-center px-5 py-4">

                    
                    <div className="logo flex-shrink-0">
                        <img src="../public/logo.png" alt="Logo de Pastel" className="h-20"/>
                    </div>

                    
                    <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
                        <ul className="flex space-x-12 uppercase text-sm font-semibold text-gray-700">
                            <li>
                                <a href="#" className="hover:text-[#d17842] transition-colors duration-200">Historia</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#d17842] transition-colors duration-200">Galeria</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#d17842] transition-colors duration-200">Botiga Online</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-[#d17842] transition-colors duration-200">Fòrum</a>
                            </li>
                        </ul>
                    </nav>

                    
                    <div className="user-logo ml-auto flex items-center">
                        <img src="../public/user.svg" alt="Usuario" className="h-10 w-10 rounded-full hover:ring-2 hover:ring-[#d17842] transition duration-200"/>
                    </div>

                </div>

                
                <div className="h-1 bg-[#d17842] w-full"></div>
            </header>
        );
    }
}

export default Header;
