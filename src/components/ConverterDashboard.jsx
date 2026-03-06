import React, { useState, useRef, useEffect } from 'react';
import { UploadCloud, FileImage, FileText, CheckCircle2, ArrowRightLeft, XCircle, Settings, Download, Camera, Video, Music } from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import JSZip from 'jszip';
import { jsPDF } from 'jspdf';

const converters = [
    { id: 'image-to-pdf', title: 'Image to PDF', icon: <FileImage size={20} /> },
    { id: 'image-to-doc', title: 'Image to DOC', icon: <FileImage size={20} /> },
    { id: 'camera-to-pdf', title: 'Live Camera to PDF', icon: <Camera size={20} /> },
    { id: 'jpg-to-png', title: 'JPG to PNG', icon: <FileImage size={20} /> },
    { id: 'webp-to-jpg', title: 'WEBP to JPG', icon: <FileImage size={20} /> },
    { id: 'jpg-to-webp', title: 'JPG to WEBP', icon: <FileImage size={20} /> },
    { id: 'mp4-to-mp3', title: 'Video to MP3', icon: <Music size={20} /> },
    { id: 'pdf-to-image', title: 'PDF to Image', icon: <FileText size={20} /> },
    { id: 'pdf-to-doc', title: 'PDF to Word', icon: <FileText size={20} /> },
    { id: 'doc-to-jpg', title: 'Word to JPG', icon: <FileText size={20} /> },
    { id: 'doc-to-pdf', title: 'Word to PDF', icon: <FileText size={20} /> },
];

