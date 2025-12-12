import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import './RobotMascot.css';

// --- Type Definitions ---
type AnimationState = 'entering' | 'waving' | 'idle' | 'jumping' | 'spinning' | 'excited';
type ScrollDirection = 'up' | 'down' | 'idle';
type Position = { x: number; y: number };

// --- Framer Motion Variants ---
const mascotVariants: Variants = {
    // Idle state with gentle breathing animation
    idle: {
        y: [0, -5, 0],
        scale: [1, 1.03, 1],
        rotate: 0,
        transition: {
            y: { duration: 2.5, ease: 'easeInOut', repeat: Infinity },
            scale: { duration: 2.5, ease: 'easeInOut', repeat: Infinity },
            rotate: { duration: 0.3 },
        },
    },
    entering: {
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.5, ease: 'easeOut' }
    },
    waving: {
        y: 0,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.3 }
    },
    jumping: {
        y: [0, -50, 0],
        transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] }
    },
    spinning: {
        rotate: [0, 360],
        transition: { duration: 1, ease: 'easeInOut' }
    },
    excited: {
        scale: [1, 1.2, 1],
        rotate: [0, -15, 15, -15, 0],
        transition: { duration: 0.9, ease: 'easeInOut' }
    },
};


const RobotMascot: React.FC = () => {
    const [animationState, setAnimationState] = useState<AnimationState>('entering');
    const [eyePosition, setEyePosition] = useState<Position>({ x: 0, y: 0 });
    const [headRotation, setHeadRotation] = useState<Position>({ x: 0, y: 0 });
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>('idle');
    const robotRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);
    const clickCount = useRef(0);

    // 1. Entrance animation sequence: entering -> waving -> idle
    useEffect(() => {
        const timer1 = setTimeout(() => setAnimationState('waving'), 2000);
        const timer2 = setTimeout(() => setAnimationState('idle'), 4000);
        return () => { clearTimeout(timer1); clearTimeout(timer2); };
    }, []);

    // 2. Cursor tracking (RAF-throttled for performance)
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!robotRef.current || animationState !== 'idle') return;

            const rect = robotRef.current.getBoundingClientRect();
            const robotCenterX = rect.left + rect.width / 2;
            const robotCenterY = rect.top + rect.height / 2;

            const deltaX = e.clientX - robotCenterX;
            const deltaY = e.clientY - robotCenterY;

            // Calculate movement (limited range)
            const maxEyeMove = 8;
            const maxHeadRotate = 15;

            setEyePosition({
                x: Math.max(-maxEyeMove, Math.min(maxEyeMove, deltaX / 50)),
                y: Math.max(-maxEyeMove, Math.min(maxEyeMove, deltaY / 50))
            });
            setHeadRotation({
                x: Math.max(-maxHeadRotate, Math.min(maxHeadRotate, deltaY / 100)),
                y: Math.max(-maxHeadRotate, Math.min(maxHeadRotate, deltaX / 100))
            });
        };

        let rafId: number | null = null;
        const throttledMouseMove = (e: MouseEvent) => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                handleMouseMove(e);
                rafId = null;
            });
        };

        window.addEventListener('mousemove', throttledMouseMove);
        return () => {
            window.removeEventListener('mousemove', throttledMouseMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [animationState]);

    // 3. Scroll tracking (RAF-throttled)
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Check for significant movement before setting direction
            if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
                setScrollDirection(currentScrollY > lastScrollY.current ? 'down' : 'up');
            }
            lastScrollY.current = currentScrollY;
        };

        let rafId: number | null = null;
        const throttledScroll = () => {
            if (rafId) return;
            rafId = requestAnimationFrame(() => {
                handleScroll();
                rafId = null;
            });
        };

        window.addEventListener('scroll', throttledScroll);
        return () => {
            window.removeEventListener('scroll', throttledScroll);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, []);

    // Reset scroll direction after a delay
    useEffect(() => {
        if (scrollDirection !== 'idle') {
            const resetTimer = setTimeout(() => setScrollDirection('idle'), 500);
            return () => clearTimeout(resetTimer);
        }
    }, [scrollDirection]);


    // 4. Handle robot click for reactions
    const handleRobotClick = () => {
        if (animationState !== 'idle') return;

        const reactions: AnimationState[] = ['jumping', 'spinning', 'excited', 'waving'];
        const reaction = reactions[clickCount.current % reactions.length];
        clickCount.current++;

        setAnimationState(reaction);

        // Reset to idle after 1.5 seconds
        setTimeout(() => setAnimationState('idle'), 1500);
    };

    return (
        <AnimatePresence>
            <motion.div
                ref={robotRef}
                className={`robot-mascot`}
                onClick={handleRobotClick}
                initial={{ x: -300, opacity: 0 }}

                // Combine general movement (entrance/scroll) with state variants
                animate={{
                    ...mascotVariants[animationState],
                    x: 0,
                    opacity: 0.85,
                    // Scroll animation: push down 20px when scrolling down, up 10px when scrolling up
                    y: scrollDirection === 'down' ? 20 : scrollDirection === 'up' ? -10 : 0
                }}
                transition={{
                    // General spring transition for positional changes (entrance/scroll)
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    duration: 1.2
                }}
            >
                <div className="robot-body">

                    {/* Head */}
                    <motion.div
                        className="robot-head"
                        animate={{
                            rotateX: headRotation.x,
                            rotateY: headRotation.y,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                        {/* Heart Antenna */}
                        <div className="robot-antenna">
                            <div className="antenna-heart"></div>
                        </div>

                        {/* Ears */}
                        <div className="ear left"></div>
                        <div className="ear right"></div>

                        {/* Cheeks */}
                        <div className="cheek left"></div>
                        <div className="cheek right"></div>

                        {/* Eyes */}
                        <div className="robot-eyes">
                            <div className="eye left">
                                <motion.div
                                    className="pupil"
                                    animate={eyePosition} // Follow cursor
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                />
                            </div>
                            <div className="eye right">
                                <motion.div
                                    className="pupil"
                                    animate={eyePosition} // Follow cursor
                                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                />
                            </div>
                        </div>

                        {/* Mouth (Smile) */}
                        <div className="robot-mouth smile"></div>
                    </motion.div>

                    {/* Torso */}
                    <div className="robot-torso">
                        {/* Camera/Chest Display */}
                        <div className="chest-plate">
                            <div className="camera-outer">
                                <div className="camera-inner"></div>
                            </div>
                        </div>
                    </div>

                    {/* Left Arm (Waving animation) */}
                    <motion.div
                        className="robot-arm left"
                        animate={{
                            rotate: animationState === 'waving' ? [0, -30, -50, -30, -50, -30, 0] : 0,
                        }}
                        transition={{
                            duration: 1.2,
                            ease: 'easeInOut'
                        }}
                    >
                        <div className="hand"></div>
                    </motion.div>

                    {/* Right Arm (Static) */}
                    <div className="robot-arm right">
                        <div className="hand"></div>
                    </div>

                    {/* Legs (Entrance walking animation) */}
                    <div className="robot-legs">
                        <motion.div
                            className="robot-leg left"
                            animate={{ rotateX: animationState === 'entering' ? [0, 20, -20, 20, -20, 0] : 0 }}
                            transition={{ duration: 0.8, repeat: animationState === 'entering' ? 1 : 0 }}
                        >
                            <div className="foot"></div>
                        </motion.div>
                        <motion.div
                            className="robot-leg right"
                            animate={{ rotateX: animationState === 'entering' ? [0, -20, 20, -20, 20, 0] : 0 }}
                            transition={{ duration: 0.8, repeat: animationState === 'entering' ? 1 : 0 }}
                        >
                            <div className="foot"></div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default RobotMascot;