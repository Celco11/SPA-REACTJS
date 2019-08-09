import React from 'react';
import './body.css';
import Header from '../header/Header';

const Body = props =>
    <>
        <Header {...props} />
        <main className="content container-fluid">
            <div className="p-3 mt-3">
                {props.children}
            </div>
        </main>
    </>
export default Body;