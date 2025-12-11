import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './AdminDashboard.css';

interface AdminDashboardProps {
    isOpen: boolean;
    onClose: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
    // Mock Data
    const enquiries = [
        { id: 1, name: 'Aarav Sharma', type: 'Admission', contact: '9876543210', city: 'Chennai', date: '2025-02-10' },
        { id: 2, name: 'S. Priya', type: 'Franchise', contact: 'priya@example.com', city: 'Bangalore', date: '2025-02-12' },
        { id: 3, name: 'Rohan Gupta', type: 'Admission', contact: '8765432109', city: 'Mumbai', date: '2025-02-14' },
        { id: 4, name: 'Kavita Reddy', type: 'Admission', contact: '7654321098', city: 'Hyderabad', date: '2025-02-15' },
        { id: 5, name: 'Vikram Singh', type: 'Franchise', contact: 'vikram@business.com', city: 'Delhi', date: '2025-02-18' },
    ];

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="dashboard-overlay">
                    <motion.div
                        className="dashboard-content"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                    >
                        <div className="dashboard-header">
                            <h2>Viva Admin Dashboard</h2>
                            <button className="close-btn-dash" onClick={onClose}><FaTimes /></button>
                        </div>

                        <div className="dashboard-table-container">
                            <table className="dashboard-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Contact</th>
                                        <th>City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {enquiries.map((enq) => (
                                        <tr key={enq.id}>
                                            <td>{enq.date}</td>
                                            <td>{enq.name}</td>
                                            <td>
                                                <span className={`badge ${enq.type === 'Franchise' ? 'badge-franchise' : 'badge-admission'}`}>
                                                    {enq.type}
                                                </span>
                                            </td>
                                            <td>{enq.contact}</td>
                                            <td>{enq.city}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdminDashboard;
