import React, { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText } from 'lucide-react';

const Navbar = () => {
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });
    const [mounted, setMounted] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    if (!mounted) return null;

    return (
        <nav style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%' }} className="glass">
            <div className="nav-container">
                <div className="nav-wrapper">
                    {/* Logo */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
                        <div style={{
                            width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem',
                            background: 'linear-gradient(to top right, var(--primary-600), #3b82f6)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                        }}>
                            <FileText size={24} />
                        </div>
                        <span style={{ fontSize: '1.25rem', fontWeight: 700 }} className="gradient-text-subtle">
                            ConvertX
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="desktop-links">
                        <a href="/" className="nav-link">Home</a>
                        <a href="/#converter" className="nav-link">Converter</a>
                        <a href="/#features" className="nav-link">Features</a>
                        <a href="/support" className="nav-link">Support</a>
                    </div>

                    {/* Actions */}
                    <div className="desktop-links" style={{ gap: '1rem' }}>
                        <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle Dark Mode">
                            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <a href="/login" className="nav-link" style={{ padding: '0.5rem', fontWeight: 600 }}>
                            Log in
                        </a>
                        <a href="/#converter" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
                            Get Started
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center gap-2 md-hidden-block" >
                        <div style={{ display: 'flex' }}>
                            <button onClick={toggleTheme} className="icon-btn">
                                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                            </button>
                            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="icon-btn" style={{ marginLeft: '0.5rem' }}>
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="mobile-menu glass">
                    <a href="/" className="mobile-nav-link">Home</a>
                    <a href="/#converter" className="mobile-nav-link">Converter</a>
                    <a href="/#features" className="mobile-nav-link">Features</a>
                    <a href="/support" className="mobile-nav-link">Support</a>
                    <div style={{ paddingTop: '1rem' }}>
                        <a href="/login" className="mobile-nav-link" style={{ textAlign: 'center', marginBottom: '0.5rem', fontWeight: 600 }}>
                            Log in
                        </a>
                        <a href="/#converter" className="btn-primary w-full" style={{ width: '100%', justifyContent: 'center' }}>
                            Get Started
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
