import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, FileText, User, Github, AlertCircle } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (error) setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
            setError('Please fill in all fields.');
            return;
        }

        setIsLoading(true);
        // Simulate an API call
        setTimeout(() => {
            setIsLoading(false);
            navigate('/');
        }, 1500);
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
            {/* Logo - Top Left */}
            <Link to="/" style={{ position: 'absolute', top: '2rem', left: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 10 }}>
                <div style={{
                    width: '3rem', height: '3rem', borderRadius: '1rem',
                    background: 'linear-gradient(135deg, var(--primary-600), #3b82f6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                    boxShadow: '0 10px 20px -5px rgba(14, 165, 233, 0.4)'
                }}>
                    <FileText size={24} />
                </div>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.025em' }}>
                    ConvertX
                </span>
            </Link>

            <div className="glass-lg" style={{
                width: '100%',
                maxWidth: '30rem',
                padding: '3rem',
                borderRadius: '2rem',
                position: 'relative',
                zIndex: 1,
                border: '1px solid var(--glass-border)'
            }}>
                <div className="top-gradient-border" style={{ height: '4px' }}></div>

                <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                    <h2 style={{ fontSize: '2.25rem', fontWeight: 800, marginBottom: '0.75rem', letterSpacing: '-0.025em' }}>
                        {isLogin ? 'Hello Again' : 'Get Started'}
                    </h2>
                    <p style={{ color: 'rgba(15, 23, 42, 0.6)', fontSize: '1rem' }}>
                        {isLogin ? 'Welcome back! Please enter your details.' : 'Join ConvertX and experience faster conversions.'}
                    </p>
                </div>

                {error && (
                    <div style={{
                        background: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        color: '#ef4444',
                        padding: '1rem',
                        borderRadius: '0.75rem',
                        marginBottom: '1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        fontSize: '0.875rem'
                    }}>
                        <AlertCircle size={18} />
                        {error}
                    </div>
                )}

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', opacity: 0.8 }}>Full Name</label>
                            <div style={{ position: 'relative' }}>
                                <User size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(15, 23, 42, 0.3)' }} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    className="glass"
                                    style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 3rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)', outline: 'none', transition: 'all 0.2s' }}
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.5rem', opacity: 0.8 }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(15, 23, 42, 0.3)' }} />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="you@example.com"
                                className="glass"
                                style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 3rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)', outline: 'none', transition: 'all 0.2s' }}
                            />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 600, opacity: 0.8 }}>Password</label>
                            {isLogin && <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary-600)', fontWeight: 600 }}>Forgot password?</a>}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(15, 23, 42, 0.3)' }} />
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                placeholder="••••••••"
                                className="glass"
                                style={{ width: '100%', padding: '0.875rem 1rem 0.875rem 3rem', borderRadius: '1rem', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)', outline: 'none', transition: 'all 0.2s' }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary"
                        disabled={isLoading}
                        style={{ marginTop: '0.5rem', padding: '1rem', position: 'relative', overflow: 'hidden' }}
                    >
                        {isLoading ? (
                            <div className="animate-pulse">Processing...</div>
                        ) : (
                            <>
                                {isLogin ? 'Sign In' : 'Create Account'}
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0.5rem 0' }}>
                        <div style={{ flex: 1, height: '1px', background: 'var(--border)', opacity: 0.5 }}></div>
                        <span style={{ fontSize: '0.75rem', color: 'rgba(15, 23, 42, 0.4)', fontWeight: 600 }}>OR</span>
                        <div style={{ flex: 1, height: '1px', background: 'var(--border)', opacity: 0.5 }}></div>
                    </div>

                    <button type="button" className="btn-secondary" style={{ padding: '0.875rem', background: 'var(--foreground)', color: 'var(--background)' }}>
                        <Github size={18} />
                        Continue with GitHub
                    </button>
                </form>

                <div style={{ marginTop: '2.5rem', textAlign: 'center', fontSize: '0.925rem' }}>
                    <span style={{ color: 'rgba(15, 23, 42, 0.6)' }}>
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                    </span>
                    <button
                        onClick={() => {
                            setIsLogin(!isLogin);
                            setError('');
                        }}
                        style={{ color: 'var(--primary-600)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: '0.25rem' }}
                    >
                        {isLogin ? 'Join for free' : 'Log in here'}
                    </button>
                </div>
            </div>

            {/* Background Details */}
            <div className="blob blob-1" style={{ opacity: 0.1, width: '40rem', height: '40rem' }}></div>
            <div className="blob blob-2" style={{ opacity: 0.1, width: '30rem', height: '30rem' }}></div>
        </div>
    );
};

export default Login;
