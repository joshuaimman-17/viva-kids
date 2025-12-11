import React from 'react';
import { motion } from 'framer-motion';
import '../SectionLayout.css';

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
                <motion.div
                    className="infra-image-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    style={{ marginTop: '2rem', borderRadius: '15px', overflow: 'hidden' }}
                >
                    <img src="/assets/playground.png" alt="Playground" style={{ width: '100%', height: 'auto', borderRadius: '15px' }} />
                </motion.div>
            </div>
        </section>
    );
};

export default Infrastructure;
