import React from "react";
import './Header.css'
class Header extends React.Component {
    render() {
        return (
            <div>
                <div class="nav-container">
                    <div class="logo">
                        <img src="../logo.png"></img>
                    </div>
                    <nav>
                        <ul class="nav">
                            <li><a href="#">Historia</a></li>
                            <li><a href="#">Galeria</a></li>
                            <li><a href="#">Botiga Online</a></li>
                            <li><a href="#">Fòrum</a></li>
                        </ul>
                    </nav>
                    <div class="user-icon"/>
                </div>
            </div>
        );
    }
}

export default Header;