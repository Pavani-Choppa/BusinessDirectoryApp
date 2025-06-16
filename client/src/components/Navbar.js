// src/components/Navbar.js

import React , { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import the corresponding CSS

const Navbar = () => {
    const navigate = useNavigate();
    const handleAuthButton = () => {
        // Navigate to the Signup page on button click
        navigate('/signup');
    };
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // const handleAuthButton = () => {
    //     // Check if user is authenticated
    //     const token = localStorage.getItem('token');
    //     if (token) {
    //         // If authenticated, navigate to home or profile
    //         navigate('/home');
    //     } else {
    //         // If not authenticated, navigate to login/signup
    //         navigate('/signup');
    //     }
    // };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/home"> {/* Replace with your logo link */}
                    <img src="/images/logo_ps.png" alt="Logo" /> {/* Replace with your logo image */}
                </Link>
            </div>

             {/* Hamburger Icon */}
             <div className='hat'>
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='t'>Business Directory App</div>
            </div>

             {/* Navigation Links */}
            <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/business-owner">Business Owner Account</Link>
                </li>
                <li>
                    <button className="auth-button" onClick={handleAuthButton}>
                        Signup
                    </button>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;
