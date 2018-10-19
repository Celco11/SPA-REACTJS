import React from 'react';
import './Logo.css';
import Logo from '../template/ps.png';


export default props => 
<aside className="logo">
    <a href="/" className="logo">
        <img src={Logo} alt="logo"></img>
    </a>
</aside>