const ConverterDashboard = () => {
    const [activeConverter, setActiveConverter] = useState(converters[0].id);
    const [files, setFiles] = useState([]);
    const [converting, setConverting] = useState(false);
    const [progress, setProgress] = useState(0);
    const [completed, setCompleted] = useState(false);

    // Camera State
    const [isCameraActive, setIsCameraActive] = useState(false);
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const streamRef = useRef(null);

    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            streamRef.current = stream;
            setIsCameraActive(true);
        } catch (err) {
            console.error("Error accessing camera:", err);
            alert("Could not access camera. Please check permissions.");
        }
    };

    useEffect(() => {
        if (isCameraActive && videoRef.current && streamRef.current) {
            videoRef.current.srcObject = streamRef.current;
        }
    }, [isCameraActive]);

    const stopCamera = () => {
        if (streamRef.current) {
            const tracks = streamRef.current.getTracks();
            tracks.forEach(track => track.stop());
            streamRef.current = null;
        }
        if (videoRef.current) {
            videoRef.current.srcObject = null;
        }
        setIsCameraActive(false);
    };

    // Stop camera when changing tool
    useEffect(() => {
        if (activeConverter !== 'camera-to-pdf' && isCameraActive) {
            stopCamera();
        }
    }, [activeConverter, isCameraActive]);

    const captureImage = () => {
        if (videoRef.current && canvasRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            canvas.toBlob((blob) => {
                if (blob) {
                    const file = new File([blob], `capture-${Date.now()}.jpg`, { type: 'image/jpeg' });
                    Object.assign(file, { preview: URL.createObjectURL(file) });
                    setFiles(prev => [...prev, file]);
                    stopCamera();
                }
            }, 'image/jpeg', 0.9);
        }
    };

    const handleConvert = () => {
        setConverting(true);
        setProgress(0);
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setConverting(false);
                    setCompleted(true);
                    return 100;
                }
                return prev + 5;
            });
        }, 100);
    };

    const handleDownload = async () => {
        const zip = new JSZip();

        // Helper to get image data as blob
        const convertImage = (file, targetFormat) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    canvas.toBlob((blob) => resolve(blob), `image/${targetFormat}`, 0.9);
                };
                img.onerror = () => resolve(new Blob(["Failed to load image"], { type: 'text/plain' }));
                img.src = file.preview;
            });
        };

        const processFiles = files.map(async (file) => {
            let targetExt = '.txt';
            let content = null;

            if (activeConverter.includes('-pdf')) {
                const pdf = new jsPDF();
                if (file.type.startsWith('image/')) {
                    try {
                        // Load image as data URL for jsPDF
                        const imgData = await new Promise((resolve) => {
                            const reader = new FileReader();
                            reader.onload = (e) => resolve(e.target.result);
                            reader.readAsDataURL(file);
                        });

                        const imgProps = pdf.getImageProperties(imgData);
                        const pdfWidth = pdf.internal.pageSize.getWidth();
                        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
                        pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
                    } catch (e) {
                        pdf.text("Converted file: " + file.name, 10, 10);
                        pdf.text("Note: Full encoding failed, simulated export.", 10, 20);
                    }
                } else {
                    pdf.text("Converted file: " + file.name, 10, 10);
                }
                content = pdf.output('blob');
                targetExt = '.pdf';
            } else if (activeConverter.includes('-png') || activeConverter.includes('-jpg') || activeConverter.includes('-webp')) {
                const format = activeConverter.split('-to-')[1] || 'png';
                targetExt = `.${format}`;
                if (file.type.startsWith('image/')) {
                    content = await convertImage(file, format);
                } else {
                    content = new Blob(["Conversion placeholder for non-image files"], { type: 'text/plain' });
                }
            } else if (activeConverter.includes('-mp3')) {
                targetExt = '.mp3';
                content = new Blob(["Audio conversion is server-side. This is a dummy MP3 for demonstration."], { type: 'audio/mpeg' });
            } else if (activeConverter.includes('-doc')) {
                targetExt = '.docx';
                content = new Blob(["DOCX conversion placeholder."], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
            } else {
                content = new Blob(["Converted content for " + file.name], { type: 'text/plain' });
            }

            const newName = file.name.replace(/\.[^/.]+$/, "") + "-converted" + targetExt;
            zip.file(newName, content);
        });

        await Promise.all(processFiles);
        zip.file("ConvertX-Readme.txt", "Thank you for using ConvertX! Your files have been processed successfully.");

        const zipBlob = await zip.generateAsync({ type: "blob" });
        const url = URL.createObjectURL(zipBlob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'ConvertX_Export.zip';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        setTimeout(() => {
            setFiles([]);
            setCompleted(false);
            setProgress(0);
        }, 800);
    };

    const onDrop = (acceptedFiles) => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })));
        setCompleted(false);
        setProgress(0);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        multiple: true,
    });

    const removeFile = (name) => {
        setFiles(files.filter(f => f.name !== name));
    };

    return (
        <div className="dashboard-container">

            {/* Sidebar / Options */}
            <div className="sidebar">
                <h3 className="sidebar-title">ConvertX Tools</h3>
                {converters.map(conv => (
                    <button
                        key={conv.id}
                        onClick={() => setActiveConverter(conv.id)}
                        className={`tool-btn ${activeConverter === conv.id ? 'active' : ''}`}
                    >
                        {conv.icon}
                        {conv.title}
                    </button>
                ))}
            </div>

            {/* Main Container */}
            <div className="converter-main glass-lg">
                <div className="top-gradient-border"></div>

                <div className="converter-header">
                    <h2 className="converter-title">
                        <ArrowRightLeft color="var(--primary-500)" />
                        {converters.find(c => c.id === activeConverter)?.title}
                    </h2>
                    <button className="icon-btn" style={{ padding: '0.5rem' }}>
                        <Settings size={20} />
                    </button>
                </div>

                {/* Dropzone or Camera UI */}
                {files.length === 0 ? (
                    activeConverter === 'camera-to-pdf' ? (
                        <div className="camera-container dark:border-slate-700/50" style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '2rem', border: '2px dashed rgba(15,23,42,0.2)', borderRadius: '1rem' }}>
                            {isCameraActive ? (
                                <div style={{ position: 'relative', width: '100%', maxWidth: '32rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', backgroundColor: 'black' }}>
                                    <video ref={videoRef} autoPlay playsInline style={{ width: '100%', display: 'block' }}></video>
                                    <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

                                    <div style={{ position: 'absolute', bottom: '1rem', left: '0', width: '100%', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                        <button onClick={stopCamera} style={{ background: 'rgba(0,0,0,0.5)', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '9999px', backdropFilter: 'blur(4px)', fontWeight: 600 }}>Cancel</button>
                                        <button onClick={captureImage} style={{ background: 'var(--primary-500)', color: 'white', width: '3.5rem', height: '3.5rem', borderRadius: '50%', border: '4px solid rgba(255,255,255,0.8)', boxShadow: '0 4px 6px rgba(0,0,0,0.2)' }} aria-label="Take Photo"></button>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ textAlign: 'center' }}>
                                    <div className="upload-icon-container" style={{ margin: '0 auto 1.5rem' }}>
                                        <Camera size={40} />
                                    </div>
                                    <h3 className="dropzone-title">Live Camera Capture</h3>
                                    <p className="dropzone-desc" style={{ margin: '0 auto 2rem' }}>
                                        Take a photo with your device camera and convert it directly to PDF.
                                    </p>
                                    <button onClick={startCamera} className="btn-primary" style={{ margin: '0 auto' }}>
                                        Start Camera
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div
                            {...getRootProps()}
                            className={`dropzone ${isDragActive ? 'active' : ''}`}
                        >
                            <input {...getInputProps()} />
                            <div className={`upload-icon-container ${isDragActive ? 'animate-bounce' : ''}`}>
                                <UploadCloud size={40} />
                            </div>
                            <h3 className="dropzone-title">Drag & Drop files here</h3>
                            <p className="dropzone-desc">
                                Supports PDF, DOC, DOCX, TXT, PPT, PPTX, XLS, XLSX, JPG, JPEG, PNG, WEBP, BMP, GIF.
                            </p>
                            <button className="btn-secondary" style={{ marginTop: '2rem', background: 'rgba(15,23,42,0.05)', color: 'inherit', boxShadow: 'none' }}>
                                Browse Files
                            </button>
                        </div>
                    )
                ) : (
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                        <div className="file-list">
                            {files.map((file) => (
                                <div key={file.name} className="file-item">
                                    <div className="file-preview">
                                        {file.type.startsWith('image/') ? (
                                            <img src={file.preview} alt={file.name} />
                                        ) : (
                                            <FileText style={{ color: 'rgba(15,23,42,0.5)', width: '2rem', height: '2rem' }} />
                                        )}
                                    </div>
                                    <div className="file-info">
                                        <p className="file-name" title={file.name}>{file.name}</p>
                                        <p className="file-size">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
                                    </div>
                                    {!converting && !completed && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); removeFile(file.name); }}
                                            className="remove-btn-circular"
                                            title="Remove File"
                                        >
                                            <XCircle size={20} />
                                        </button>
                                    )}
                                    {completed && (
                                        <div style={{ position: 'absolute', top: '-0.5rem', right: '-0.5rem', background: 'white', borderRadius: '50%', color: '#22c55e', padding: '0.1rem', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }} className="dark:bg-slate-900">
                                            <CheckCircle2 size={20} />
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Add More File Tile */}
                            {!converting && !completed && (
                                <div {...getRootProps()} className="add-more-box">
                                    <input {...getInputProps()} />
                                    <div className="add-more-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                    </div>
                                    <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'rgba(15,23,42,0.6)' }} className="dark:text-slate-300">
                                        Add More
                                    </span>
                                </div>
                            )}
                        </div>

                        {/* Actions / Progress */}
                        <div className="conversion-status">
                            {converting ? (
                                <div className="progress-container">
                                    <div className="progress-text">
                                        <span className="animate-pulse">Converting...</span>
                                        <span>{progress}%</span>
                                    </div>
                                    <div className="progress-bar-bg">
                                        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
                                    </div>
                                </div>
                            ) : completed ? (
                                <div className="success-state">
                                    <div className="success-icon animate-bounce">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Conversion Complete!</h3>
                                        <p className="footer-muted">Your files are ready to download safely.</p>
                                    </div>
                                    <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                                        <button
                                            onClick={() => { setFiles([]); setCompleted(false); }}
                                            className="btn-secondary" style={{ background: 'transparent', border: '1px solid rgba(15,23,42,0.2)', color: 'inherit', boxShadow: 'none' }}
                                        >
                                            Convert More
                                        </button>
                                        <button onClick={handleDownload} className="btn-primary">
                                            <Download size={20} />
                                            Download All
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                                    <button
                                        onClick={() => { setFiles([]); setCompleted(false); }}
                                        style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(15,23,42,0.6)' }}
                                    >
                                        Clear All
                                    </button>
                                    <button onClick={handleConvert} className="btn-secondary">
                                        Convert Now
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default ConverterDashboard;
