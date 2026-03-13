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
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem' }}>
                        <a href="#converter" className="btn-primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                            Get Started Now
                        </a>
                        <a href="/login" className="btn-secondary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                            Sign In
                        </a>
                    </div>
                </div>

                {/* Core App Feature */}
                <div id="converter" style={{ width: '100%', marginTop: '4rem' }}>
                    <ConverterDashboard />
                </div>

                {/* Features Section */}
                <div id="features" style={{ width: '100%', marginTop: '8rem', marginBottom: '4rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '1rem' }} className="gradient-text">Why Choose ConvertX?</h2>
                        <p style={{ color: 'rgba(15, 23, 42, 0.6)', maxWidth: '40rem', margin: '0 auto', fontSize: '1.125rem' }}>Experience the next generation of file conversion with military-grade security and lightning-fast processing speeds.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div className="glass-lg" style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
                            <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', background: 'var(--primary-100)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem' }}>⚡</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Lightning Fast</h3>
                            <p style={{ color: 'rgba(15, 23, 42, 0.6)' }}>Convert hundreds of files simultaneously with our high-performance infrastructure.</p>
                        </div>
                        <div className="glass-lg" style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
                            <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', background: 'var(--primary-100)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem' }}>🔒</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Secure & Private</h3>
                            <p style={{ color: 'rgba(15, 23, 42, 0.6)' }}>All uploaded sets of files are instantly deleted from our servers after conversion.</p>
                        </div>
                        <div className="glass-lg" style={{ padding: '2rem', borderRadius: '1.5rem', textAlign: 'center' }}>
                            <div style={{ width: '4rem', height: '4rem', borderRadius: '1rem', background: 'var(--primary-100)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontSize: '1.5rem' }}>📱</div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Live Camera</h3>
                            <p style={{ color: 'rgba(15, 23, 42, 0.6)' }}>Capture documents directly using your device's webcam and turn them into PDFs.</p>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div style={{ width: '100%', maxWidth: '800px', margin: '4rem auto 8rem', padding: '0 1rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2.5rem', textAlign: 'center' }} className="gradient-text">Frequently Asked Questions</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Is ConvertX really free to use?</h3>
                            <p style={{ color: 'rgba(15, 23, 42, 0.7)', lineHeight: '1.6' }}>Yes! ConvertX is 100% free for all users. You can convert files without any hidden costs or subscription requirements.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>How secure are my uploaded files?</h3>
                            <p style={{ color: 'rgba(15, 23, 42, 0.7)', lineHeight: '1.6' }}>Your privacy is our priority. All files are processed securely and are automatically deleted from our servers immediately after conversion.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>What is the maximum file size?</h3>
                            <p style={{ color: 'rgba(15, 23, 42, 0.7)', lineHeight: '1.6' }}>Currently, we support files up to 100MB for free users, ensuring fast processing for almost all document and image needs.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
