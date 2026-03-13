import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConverterDashboard from '../components/ConverterDashboard';
import { converters } from '../data/converters';
import { ArrowLeft } from 'lucide-react';

const ToolLandingPage = () => {
    const { toolId } = useParams();

    // Verify if toolId is valid, else we fallback
    const validTool = converters.find(c => c.id === toolId);

    if (!validTool) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main className="main-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div className="glass-lg" style={{ padding: '3rem', textAlign: 'center', borderRadius: '1.5rem', maxWidth: '30rem' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Tool Not Found</h1>
                        <p style={{ color: 'rgba(15,23,42,0.6)', marginBottom: '2rem' }}>We couldn't find the conversion tool you are looking for.</p>
                        <Link to="/" className="btn-primary" style={{ display: 'inline-flex' }}>
                            <ArrowLeft size={16} /> Return Home
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }

    const { title } = validTool;
    const [source, target] = toolId.split('-to-');
    const sourceText = source.toUpperCase().replace('IMAGE', 'Images').replace('CAMERA', 'Camera');
    const targetText = target.toUpperCase().replace('DOC', 'Word Documents');

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />

            <main className="main-content">
                <div style={{ textAlign: 'center', maxWidth: '52rem', marginBottom: '3rem', margin: '0 auto', padding: '0 1rem' }}>
                    <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.1 }}>
                        Free Online <span className="gradient-text">{title}</span> Converter
                    </h1>
                    <p style={{ fontSize: '1.125rem', color: 'rgba(15,23,42,0.7)', fontWeight: 500, lineHeight: 1.6, maxWidth: '40rem', margin: '0 auto' }}>
                        Convert {sourceText} to {targetText} instantly securely in your browser. 
                        No software download, registration, or email required. 100% free.
                    </p>
                </div>

                <div style={{ width: '100%' }}>
                    <ConverterDashboard initialTool={toolId} />
                </div>

                <div style={{ width: '100%', maxWidth: '800px', margin: '6rem auto 4rem', padding: '0 1rem' }}>
                    <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '2rem', textAlign: 'center' }}>Why use ConvertX for {sourceText} to {targetText}?</h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>Lightning Fast</h3>
                            <p style={{ color: 'rgba(15,23,42,0.6)', fontSize: '0.925rem' }}>Our ultra-fast infrastructure processes your files in seconds, not minutes.</p>
                        </div>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>Private & Secure</h3>
                            <p style={{ color: 'rgba(15,23,42,0.6)', fontSize: '0.925rem' }}>Your {sourceText} files are deleted instantly after conversion. We never share your data.</p>
                        </div>
                        <div className="glass" style={{ padding: '1.5rem', borderRadius: '1rem' }}>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>High Quality</h3>
                            <p style={{ color: 'rgba(15,23,42,0.6)', fontSize: '0.925rem' }}>Advanced algorithms ensure your new {targetText} retain maximum quality.</p>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ToolLandingPage;
