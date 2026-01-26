import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header
      style={{ backgroundColor: "#F3E9DC" }}
      className="shadow-lg sticky top-0 z-50 border-b-4 border-orange-400"
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">

        <div className="flex items-center flex-shrink-0">
          <img
            src="/logo.png"
            alt="Logo de Pastel"
            className="h-16 md:h-20"
          />
        </div>

        <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          {/* Canvi: text-gray-900 per millorar el contrast base */}
          <ul className="flex space-x-10 uppercase text-base font-semibold text-gray-900">
            {[
              { path: "/", label: "Home" },
              { path: "/historia", label: "Historia" },
              { path: "/galeria", label: "Galería" },
              { path: "/tienda", label: "Tienda Online" },
              { path: "/forum", label: "Fórum" },
              { path: "/formulari", label: "Contacta" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  /* Canvi: Eliminat text-orange. Afegit border-b-2 negre si és actiu o hover */
                  className={`pb-1 transition-all duration-200 border-b-2 ${
                    isActive(path) 
                      ? "border-black" 
                      : "border-transparent hover:border-black"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden p-2 text-gray-900 hover:text-black transition"
            aria-label="Abrir menú"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          <a href="#" aria-label="Perfil de Usuario">
            <img
              src="/user.svg"
              alt="Usuario"
              /* Canvi: El ring de l'usuari ara és negre al fer hover */
              className="h-10 w-10 rounded-full hover:ring-2 hover:ring-black transition cursor-pointer"
            />
          </a>
        </div>
      </div>

      {menuOpen && (
        <nav className="lg:hidden bg-[#F3E9DC] border-t border-orange-400">
          <ul className="flex flex-col items-center space-y-4 py-4 uppercase font-semibold text-gray-900">
            {[
              { path: "/", label: "Home" },
              { path: "/historia", label: "Historia" },
              { path: "/galeria", label: "Galería" },
              { path: "/tienda", label: "Tienda Online" },
              { path: "/forum", label: "Fórum" },
              { path: "/formulari", label: "Contacta" },
            ].map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  /* Canvi: Mateixa lògica de subratllat per al menú mòbil */
                  className={`pb-1 border-b-2 ${
                    isActive(path) 
                      ? "border-black" 
                      : "border-transparent"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Navbar;