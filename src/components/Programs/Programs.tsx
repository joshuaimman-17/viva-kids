import React from 'react';
import { motion } from 'framer-motion';
import './Programs.css';

const Programs = () => {
    const programs = [
        { title: 'Playgroup', desc: 'A fun and engaging start to early learning!', color: '#FF6B6B' },
        { title: 'Nursery', desc: 'Building strong foundations with playful activities.', color: '#4ECDC4' },
        { title: 'Jr.KG', desc: 'Motivate creativity and curiosity in young minds.', color: '#45B7D1' },
        { title: 'Sr.KG', desc: 'Preparing kids for a confident academic journey.', color: '#96CEB4' }
    ];

    return (
        <section id="programs" className="programs-section">
            <div className="container">
                <motion.div
                    className="programs-header"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Little Scholars</h2>
                    <p className="section-subtitle" style={{ border: 'none', textAlign: 'center' }}>Igniting Bright Beginnings with Our Play School Programs!</p>
                </motion.div>

                <div className="programs-grid">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            className="program-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="card-inner">
                                <div className="card-front" style={{ backgroundColor: program.color }}>
                                    <h3>{program.title}</h3>
                                </div>
                                <div className="card-back">
                                    <h3>{program.title}</h3>
                                    <p>{program.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
