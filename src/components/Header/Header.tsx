import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import './Header.css';

interface HeaderProps {
    onEnroll: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEnroll }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [clickCount, setClickCount] = useState(0);

    // Reset click count after 3 seconds of inactivity
    useEffect(() => {
        if (clickCount > 0) {
            const timer = setTimeout(() => setClickCount(0), 3000);
            return () => clearTimeout(timer);
        }
    }, [clickCount]);

    const handleLogoClick = () => {
        setClickCount(prev => prev + 1);
        if (clickCount + 1 === 5) {
            // Trigger Admin Login
            window.dispatchEvent(new CustomEvent('openAdminLogin'));
            setClickCount(0);
        }
    };

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About Us', to: 'about' },
        { name: 'Philosophy', to: 'philosophy' },
        { name: 'Innovation', to: 'innovation' },
        { name: 'Programs', to: 'programs' },
        { name: 'Achievements', to: 'achievements' },
        { name: 'Founder', to: 'founder' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                    <img src="/assets/logoexnbg-removebg-preview.png" alt="Viva Kids World" />
                </div>

                <nav className="desktop-nav">
                    {navLinks.map((link) => (
                        <ScrollLink
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={500}
                            className="nav-link"
                        >
                            {link.name}
                        </ScrollLink>
                    ))}
                </nav>

                <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mobile-nav"
                    >
                        <div className="mobile-nav-content">
                            {navLinks.map((link) => (
                                <ScrollLink
                                    key={link.name}
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="mobile-nav-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </ScrollLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
