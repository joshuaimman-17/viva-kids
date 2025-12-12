import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import './AdminDashboard.css';

interface AdminDashboardProps {
    isOpen: boolean;
    onClose: () => void;
}

interface Enquiry {
    id: number;
    name: string;
    type: string;
    contact: string;
    city: string;
    date: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isOpen, onClose }) => {
    const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Google Apps Script URLs
    const ADMISSION_URL = "https://script.google.com/macros/s/AKfycbyoMSStkdZzNbQaMDujmOxLeWObGO7T2PJDzDvWCy_3W8p_LqOtyX3mLr9Byqduyg-MQA/exec";
    const FRANCHISE_URL = "https://script.google.com/macros/s/AKfycbxCz8tNl5_KKdg-7M7nDXF67DGTmqKWgr7e4WfrbIcgZ60h5WSefcZo3-TFwpGgvvlJWw/exec";

    useEffect(() => {
        if (isOpen) {
            fetchEnquiries();
        }
    }, [isOpen]);

    const fetchEnquiries = async () => {
        setLoading(true);
        setError(null);

        try {
            // Fetch both admission and franchise data
            const [admissionResponse, franchiseResponse] = await Promise.all([
                fetch(ADMISSION_URL),
                fetch(FRANCHISE_URL)
            ]);

            const admissionData = await admissionResponse.json();
            const franchiseData = await franchiseResponse.json();

            // Combine and format the data
            const combinedEnquiries: Enquiry[] = [];
            let idCounter = 1;

            // Process admission data
            if (admissionData.data && Array.isArray(admissionData.data)) {
                admissionData.data.forEach((row: any) => {
                    combinedEnquiries.push({
                        id: idCounter++,
                        date: row.timestamp || row.date || new Date().toISOString().split('T')[0],
                        name: row.name || row.parentName || 'N/A',
                        type: 'Admission',
                        contact: row.contact || row.phone || row.email || 'N/A',
                        city: row.city || row.location || 'N/A'
                    });
                });
            }

            // Process franchise data
            if (franchiseData.data && Array.isArray(franchiseData.data)) {
                franchiseData.data.forEach((row: any) => {
                    combinedEnquiries.push({
                        id: idCounter++,
                        date: row.timestamp || row.date || new Date().toISOString().split('T')[0],
                        name: row.name || row.contactPerson || 'N/A',
                        type: 'Franchise',
                        contact: row.contact || row.phone || row.email || 'N/A',
                        city: row.city || row.location || 'N/A'
                    });
                });
            }

            // Sort by date (newest first)
            combinedEnquiries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

            setEnquiries(combinedEnquiries);
        } catch (err) {
            console.error('Error fetching enquiries:', err);
            setError('Failed to load enquiries. Please try again.');
        } finally {
            setLoading(false);
        }
    };

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
                            {loading && (
                                <div className="loading-message">Loading enquiries...</div>
                            )}

                            {error && (
                                <div className="error-message">{error}</div>
                            )}

                            {!loading && !error && enquiries.length === 0 && (
                                <div className="no-data-message">No enquiries found.</div>
                            )}

                            {!loading && !error && enquiries.length > 0 && (
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
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default AdminDashboard;
