import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Since this is a demo, we'll just redirect to the app
        navigate('/');
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
            <a href="/" style={{ position: 'absolute', top: '2rem', left: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                    width: '2.5rem', height: '2.5rem', borderRadius: '0.75rem',
                    background: 'linear-gradient(to top right, var(--primary-600), #3b82f6)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}>
                    <FileText size={20} />
                </div>
                <span style={{ fontSize: '1.25rem', fontWeight: 700 }} className="gradient-text-subtle">
                    ConvertX
                </span>
            </a>

            <div className="glass-lg" style={{ width: '100%', maxWidth: '28rem', padding: '2.5rem', borderRadius: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div className="top-gradient-border"></div>

                <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                        {isLogin ? 'Welcome Back' : 'Create Account'}
                    </h2>
                    <p style={{ color: 'rgba(15, 23, 42, 0.6)' }} className="dark:text-slate-300">
                        {isLogin ? 'Enter your details to access your dashboard.' : 'Sign up to start converting files unlimited.'}
                    </p>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleSubmit}>
                    {!isLogin && (
                        <div>
                            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Full Name</label>
                            <div style={{ position: 'relative' }}>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    placeholder="John Doe"
                                    style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)', outline: 'none' }}
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 500, marginBottom: '0.5rem' }}>Email Address</label>
                        <div style={{ position: 'relative' }}>
                            <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(15, 23, 42, 0.4)' }} />
                            <input
                                type="email"
                                name="email"
                                autoComplete="username email"
                                placeholder="you@example.com"
                                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)', outline: 'none' }}
                            />
                        </div>
                    </div>

                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                            <label style={{ fontSize: '0.875rem', fontWeight: 500 }}>Password</label>
                            {isLogin && <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary-600)', fontWeight: 500 }}>Forgot?</a>}
                        </div>
                        <div style={{ position: 'relative' }}>
                            <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'rgba(15, 23, 42, 0.4)' }} />
                            <input
                                type="password"
                                name="password"
                                autoComplete={isLogin ? "current-password" : "new-password"}
                                placeholder="••••••••"
                                style={{ width: '100%', padding: '0.75rem 1rem 0.75rem 2.75rem', borderRadius: '0.75rem', border: '1px solid var(--border)', background: 'var(--card)', color: 'var(--foreground)', outline: 'none' }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary" style={{ marginTop: '1rem', padding: '0.875rem' }}>
                        {isLogin ? 'Sign In' : 'Create Account'}
                        <ArrowRight size={18} />
                    </button>
                </form>

                <div style={{ marginTop: '2rem', textAlign: 'center', fontSize: '0.875rem' }}>
                    <span style={{ color: 'rgba(15, 23, 42, 0.6)' }} className="dark:text-slate-300">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                    </span>
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        style={{ color: 'var(--primary-600)', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                    >
                        {isLogin ? 'Sign up' : 'Log in'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
