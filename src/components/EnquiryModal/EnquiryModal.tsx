import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './EnquiryModal.css';

interface EnquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    type: string | null;
}

const EnquiryModal: React.FC<EnquiryModalProps> = ({ isOpen, onClose, type }) => {
    const isFranchise = type === 'franchise';
    const title = isFranchise ? 'Franchise Opportunity' : 'Admission Enquiry';
    const scriptUrl = isFranchise
        ? "https://script.google.com/macros/s/AKfycbyoMSStkdZzNbQaMDujmOxLeWObGO7T2PJDzDvWCy_3W8p_LqOtyX3mLr9Byqduyg-MQA/exec"
        : "https://script.google.com/macros/s/AKfycbxCz8tNl5_KKdg-7M7nDXF67DGTmqKWgr7e4WfrbIcgZ60h5WSefcZo3-TFwpGgvvlJWw/exec";

    const [formData, setFormData] = useState<Record<string, string>>({});
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            setStatus('success');
            setTimeout(() => {
                setStatus('');
                onClose();
                setFormData({});
            }, 2000);
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="modal-overlay">
                    <motion.div
                        className="modal-content"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                    >
                        <button className="close-btn" onClick={onClose}><FaTimes /></button>
                        <h2>{title}</h2>
                        <p>{isFranchise ? "Join us and be your own boss!" : "Give your child a bright start!"}</p>

                        <form onSubmit={handleSubmit}>
                            {isFranchise ? (
                                <>
                                    <input type="text" name="firstName" placeholder="First Name *" onChange={handleChange} required />
                                    <input type="text" name="lastName" placeholder="Last Name *" onChange={handleChange} required />
                                    <input type="email" name="email" placeholder="Email *" onChange={handleChange} required />
                                    <input type="text" name="mobile" placeholder="Mobile *" onChange={handleChange} required />
                                    <input type="text" name="city" placeholder="City *" onChange={handleChange} required />
                                    <input type="text" name="state" placeholder="State *" onChange={handleChange} required />
                                </>
                            ) : (
                                <>
                                    <input type="text" name="name" placeholder="Full Name *" onChange={handleChange} required />
                                    <input type="email" name="email" placeholder="Email *" onChange={handleChange} required />
                                    <input type="text" name="phone" placeholder="Phone Number *" onChange={handleChange} required />
                                    <input type="text" name="city" placeholder="City *" onChange={handleChange} required />
                                    <input type="text" name="state" placeholder="State *" onChange={handleChange} required />
                                </>
                            )}

                            <button type="submit" className="submit-btn" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Submit'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default EnquiryModal;
