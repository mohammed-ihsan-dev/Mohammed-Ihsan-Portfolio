import React, { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { profile } from '../data';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'glass py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-bold font-display tracking-tight group">
                    {profile.name}
                    <span className="text-primary group-hover:text-accent transition-colors duration-300">.</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            data-magnetic
                            className="text-gray-300 hover:text-white transition-colors text-sm font-medium tracking-wide relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <div className="flex items-center gap-4 pl-6 border-l border-white/10">
                        <a
                            href={profile.social.github}
                            target="_blank"
                            rel="noreferrer"
                            data-magnetic
                            className="text-gray-400 hover:text-white transition-all hover:scale-110"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href={profile.social.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            data-magnetic
                            className="text-gray-400 hover:text-white transition-all hover:scale-110"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="md:hidden absolute top-full left-4 right-4 mt-2 glass-card rounded-2xl p-6 flex flex-col space-y-6 shadow-2xl z-50 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-dark/80 backdrop-blur-xl -z-10" />

                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-200 hover:text-primary text-xl font-display font-medium tracking-tight"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex space-x-6 pt-6 border-t border-white/5">
                            <a href={profile.social.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                                <FaGithub size={24} />
                            </a>
                            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white">
                                <FaLinkedin size={24} />
                            </a>
                            <a href={profile.social.email} className="text-gray-400 hover:text-white">
                                <Mail size={24} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
