import React from 'react';
import './FramedImage.css';

interface FramedImageProps {
    src: string;
    alt: string;
    className?: string;
}

const FramedImage: React.FC<FramedImageProps> = ({ src, alt, className = '' }) => {
    return (
        <div className={`framed-image-container ${className}`}>
            <svg width="0" height="0">
                <defs>
                    <clipPath id="blob-frame" clipPathUnits="objectBoundingBox">
                        <path d="M 0.15,0.05 
                                 C 0.05,0.05 0.02,0.1 0.02,0.2
                                 L 0.02,0.75
                                 C 0.02,0.85 0.05,0.92 0.15,0.95
                                 L 0.8,0.95
                                 C 0.9,0.95 0.95,0.9 0.98,0.8
                                 L 0.98,0.25
                                 C 0.98,0.15 0.93,0.08 0.85,0.05
                                 Z" />
                    </clipPath>
                </defs>
            </svg>
            <div className="framed-image-wrapper">
                <img src={src} alt={alt} className="framed-image" />
            </div>
        </div>
    );
};

export default FramedImage;
