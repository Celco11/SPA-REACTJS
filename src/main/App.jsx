import React from 'react';
import { HashRouter } from 'react-router-dom';
import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import LogoMarca from '../components/template/logo/LogoMarca';
import Nav from '../components/template/nav/Nav';
import Routes from './Routes';
import Footer from '../components/template/footer/Footer';


const App = () => (
    <HashRouter>
        <div className="app">
            <LogoMarca />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </HashRouter>
)
export default App;