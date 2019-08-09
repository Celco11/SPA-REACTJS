import React from 'react';
import './nav.css'

const Nav = () => (
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/produtos">
                <i className="fa fa-cart-plus"></i> Carrinho de Compras
            </a>
        </nav>
    </aside>
);
export default Nav;