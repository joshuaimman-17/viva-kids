import React, { useEffect, useRef } from 'react';
import './CursorTrail.css';

const CursorTrail: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F1C', '#2EC4B6'];

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleMouseMove = (e: MouseEvent) => {
            const particle = document.createElement('div');
            particle.classList.add('trail-particle');

            // Random size and color
            const size = Math.random() * 15 + 8; // 8px to 23px
            const color = colors[Math.floor(Math.random() * colors.length)];

            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            particle.style.backgroundColor = color;
            particle.style.left = `${e.clientX}px`;
            particle.style.top = `${e.clientY}px`;

            // Random slight offset for "sprinkle" effect
            const offsetX = (Math.random() - 0.5) * 20;
            const offsetY = (Math.random() - 0.5) * 20;
            particle.style.transform = `translate(${offsetX}px, ${offsetY}px)`;

            container.appendChild(particle);

            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 1000);
        };

        // Throttle slightly to prevent too many DOM nodes
        let timeout: number;
        const throttledHandler = (e: MouseEvent) => {
            if (timeout) return;
            timeout = window.setTimeout(() => {
                handleMouseMove(e);
                timeout = 0;
            }, 20); // 50fps approx
        };

        window.addEventListener('mousemove', throttledHandler);

        return () => {
            window.removeEventListener('mousemove', throttledHandler);
        };
    }, []);

    return <div ref={containerRef} className="cursor-trail-container" />;
};

export default CursorTrail;
