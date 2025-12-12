import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FramedImage from '../FramedImage/FramedImage';
import './Hero.css';

const Hero = () => {
    // Gallery images for slideshow
    const images = [
        "/assets/little1.jpg",
        "/assets/little2.jpg",
        "/assets/playgroupimg.jpg",
        "/assets/seniorkgimg.jpg",
        "/assets/play1.jpeg",
        "/assets/play2.jpeg",
        "/assets/play3.jpeg",
        "/assets/christmas.jpeg",
        "/assets/diwali.jpeg",
        "/assets/pongal.jpeg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Auto-rotate images every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-background"></div>
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Welcome to <br />
                        <span>Viva Kids World</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Enriching Young Minds at Play School! Where fun and learning come together to create a bright future.
                    </motion.p>
                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.8 }}
                    >

                    </motion.div>
                </motion.div>

                <div className="hero-image">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            style={{ width: '100%', height: '100%' }}
                        >
                            <FramedImage
                                src={images[currentImageIndex]}
                                alt={`Happy Kids ${currentImageIndex + 1}`}
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default Hero;
