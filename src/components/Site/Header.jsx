import React, {useState} from 'react';
import  './site-styles/header.css'
import MobileMenu from "@components/Site/MobileMenu.jsx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <header className="header">
                <div className="site-content">
                    <a className='logo' href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="28" viewBox="0 0 26 28" fill="none">
                            <path
                                d="M14.0468 3.4244C13.2241 1.90603 11.0451 1.90603 10.2224 3.42439L0.777473 20.856C0.212353 21.899 0.599274 23.2309 1.79225 23.6233C3.64705 24.2333 7.03429 25.0234 12.1346 25.0234C17.235 25.0234 20.6222 24.2333 22.477 23.6233C23.67 23.2309 24.0569 21.899 23.4918 20.856L14.0468 3.4244Z"
                                fill="#241063" stroke="#241063" strokeWidth="0.74"/>
                        </svg>
                        <span>UFO</span>
                    </a>
                    <nav className="navigation">
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#testimonials">Testimonials</a></li>
                            <li><a href="#features">App Features</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contacts">Contacts</a></li>
                        </ul>
                    </nav>
                    <div className="burger-wrap">

                        {
                            !isOpen &&
                            <a href="/get-started" className="get-started">
                                Get started
                            </a>
                        }
                        <div className="burger-menu" onClick={toggleMenu}>
                            <div className={`burger-line ${isOpen ? "open" : ""}`}></div>
                            <div className={`burger-line ${isOpen ? "open" : ""}`}></div>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
        </>

    );
};

export default Header;