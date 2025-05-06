import React from 'react';

const MobileMenu = ({isOpen, toggleMenu}) => {
    return (
        <div className={ isOpen ? 'mobile-menu active' : 'mobile-menu'}>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#features">App Features</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#contacts">Contacts</a></li>
            </ul>
            <a href="/get-started" className="get-started">
            Get started
            </a>
        </div>
    );
};

export default MobileMenu;