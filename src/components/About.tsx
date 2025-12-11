import React from 'react';
import { motion } from 'framer-motion';
import './SectionLayout.css';

const About = () => {
    return (
        <section id="about" className="content-section" style={{ background: 'white' }}>
            <div className="container">
                <div className="section-row">
                    <motion.div
                        className="text-col"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">About Viva Kids World – Enriching Young Minds at Play School!</h2>
                        <span className="section-subtitle">Where fun and learning come together</span>
                        <p className="section-text">
                            At Viva Kids World Preschool, we provide a nurturing and stimulating environment where young minds embark on an exciting journey of learning. Our innovative, play-based curriculum fosters creativity, curiosity, and all-round development, ensuring that every child thrives.
                        </p>
                        <p className="section-text">
                            Our experienced educators focus on a holistic learning approach that balances academics, arts, and physical activities. Through interactive sessions, hands-on activities, and structured playtime, we create an atmosphere that promotes self-confidence and independence.
                        </p>
                    </motion.div>
                    <motion.div
                        className="img-col"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/assets/png home 3.png" alt="About Us" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
