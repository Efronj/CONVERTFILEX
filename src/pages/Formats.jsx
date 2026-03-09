import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Formats = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />

            <main className="main-content" style={{ padding: '4rem 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem' }} className="gradient-text">Supported File Formats</h1>
                    <p style={{ color: 'rgba(15, 23, 42, 0.6)', maxWidth: '40rem', margin: '0 auto', fontSize: '1.25rem' }} className="dark:text-slate-300">
                        ConvertX supports a wide range of file formats for all your document, image, and media needs.
                        No software installation required—all conversions happen in your browser or on our secure servers.
                    </p>
                </div>

                <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {/* Documents */}
                        <div className="glass-lg" style={{ padding: '2.5rem', borderRadius: '1.5rem' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>📄</div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Documents</h2>
                            <p style={{ color: 'rgba(15, 23, 42, 0.65)', marginBottom: '1.5rem' }} className="dark:text-slate-400">High-fidelity conversions for all your professional documents.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['PDF', 'DOCX', 'DOC', 'TXT', 'RTF', 'ODT', 'XLSX', 'PPTX'].map(fmt => (
                                    <span key={fmt} style={{ padding: '0.25rem 0.75rem', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary-600)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600 }}>{fmt}</span>
                                ))}
                            </div>
                        </div>

                        {/* Images */}
                        <div className="glass-lg" style={{ padding: '2.5rem', borderRadius: '1.5rem' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🖼️</div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Images</h2>
                            <p style={{ color: 'rgba(15, 23, 42, 0.65)', marginBottom: '1.5rem' }} className="dark:text-slate-400">Fast processing for web and print image formats.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['JPG', 'PNG', 'WEBP', 'SVG', 'GIF', 'ICO', 'BMP', 'TIFF'].map(fmt => (
                                    <span key={fmt} style={{ padding: '0.25rem 0.75rem', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary-600)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600 }}>{fmt}</span>
                                ))}
                            </div>
                        </div>

                        {/* Video */}
                        <div className="glass-lg" style={{ padding: '2.5rem', borderRadius: '1.5rem' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🎬</div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Video</h2>
                            <p style={{ color: 'rgba(15, 23, 42, 0.65)', marginBottom: '1.5rem' }} className="dark:text-slate-400">Compress and convert video files for any device.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['MP4', 'MOV', 'AVI', 'MKV', 'WEBM', 'FLV', 'WMV'].map(fmt => (
                                    <span key={fmt} style={{ padding: '0.25rem 0.75rem', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary-600)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600 }}>{fmt}</span>
                                ))}
                            </div>
                        </div>

                        {/* Audio */}
                        <div className="glass-lg" style={{ padding: '2.5rem', borderRadius: '1.5rem' }}>
                            <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>🎵</div>
                            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>Audio</h2>
                            <p style={{ color: 'rgba(15, 23, 42, 0.65)', marginBottom: '1.5rem' }} className="dark:text-slate-400">Crystal clear audio conversions for your music library.</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {['MP3', 'WAV', 'FLAC', 'AAC', 'OGG', 'M4A', 'WMA'].map(fmt => (
                                    <span key={fmt} style={{ padding: '0.25rem 0.75rem', background: 'rgba(14, 165, 233, 0.1)', color: 'var(--primary-600)', borderRadius: '999px', fontSize: '0.875rem', fontWeight: 600 }}>{fmt}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', marginTop: '6rem', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }} className="gradient-text">Need a specific format?</h2>
                    <p style={{ color: 'rgba(15, 23, 42, 0.65)', marginBottom: '2rem' }}>We are constantly adding new formats. Contact our support if you need help.</p>
                    <a href="/support" className="btn-primary" style={{ display: 'inline-flex', padding: '1rem 2.5rem' }}>Contact Support</a>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Formats;
