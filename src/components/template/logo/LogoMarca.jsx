import React from 'react';
import './logomarca.css';
import Logo from './ps.png'


const LogoMarca = () => (
    <aside className="logo">
        <a href="/" className="logo">
            <img src={Logo} alt="logo"></img>
        </a>
    </aside>
)
export default LogoMarca;