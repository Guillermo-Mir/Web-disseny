import React from "react";

class Header extends React.Component {
    render() {
        return (
            <header className="bg-white pt-4">

                <div className="flex justify-between items-center px-5 pb-4">

                    <div className="logo">
                        <img src="../public/logo.png" alt="Logo de Pastel" className="h-14" />
                    </div>

                    <nav className="hidden md:block">
                        <ul className="flex space-x-10 uppercase text-sm font-semibold text-gray-700">
                            <li><a href="#" className="hover:text-[#d17842] transition duration-150">Historia</a></li>
                            <li><a href="#" className="hover:text-[#d17842] transition duration-150">Galeria</a></li>
                            <li><a href="#" className="hover:text-[#d17842] transition duration-150">Botiga Online</a></li>
                            <li><a href="#" className="hover:text-[#d17842] transition duration-150">Fòrum</a></li>
                        </ul>
                    </nav>

                    <div className="text-gray-700 text-2xl">
                    </div>
                </div>

                <div className="h-1 bg-[#d17842] w-full"></div>
            </header>
        );
    }
}

export default Header;