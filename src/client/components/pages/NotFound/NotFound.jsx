import React from 'react';
import Logo from './InfinityLogo/InfinityLogo.jsx';
import './NotFound.sass';

const NotFound = () => (
    <div
        className="flex-center flex-rows text--xxl text--font-title"
        styleName="not-found"
    >
        <div styleName="logo">
            <Logo />
        </div>
        <div className="flex-columns" styleName="wrapper">
            <h1 styleName="message">404</h1>
            <small>Page not found.</small>
        </div>
    </div>
);

export default NotFound;
