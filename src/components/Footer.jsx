import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', padding: '2rem 1rem' }}>
                <div>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', display: 'block' }} className="gradient-text">ConvertX</span>
                    <p style={{ fontSize: '0.875rem', color: 'rgba(15, 23, 42, 0.6)', lineHeight: '1.6' }} className="dark:text-slate-400">The fastest, most secure free online file converter. Process PDF, images, video and more instantly in your browser.</p>
                </div>

                <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Tools</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', display: 'grid', gap: '0.5rem' }}>
                        <li><a href="/#converter" className="footer-link">PDF Converter</a></li>
                        <li><a href="/#converter" className="footer-link">Image Converter</a></li>
                        <li><a href="/#converter" className="footer-link">Video Converter</a></li>
                        <li><a href="/#converter" className="footer-link">Audio Converter</a></li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontWeight: 700, marginBottom: '1rem' }}>Support</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.875rem', display: 'grid', gap: '0.5rem' }}>
                        <li><a href="/support" className="footer-link">Help Center</a></li>
                        <li><a href="/#features" className="footer-link">Features</a></li>
                        <li><a href="/login" className="footer-link">Sign In</a></li>
                    </ul>
                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(15, 23, 42, 0.05)', padding: '1.5rem 1rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }} className="footer-bottom">
                <span className="footer-muted" style={{ fontSize: '0.875rem' }}>
                    © {new Date().getFullYear()} ConvertX. All rights reserved. Made by <span style={{ fontWeight: 700 }}>EFRON</span>
                </span>
                <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.875rem' }}>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
