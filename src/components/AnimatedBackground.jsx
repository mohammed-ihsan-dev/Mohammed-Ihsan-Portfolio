import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const AnimatedBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize mouse position between -1 and 1
            const x = (e.clientX / window.innerWidth) * 2 - 1;
            const y = (e.clientY / window.innerHeight) * 2 - 1;
            setMousePosition({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const springConfig = { damping: 30, stiffness: 100, mass: 1 };
    const parallaxX = useSpring(mousePosition.x * 30, springConfig);
    const parallaxY = useSpring(mousePosition.y * 30, springConfig);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-dark">
            {/* Base gradient layers */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.18),transparent_45%)] mix-blend-screen" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_70%,rgba(139,92,246,0.15),transparent_50%)] mix-blend-screen" />

            {/* Floating blobs with parallax */}
            <motion.div
                style={{ x: parallaxX, y: parallaxY }}
                className="absolute inset-0 w-full h-full"
            >
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/20 rounded-full blur-[140px] mix-blend-screen animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[40%] h-[40%] bg-secondary/15 rounded-full blur-[140px] mix-blend-screen animate-blob" style={{ animationDelay: '5s' }} />
                <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] bg-accent/15 rounded-full blur-[140px] mix-blend-screen animate-blob" style={{ animationDelay: '10s' }} />
            </motion.div>

            {/* Noise texture overlay */}
            <div className="absolute inset-0 noise-bg" />
        </div>
    );
};

export default AnimatedBackground;
