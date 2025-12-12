import React from 'react';
import './Footer.css';

interface FooterProps {
    onAdmission: () => void;
    onFranchise: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdmission, onFranchise }) => {
    return (
        <>
            {/* Fixed Footer Bar */}
            <div className="fixed-footer">
                <button onClick={onAdmission} className="footer-btn admission-btn">
                    <span className="btn-icon">📋</span>
                    Admission Enquiry
                </button>
                <button onClick={onFranchise} className="footer-btn franchise-btn">
                    <span className="btn-icon">🏢</span>
                    Start a Franchise
                </button>
            </div>

            {/* WhatsApp Float */}
            <a href="https://wa.me/8220445455" className="whatsapp-float" target="_blank" rel="noreferrer">
                <img src="/assets/whatsapplogo-removebg-preview.png" alt="WhatsApp" />
            </a>
        </>
    );
};

export default Footer;
