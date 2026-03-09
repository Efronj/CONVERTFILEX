import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, HelpCircle, ArrowRight } from 'lucide-react';

const Support = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />

            <main className="main-content" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center', flex: 1, padding: '2rem 1rem' }}>
                <div className="glass-lg" style={{ width: '100%', maxWidth: '36rem', padding: '3rem 2rem', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden', textAlign: 'center', margin: 'auto' }}>
                    <div className="top-gradient-border"></div>

                    <div style={{ width: '5rem', height: '5rem', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'var(--primary-100)', color: 'var(--primary-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="dark:bg-sky-900/30 dark:text-sky-300">
                        <HelpCircle size={40} />
                    </div>

                    <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
                        How can we help?
                    </h1>
                    <p style={{ fontSize: '1.125rem', color: 'rgba(15, 23, 42, 0.7)', marginBottom: '2.5rem' }} className="dark:text-slate-300">
                        Have a problem, found a bug, or just want to request a new feature? We are always here to listen.
                    </p>

                    <div style={{ padding: '2rem', borderRadius: '1rem', background: 'rgba(15, 23, 42, 0.02)', border: '1px solid var(--border)' }} className="dark:bg-slate-800/30">
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Direct Email Support</h3>
                        <p style={{ color: 'rgba(15, 23, 42, 0.6)', marginBottom: '1.5rem', lineHeight: '1.5', fontWeight: 600 }} className="dark:text-slate-400">
                            ANY PROBLEM WRITE IT COME TO JOSEPHEFRON3@GMAIL.COM MAIL ....
                        </p>

                        <a
                            href="mailto:JOSEPHEFRON3@GMAIL.COM?subject=ConvertX Support Request"
                            className="btn-primary"
                            style={{ display: 'inline-flex', width: '100%', padding: '1rem', fontSize: '1.125rem' }}
                        >
                            <Mail size={20} />
                            Contact Support
                        </a>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Support;
