import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import './assets/css/footer.scss'; 

class Footer extends React.Component {
    render() {
        return (
          <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-grid">
                    
                    {/* Enlaces Rápidos */}
                    <div className="footer-column">
                        <h4>Enlaces Rápidos</h4>
                        <ul className="footer-list">
                            <li><a href="/home">Inicio</a></li>
                            <li><a href="/productos">Productos</a></li>
                            <li><a href="/nosotros">Sobre Nosotros</a></li>
                            <li><a href="/faq">Preguntas Frecuentes</a></li>
                        </ul>
                    </div>
                    
                    {/* Legal */}
                    <div className="footer-column">
                        <h4>Legal</h4>
                        <ul className="footer-list">
                            <li><a href="/privacidad">Política de Privacidad</a></li>
                            <li><a href="/cookies">Política de Cookies</a></li>
                            <li><a href="/terminos">Términos de Servicio</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Redes Sociales */}
                    <div className="footer-column">
                        <h4>Síguenos</h4>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={28} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={28} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={28} />
                            </a>
                        </div>
                    </div>

                </div>

                <hr className="footer-divider" />

                <p className="footer-copy">
                    &copy; 2026 Copyright Pastel. Todos los derechos reservados. | Diseñado con amor en React.
                </p>
            </div>
          </footer>
        );
    }
}

export default Footer;