import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Philosophy from './components/Philosophy';
import Advantage from './components/Advantage';
import Programs from './components/Programs';
import WhyChooseUs from './components/WhyChooseUs';
import Achievements from './components/Achievements';
import Founder from './components/Founder';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Infrastructure from './components/Infrastructure';

import EnquiryModal from './components/EnquiryModal';
import CursorTrail from './components/CursorTrail';
import FloatingShapes from './components/FloatingShapes';

function App() {
    const [modalType, setModalType] = React.useState<string | null>(null);

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
            <Founder />
            <Contact />
            <Footer onAdmission={openAdmission} onFranchise={openFranchise} />

            <EnquiryModal
                isOpen={!!modalType}
                onClose={closeModal}
                type={modalType}
            />
        </div>
    );
}

export default App;
