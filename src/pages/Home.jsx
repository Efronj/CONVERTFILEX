import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConverterDashboard from '../components/ConverterDashboard';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />

            <main className="main-content">
                <div className="hero">
                    <h1 className="hero-title">
                        <span className="gradient-text">ConvertX:</span> Any File Instantly <br className="hide-on-desktop" />
                        <span className="gradient-text-subtle">— Fast, Secure & Free</span>
                    </h1>
                    <p className="hero-subtitle">
                        All Your File Conversions. One Powerful Tool. Drag and drop your files or explore our full suite of professional conversion options.
                    </p>
                </div>

                {/* Core App Feature */}
                <div id="converter" style={{ width: '100%', marginTop: '4rem' }}>
                    <ConverterDashboard />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
