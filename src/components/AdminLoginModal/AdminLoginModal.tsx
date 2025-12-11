import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaLock } from 'react-icons/fa';
import './AdminLoginModal.css';

interface AdminLoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    onLogin: () => void;
}

const AdminLoginModal: React.FC<AdminLoginModalProps> = ({ isOpen, onClose, onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password === 'admin-only') {
            onLogin();
            setPassword('');
            setError('');
        } else {
            setError('Incorrect password');
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="admin-modal-overlay">
                    <motion.div
                        className="admin-modal-content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                    >
                        <button className="close-btn" onClick={onClose}><FaTimes /></button>
                        <div className="login-icon">
                            <FaLock />
                        </div>
                        <h2>Admin Access</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="password"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="admin-input"
                                autoFocus
                            />
                            {error && <p className="error-msg">{error}</p>}
                            <button type="submit" className="login-btn">Login</button>
                        </form>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdminLoginModal;
