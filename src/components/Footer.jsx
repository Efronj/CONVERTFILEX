import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ fontSize: '1.125rem', fontWeight: 700 }} className="gradient-text">
                        ConvertX
                    </span>
                    <span className="footer-muted">
                        © {new Date().getFullYear()} All rights reserved.
                    </span>
                </div>

                <div className="footer-links">
                    <a href="#" className="footer-muted" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary-500)'} onMouseOut={e => e.target.style.color = ''}>Privacy</a>
                    <a href="#" className="footer-muted" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary-500)'} onMouseOut={e => e.target.style.color = ''}>Terms</a>
                    <a href="#" className="footer-muted" style={{ transition: 'color 0.2s' }} onMouseOver={e => e.target.style.color = 'var(--primary-500)'} onMouseOut={e => e.target.style.color = ''}>Support</a>
                </div>

                <div className="footer-badge">
                    make by <span style={{ fontWeight: 700 }}>EFRON</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
