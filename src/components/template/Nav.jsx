import React from 'react';
import './Nav.css'

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <a href="#/">
                <i className="fa fa-home"></i> Início
            </a>
            <a href="#/Users">
                <i className="fa fa-dollar"></i> Contas a Pagar
            </a>
        </nav>
    </aside>