import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import emailjs from '@emailjs/browser';
import { profile } from '../data';
import { sectionReveal, fadeInUp, staggerContainer } from '../utils/animations';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [focusedInput, setFocusedInput] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', message: '' });

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            setLoading(false);
            setStatus({
                type: 'error',
                message: 'EmailJS not configured. Please set up your credentials.'
            });
            return;
        }

        emailjs.send(
            serviceId,
            templateId,
            {
                from_name: formData.name,
                to_name: profile.name,
                from_email: formData.email,
                message: formData.message,
            },
            publicKey
        )
            .then(() => {
                setLoading(false);
                setStatus({ type: 'success', message: 'Message sent successfully!' });
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus({ type: '', message: '' }), 5000);
            })
            .catch((error) => {
                setLoading(false);
                console.error("FAILED...", error);
                const errorMessage = error?.text || error?.message || 'Something went wrong. Please try again.';
                setStatus({ type: 'error', message: `Error: ${errorMessage}` });
            });
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <section id="contact" className="py-28 relative overflow-hidden z-10 w-full">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight">
                        Get in <span className="text-gradient">Touch</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Info */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl font-display font-bold mb-6">Let's Talk</h3>
                        <p className="text-gray-400 mb-10 leading-relaxed font-light text-lg">
                            I'm open to job offers and freelance opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 text-gray-300 group">
                                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-primary border border-white/5 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500 font-medium mb-1 tracking-wider uppercase">Email</p>
                                    <a href={profile.social.email} className="text-lg hover:text-primary transition-colors block border-b border-transparent hover:border-primary w-fit">{profile.email}</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 text-gray-300 group">
                                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-secondary border border-white/5 group-hover:scale-110 group-hover:border-secondary/50 transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm text-gray-500 font-medium mb-1 tracking-wider uppercase">Location</p>
                                    <p className="text-lg">{profile.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16">
                            <p className="text-sm text-gray-500 mb-6 font-medium tracking-wider uppercase">Follow Me</p>
                            <div className="flex gap-4">
                                <a href={profile.social.github} target="_blank" rel="noreferrer" className="p-4 glass hover:bg-white/10 rounded-2xl text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:scale-110">
                                    <FaGithub size={22} />
                                </a>
                                <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="p-4 glass hover:bg-white/10 rounded-2xl text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:scale-110">
                                    <FaLinkedin size={22} />
                                </a>
                                <a href={profile.social.twitter} target="_blank" rel="noreferrer" className="p-4 glass hover:bg-white/10 rounded-2xl text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:scale-110">
                                    <FaXTwitter size={22} />
                                </a>
                                {profile.social.instagram && (
                                    <a href={profile.social.instagram} target="_blank" rel="noreferrer" className="p-4 glass hover:bg-white/10 rounded-2xl text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:scale-110">
                                        <FaInstagram size={22} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="glass-card p-8 md:p-10 rounded-3xl"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                            <div className="relative">
                                <label htmlFor="name" className={`absolute left-4 transition-all duration-300 ${focusedInput === 'name' || formData.name ? '-top-3 text-xs bg-dark-surface px-2 text-primary' : 'top-4 text-gray-500'}`}>Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('name')}
                                    onBlur={() => setFocusedInput(null)}
                                    required
                                    className="w-full bg-transparent border border-white/10 rounded-2xl px-4 py-4 text-gray-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="email" className={`absolute left-4 transition-all duration-300 ${focusedInput === 'email' || formData.email ? '-top-3 text-xs bg-dark-surface px-2 text-primary' : 'top-4 text-gray-500'}`}>Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('email')}
                                    onBlur={() => setFocusedInput(null)}
                                    required
                                    className="w-full bg-transparent border border-white/10 rounded-2xl px-4 py-4 text-gray-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="message" className={`absolute left-4 transition-all duration-300 ${focusedInput === 'message' || formData.message ? '-top-3 text-xs bg-dark-surface px-2 text-primary' : 'top-4 text-gray-500'}`}>Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocusedInput('message')}
                                    onBlur={() => setFocusedInput(null)}
                                    required
                                    rows="5"
                                    className="w-full bg-transparent border border-white/10 rounded-2xl px-4 py-4 text-gray-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none pt-6"
                                ></textarea>
                            </div>

                            {status.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`p-4 rounded-xl text-sm border ${status.type === 'success' ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-red-500/10 text-red-400 border-red-500/20'}`}
                                >
                                    {status.message}
                                </motion.div>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                data-magnetic
                                className="w-full text-lg bg-primary hover:bg-primary/90 text-white font-medium py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed premium-shadow relative overflow-hidden group"
                            >
                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out skew-x-12" />
                                {loading ? <Loader2 className="animate-spin" size={24} /> : <>Send Message <Send size={20} className="group-hover:translate-x-1 transition-transform" /></>}
                            </button>
                        </form>
                    </motion.div>
                </div>

                {/* Back to Top */}
                <div className="mt-32 text-center pb-10">
                    <button
                        onClick={scrollToTop}
                        data-magnetic
                        className="group flex flex-col items-center gap-2 mx-auto text-gray-500 hover:text-primary transition-colors focus:outline-none"
                    >
                        <span className="p-3 rounded-full border border-gray-500 group-hover:border-primary transition-colors group-hover:-translate-y-2 duration-300">
                            <span className="block transform -rotate-90">➔</span>
                        </span>
                        <span className="text-xs tracking-widest uppercase font-medium font-display">Back to Top</span>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Contact;
