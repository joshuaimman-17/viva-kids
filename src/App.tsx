import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Philosophy from './components/Philosophy/Philosophy';
import Advantage from './components/Advantage/Advantage';
import Programs from './components/Programs/Programs';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Achievements from './components/Achievements/Achievements';
import Founder from './components/Founder/Founder';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Infrastructure from './components/Infrastructure/Infrastructure';
import Gallery from './components/Gallery/Gallery';

import EnquiryModal from './components/EnquiryModal/EnquiryModal';
import CursorTrail from './components/CursorTrail/CursorTrail';
import FloatingShapes from './components/FloatingShapes/FloatingShapes';

import AdminLoginModal from './components/AdminLoginModal/AdminLoginModal';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';

function App() {
    const [modalType, setModalType] = React.useState<string | null>(null);
    const [isAdminLoginOpen, setIsAdminLoginOpen] = React.useState(false);
    const [isAdminDashboardOpen, setIsAdminDashboardOpen] = React.useState(false);

    React.useEffect(() => {
        const handleAdminTrigger = () => setIsAdminLoginOpen(true);
        window.addEventListener('openAdminLogin', handleAdminTrigger);
        return () => window.removeEventListener('openAdminLogin', handleAdminTrigger);
    }, []);

    const openAdmission = () => setModalType('admission');
    const openFranchise = () => setModalType('franchise');
    const closeModal = () => setModalType(null);

    return (
        <div className="app">
            <CursorTrail />
            <FloatingShapes />
            <Header onEnroll={openAdmission} />
            <Hero />
            <About />
            <Philosophy />
            <Advantage />
            <Infrastructure />
            <Programs />
            <WhyChooseUs />
            <Achievements />
            <Gallery />
            <Founder />
            <Contact />
            <Footer onAdmission={openAdmission} onFranchise={openFranchise} />

            <EnquiryModal
                isOpen={!!modalType}
                onClose={closeModal}
                type={modalType}
            />

            <AdminLoginModal
                isOpen={isAdminLoginOpen}
                onClose={() => setIsAdminLoginOpen(false)}
                onLogin={() => {
                    setIsAdminLoginOpen(false);
                    setIsAdminDashboardOpen(true);
                }}
            />

            <AdminDashboard
                isOpen={isAdminDashboardOpen}
                onClose={() => setIsAdminDashboardOpen(false)}
            />
        </div>
    );
}

export default App;
