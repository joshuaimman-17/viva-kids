import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title text-center">Get in Touch</h2>

                <div className="contact-wrapper">
                    <div className="contact-info-card">
                        <h3>Contact Information</h3>
                        <p>Have questions? We'd love to hear from you.</p>

                        <div className="item">
                            <FaPhone className="icon" />
                            <div>
                                <span>Call Us</span>
                                <p>+91 97901 06164 <br /> +91 82204 45455</p>
                            </div>
                        </div>
                        <div className="item">
                            <FaEnvelope className="icon" />
                            <div>
                                <span>Email Us</span>
                                <p>infovivakidsworld@gmail.com</p>
                            </div>
                        </div>
                        <div className="item">
                            <FaMapMarkerAlt className="icon" />
                            <div>
                                <span>Visit Us</span>
                                <p>No.46, 1st Cross Street, TempleCity,<br /> Kanchipuram - 631502</p>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="https://www.instagram.com/viva_kidsworld" target="_blank" rel="noreferrer" className="social-icon instagram"><FaInstagram /></a>
                            <a href="https://www.facebook.com/share/1LHnoQHuSo/" target="_blank" rel="noreferrer" className="social-icon facebook"><FaFacebook /></a>
                            <a href="https://youtube.com/@vivakids-g6l" target="_blank" rel="noreferrer" className="social-icon youtube"><FaYoutube /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon linkedin"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="map-card">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3915.035293715606!2d79.694497!3d12.846020!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38298fb5eb89%3A0x5e7196b52f4e82d!2sViva%20Kids%20World!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0, minHeight: '300px', borderRadius: '15px' }}
                            allowFullScreen
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Mountain/Hill Design with Trees */}
            <div className="mountain-design">
                <svg className="mountain-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 300" preserveAspectRatio="none">
                    {/* Mountain/Hill Shape */}
                    <path d="M0,150 Q300,50 600,120 T1200,100 L1200,300 L0,300 Z" fill="var(--dark)" />
                </svg>

                {/* Decorative Trees */}
                <div className="trees">
                    <div className="tree tree-1">
                        <div className="tree-top"></div>
                        <div className="tree-trunk"></div>
                    </div>
                    <div className="tree tree-2">
                        <div className="tree-top"></div>
                        <div className="tree-trunk"></div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="copyright-section">
                    <p>© Powered by FlipFlex</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
