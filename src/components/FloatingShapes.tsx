import React from 'react';
import { motion } from 'framer-motion';
import './FloatingShapes.css';

const shapes = [
    { type: 'circle', color: '#FF6B6B', size: 50, top: '10%', left: '5%' },
    { type: 'square', color: '#4ECDC4', size: 40, top: '20%', left: '85%' },
    { type: 'triangle', color: '#FFE66D', size: 60, top: '60%', left: '15%' },
    { type: 'circle', color: '#FF9F1C', size: 30, top: '80%', left: '90%' },
    { type: 'square', color: '#2EC4B6', size: 45, top: '40%', left: '50%' },
    { type: 'circle', color: '#FF6B6B', size: 25, top: '90%', left: '30%' },
];

const FloatingShapes: React.FC = () => {
    return (
        <div className="floating-shapes-container">
            {shapes.map((shape, index) => (
                <motion.div
                    key={index}
                    className={`shape shape-${shape.type}`}
                    style={{
                        backgroundColor: shape.type !== 'triangle' ? shape.color : 'transparent',
                        borderColor: shape.type === 'triangle' ? `transparent transparent ${shape.color} transparent` : 'none',
                        width: shape.type === 'triangle' ? 0 : shape.size,
                        height: shape.type === 'triangle' ? 0 : shape.size,
                        borderLeftWidth: shape.type === 'triangle' ? shape.size / 2 : 0,
                        borderRightWidth: shape.type === 'triangle' ? shape.size / 2 : 0,
                        borderBottomWidth: shape.type === 'triangle' ? shape.size : 0,
                        top: shape.top,
                        left: shape.left,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.5,
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingShapes;
