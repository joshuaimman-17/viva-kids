import React from 'react';
import { motion } from 'framer-motion';
import './SectionLayout.css';

const Infrastructure = () => {
    return (
        <section className="content-section" style={{ background: 'white' }}>
            <div className="container" style={{ textAlign: 'center', maxWidth: '900px' }}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Infrastructure – Safe, Modern, and Inspiring!
                </motion.h2>
                <motion.p
                    className="section-text"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    Viva Kids World provides a vibrant, child-friendly environment with colorful interiors and thoughtfully designed furniture to create an engaging and safe learning space. Our centers are equipped with high-quality toys, teaching aids, and learning materials that enhance cognitive and motor skills development. The infrastructure is carefully planned to support both indoor and outdoor activities.
                </motion.p>
            </div>
        </section>
    );
};

export default Infrastructure;
