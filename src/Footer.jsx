import React from "react";

class Footer extends React.Component {
    render() {
        return (
          <footer style={{ backgroundColor: "#F3E9DC" }} className="py-8 px-5 mt-10">
            
            {/* Logos centrados */}
            <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
                <img src="../public/250558.png" alt="Logo 2" className="h-10"/>
                <img src="../public/logo_inst-removebg-preview (1).png" alt="Instagram Logo" className="h-12"/>
                <img src="../public/png-transparent-removebg-preview.png" alt="Logo 4" className="h-10"/>
            </div>

            {/* Texto */}
            <p className="text-center text-gray-600 text-sm">
                &copy; 2025 Copyright Pastel. Todos los derechos reservados.
            </p>

          </footer>
        );
    }
}

export default Footer;
