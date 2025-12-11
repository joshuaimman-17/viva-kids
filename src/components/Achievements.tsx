import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './Achievements.css';

const Achievements = () => {
    const scrollRef = useRef(null);
    const awards = [
        { title: "Jackhi Book of World Records", date: "Oct 1, 2023", desc: "Mass world record event 'We Support Farmers'." },
        { title: "The Ideal Principal Award", date: "2023-2024", desc: "Awarded to S. Vanitha for Exemplary Leadership Quality." },
        { title: "Kalvi Chemmal Award", date: "Sept 9, 2023", desc: "For outstanding contributions to children's education." },
        { title: "Xtragenius Appreciation Award", date: "Jan 27, 2019", desc: "For enthusiastic participation in National Level Abacus Competition." }
    ];

    const images = [
        "/assets/achive1.jpg",
        "/assets/achive2.jpg",
        "/assets/achive3.jpg",
        "/assets/achive4.jpg"
    ];

    return (
        <section id="achievements" className="achievements-section">
            <div className="container">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="section-subtitle-center">Want to know more about us?</span>
                    <h2 className="section-title">Our Achievements</h2>
                    <p className="max-w-3xl mx-auto text-gray-700">
                        At Viva Kids World, we take immense pride in fostering creativity, leadership, and innovation. Our commitment to excellence has been recognized with several prestigious awards.
                    </p>
                </motion.div>

                <div className="awards-grid">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            className="award-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="award-icon">🏆</div>
                            <h3>{award.title}</h3>
                            <span className="award-date">{award.date}</span>
                            <p>{award.desc}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="gallery-container">
                    <h3 className="gallery-title">Gallery</h3>
                    <div className="gallery-scroller" ref={scrollRef}>
                        {images.map((img, index) => (
                            <motion.img
                                key={index}
                                src={img}
                                alt={`Achievement ${index + 1}`}
                                className="gallery-img"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
