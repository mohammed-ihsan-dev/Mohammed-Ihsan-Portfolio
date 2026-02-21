import React, { useEffect, useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const MagneticCursor = () => {
    const cursorRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
    const [isHovering, setIsHovering] = useState(false);

    // Using primitive motion values for high performance
    const cursorX = useMotionValue(mousePosition.x);
    const cursorY = useMotionValue(mousePosition.y);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    useEffect(() => {
        let animationFrameId;

        const moveCursor = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Simple distance check to see if hovering interactables
            const interactables = document.querySelectorAll('a, button, input, textarea, [data-magnetic]');
            let hoveredElement = null;

            interactables.forEach(el => {
                const rect = el.getBoundingClientRect();
                const distX = mouseX - (rect.left + rect.width / 2);
                const distY = mouseY - (rect.top + rect.height / 2);
                const distance = Math.sqrt(distX * distX + distY * distY);

                // Magnetic pull threshold
                if (distance < 60) {
                    hoveredElement = el;
                    // Attraction logic for the element
                    const pullX = (distX / distance) * 10;
                    const pullY = (distY / distance) * 10;
                    if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                        el.style.transform = `translate3d(${-pullX}px, ${-pullY}px, 0)`;
                    }
                } else if (el.style.transform !== '') {
                    // Reset element when out of radius
                    if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                        el.style.transform = `translate3d(0, 0, 0)`;
                    }
                }
            });

            if (hoveredElement) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }

            cursorX.set(mouseX);
            cursorY.set(mouseY);
        };

        const handleMouseMove = (e) => {
            animationFrameId = requestAnimationFrame(() => moveCursor(e));
        };

        // Initialize elements transition for magnetic reset
        const interactables = document.querySelectorAll('a, button, input, textarea, [data-magnetic]');
        interactables.forEach(el => {
            if (el.tagName !== 'INPUT' && el.tagName !== 'TEXTAREA') {
                el.style.transition = 'transform 0.3s cubic-bezier(0.2, 0, 0, 1)';
            }
        });

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="hidden md:block">
            <motion.div
                ref={cursorRef}
                className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-screen will-change-transform"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.2)' : '#3B82F6',
                    border: isHovering ? '1px solid rgba(59, 130, 246, 0.8)' : 'none',
                    boxShadow: isHovering ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none',
                }}
            />
            {/* Glowing trail effect */}
            <motion.div
                className="fixed top-0 left-0 w-32 h-32 bg-primary/20 rounded-full pointer-events-none z-[9998] blur-2xl will-change-transform"
                style={{
                    x: smoothX,
                    y: smoothY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.8 : 0.4
                }}
            />
        </div>
    );
};

export default MagneticCursor;
