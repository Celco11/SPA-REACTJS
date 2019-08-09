import React from 'react';
import './header.css'

export default props =>
    <header className="header d-none d-sm-flex flex-column">
        <h1 className="mt-3">
            <i className={`fa fa-${props.icon}`}></i> {props.title}
        </h1>
        <div className="row">
            <div className="col-md-6">
                <p className="lead text-muted">{props.subtitle}</p>
            </div>
            <div className="col-md-6">
                <p className="lead text-muted float-md-right">{props.date}</p>
            </div>
        </div>
    </header>