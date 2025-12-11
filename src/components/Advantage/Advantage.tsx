import React from 'react';
import { motion } from 'framer-motion';
import './Advantage.css';

const Advantage = () => {
    const advantages = [
        "Well qualified trained teacher",
        "Multimedia based teaching",
        "12+ Free camps (per annum)",
        "Theme based teaching",
        "Language development",
        "Build confidence",
        "Social development",
        "Support different learning styles"
    ];

    return (
        <section className="advantage-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Our Unique Edge</h2>
                    <h3 className="section-subtitle-center">Managed by qualified educationist</h3>
                </div>

                <div className="advantage-grid">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            className="advantage-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <p>{item}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantage;
