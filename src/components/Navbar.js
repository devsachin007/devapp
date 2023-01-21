import React, { useState } from "react";
import "./navbar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";


const Navbar = () => {
    const [showMediaIcons, setShowMediaIcons] = useState(false);
    return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>H</span>ire
                        <span>D</span>evelopers
                    </h2>
                </div>

                <div
                    className={
                        showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
                    }>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                    </ul>
                </div>

                <div className="social-media">
                    <ul className="social-media-desktop">

                    </ul>
                    <div className="hamburger-menu">
                        <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                            <GiHamburgerMenu />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;