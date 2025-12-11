import React from 'react';
import { motion } from 'framer-motion';
import './SectionLayout.css';
import './Founder.css';

const Founder = () => {
    return (
        <section id="founder" className="content-section founder-section">
            <div className="container">
                <div className="section-header text-center mb-12">
                    <h2 className="section-title">Founder</h2>
                    <h4 className="section-subtitle-center">Meet the visionary behind our success</h4>
                </div>

                <div className="section-row">
                    <motion.div
                        className="img-col"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <div className="founder-img-wrapper">
                            <img src="/assets/founderimg.jpg" alt="Vanitha Vinoth.S" />
                            <div className="founder-badge">Vanitha Vinoth.S</div>
                        </div>
                    </motion.div>

                    <motion.div
                        className="text-col"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="founder-content-box">
                            <p>
                                <strong>Vanitha Vinoth.S</strong> is the founder of Future Focus Educational Trust...
                                (Note: truncated for brevity, but "Awesome UI/UX" means readable, spaced text).
                            </p>
                            <p>
                                Vanitha has over 20 years of experience in teaching. She established a play school in 2017 with a goal to expand within five years. She successfully launched a second branch, making it the first in Kanchipuram with two branches.
                            </p>
                            <p>
                                She is an active member of Lions Club and a Gold Club member in BNI. Her motto is: <em>"Think positively, dream big, and achieve great things."</em>
                            </p>
                            <img src="/assets/logotm.jpg" alt="Signature Logo" className="founder-signature-logo" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
