import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/Navbar.css'; 

export const Navbar = () => {
    const { pathname } = useLocation();
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <div className="navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <img className="navbar-logo" src="https://invikings.com/wp-content/uploads/2023/12/cropped-logo-13.png" alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" onClick={() => setIsCollapsed(!isCollapsed)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" style={{ color: pathname === "/" ? "goldenrod" : "initial" }}>
                                <b>HOME</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/revenueRevolution" className="nav-link" style={{ color: pathname === "/revenueRevolution" ? "goldenrod" : "initial" }}>
                                <b>REVENUE REVOLUTION</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/royalIndicators" className="nav-link" style={{ color: pathname === "/royalIndicators" ? "goldenrod" : "initial" }}>
                                <b>ROYAL INDICATORS</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/crownMembership" className="nav-link" style={{ color: pathname === "/crownMembership" ? "goldenrod" : "initial" }}>
                                <b>CROWN MEMBERSHIP</b>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" style={{ color: pathname === "/contact" ? "goldenrod" : "initial" }}>
                                <b>CONTACT</b>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};









