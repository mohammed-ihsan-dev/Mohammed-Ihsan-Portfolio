import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Code2, Database, Layout } from 'lucide-react';
import { profile } from '../data';
import { fadeInUp, staggerContainer } from '../utils/animations';

const roles = [profile.role, "UI/UX Architect", "Full Stack Developer"];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
            {/* Floating Tech Icons */}
            <motion.div
                className="absolute top-1/4 left-10 md:left-32 text-primary/30 blur-[1px] hidden md:block"
                animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            >
                <Layout size={48} />
            </motion.div>
            <motion.div
                className="absolute top-1/3 right-10 md:right-32 text-secondary/30 blur-[1px] hidden md:block"
                animate={{ y: [0, 20, 0], rotate: [0, -15, 10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
                <Database size={48} />
            </motion.div>
            <motion.div
                className="absolute bottom-1/3 left-20 md:left-48 text-accent/30 blur-[1px] hidden md:block"
                animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            >
                <Code2 size={40} />
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 text-center z-10 w-full relative pt-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col items-center"
                >
                    <motion.div variants={fadeInUp} className="mb-8 h-8 flex items-center justify-center">
                        <span className="text-secondary font-medium tracking-[0.2em] bg-secondary/10 px-6 py-2 rounded-full border border-secondary/20 backdrop-blur-md uppercase text-xs inline-flex overflow-hidden min-w-[240px] justify-center items-center">
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={roleIndex}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: -20, opacity: 0 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                    className="absolute"
                                >
                                    {roles[roleIndex]}
                                </motion.span>
                            </AnimatePresence>
                            {/* Invisible placeholder to maintain width */}
                            <span className="opacity-0">Full Stack Developer</span>
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-tight font-display relative"
                    >
                        Hi, I'm <br className="md:hidden" />
                        <span className="shimmer-text drop-shadow-xl inline-block mt-2 relative">
                            {profile.name}
                            <motion.div
                                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: '100%' }}
                                transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                            />
                        </span>
                    </motion.h1>

                    <motion.div
                        variants={fadeInUp}
                        className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-light overflow-hidden"
                    >
                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {profile.intro}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        variants={fadeInUp}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
                    >
                        <a
                            href="#projects"
                            data-magnetic
                            className="group w-full sm:w-auto px-10 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-3 premium-shadow"
                        >
                            View Projects
                            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
                        </a>
                        <a
                            href="#contact"
                            data-magnetic
                            className="w-full sm:w-auto px-10 py-4 glass hover:bg-white/10 text-white rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Contact Me
                        </a>
                    </motion.div>
                </motion.div>

                {/* Social Links Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-[-80%] md:bottom-[-60%] left-1/2 -translate-x-1/2 text-gray-500 text-sm flex flex-col items-center gap-3 animate-float"
                >
                    <span className="text-[10px] uppercase tracking-[0.3em] opacity-60 font-display">Scroll</span>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-primary/50 to-transparent" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
