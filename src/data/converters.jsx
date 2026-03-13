import React from 'react';
import { FileImage, Camera, Music, FileText } from 'lucide-react';

export const converters = [
    { id: 'image-to-pdf', title: 'Image to PDF', icon: <FileImage size={20} /> },
    { id: 'camera-to-pdf', title: 'Live Camera to PDF', icon: <Camera size={20} /> },
    { id: 'jpg-to-png', title: 'JPG to PNG', icon: <FileImage size={20} /> },
    { id: 'webp-to-jpg', title: 'WEBP to JPG', icon: <FileImage size={20} /> },
    { id: 'jpg-to-webp', title: 'JPG to WEBP', icon: <FileImage size={20} /> },
    { id: 'image-to-bmp', title: 'Image to BMP', icon: <FileImage size={20} /> },
    { id: 'image-to-gif', title: 'Image to GIF', icon: <FileImage size={20} /> },
    { id: 'image-to-ico', title: 'Image to ICO', icon: <FileImage size={20} /> },
    { id: 'image-to-svg', title: 'Image to SVG', icon: <FileImage size={20} /> },
    { id: 'image-to-tiff', title: 'Image to TIFF', icon: <FileImage size={20} /> },
    { id: 'image-to-psd', title: 'Image to PSD', icon: <FileImage size={20} /> },
    { id: 'image-to-eps', title: 'Image to EPS', icon: <FileImage size={20} /> },
    { id: 'image-to-tga', title: 'Image to TGA', icon: <FileImage size={20} /> },
    { id: 'mp4-to-mp3', title: 'Video to MP3', icon: <Music size={20} /> },
    { id: 'pdf-to-image', title: 'PDF to Image', icon: <FileText size={20} /> },
    { id: 'pdf-to-doc', title: 'PDF to Word', icon: <FileText size={20} /> },
    { id: 'doc-to-pdf', title: 'Word to PDF', icon: <FileText size={20} /> },
];
