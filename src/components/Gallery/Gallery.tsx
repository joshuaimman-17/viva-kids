import React from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
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

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-subtitle-center">Memories & Moments</span>
                    <h2 className="section-title">Our Happy Kids</h2>
                    <p className="max-w-3xl mx-auto text-gray-700">
                        Glimpses of our vibrant activities, celebrations, and everyday fun at Viva Kids World.
                    </p>
                </motion.div>

                <div className="gallery-grid">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            className="gallery-item"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <img src={img} alt={`Gallery Image ${index + 1}`} loading="lazy" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
