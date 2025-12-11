import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaMusic, FaUsers, FaLaptop, FaCampground, FaTheaterMasks, FaGamepad, FaTree, FaBookOpen } from 'react-icons/fa';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    const features = [
        { icon: <FaHeart />, title: "365 Days Support", desc: "Year-round learning support for students and parents." },
        { icon: <FaMusic />, title: "Phonics", desc: "Enhancing reading skills with phonics-based learning techniques." },
        { icon: <FaUsers />, title: "Social Interaction", desc: "Encouraging teamwork, social interaction, and community building." },
        { icon: <FaLaptop />, title: "Smart Classes", desc: "Technology-driven interactive learning for young minds." },
        { icon: <FaCampground />, title: "Camps", desc: "It plays a crucial role in regulating various physiological processes." },
        { icon: <FaTheaterMasks />, title: "Concept Culturals", desc: "Celebrating traditions through performances, stories, and activities." },
        { icon: <FaGamepad />, title: "Interactive Play", desc: "Play is at the heart of learning! Our interactive activities nurture teamwork." },
        { icon: <FaTree />, title: "Vibrant Play Area", desc: "Our vibrant play area fosters creativity, exploration, and joyful learning." },
        { icon: <FaBookOpen />, title: "Fairytales", desc: "Every page sparks curiosity and wonder! Engaging kids with magical stories." }
    ];

    return (
        <section id="features" className="features-section">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="section-title">Why Viva Kids World is the Ideal Choice?</h2>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        We believe in fostering a well-rounded learning experience that nurtures every aspect of a child's growth.
                    </p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
