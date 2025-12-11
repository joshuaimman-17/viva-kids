import React from 'react';
import { motion } from 'framer-motion';
import './SectionLayout.css';

const Philosophy = () => {
    return (
        <section id="philosophy" className="content-section" style={{ background: 'var(--bg-off-white)' }}>
            <div className="container">
                <div className="section-row reverse">
                    <motion.div
                        className="text-col"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="section-title">Our Philosophy – Learn, Grow, and Enjoy!</h2>
                        <span className="section-subtitle">Where curiosity thrives and learning flourishes</span>
                        <p className="section-text">
                            At our core, we believe that every child is unique, with their own pace of learning. We are committed to creating a nurturing environment where children feel safe, valued, and encouraged.
                        </p>
                        <p className="section-text">
                            Our curriculum blends Montessori principles with modern methodologies, focusing on Emotional Growth, Cognitive Development, Social Skills, and Physical Development. We believe in balancing structured learning with free play.
                        </p>
                    </motion.div>
                    <motion.div
                        className="img-col"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src="/assets/philoimg.jpg" alt="Our Philosophy" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
