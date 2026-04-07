import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';

const About = () => {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
                    <div className="w-20 h-1 bg-primary rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-slate-800 border border-white/10">
                                <img
                                    src="/IhsanPic.jpeg"
                                    alt={profile.name}
                                    className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-semibold mb-6">
                            I'm a <span className="text-gradient">Full Stack Developer</span> based in {profile.location}
                        </h3>
                        <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                            {profile.about}
                        </p>
                        <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                            I specialize in building robust MERN stack applications. Whether it's designing a pixel-perfect frontend or architecting a scalable backend, I enjoy every aspect of web development.
                        </p>

                        <div className="flex gap-4">
                            <div className="text-center p-4 bg-slate-900/50 border border-white/5 rounded-xl min-w-[120px]">
                                <h4 className="text-3xl font-bold text-primary mb-1">1+</h4>
                                <p className="text-sm text-slate-500">Years Experience</p>
                            </div>
                            <div className="text-center p-4 bg-slate-900/50 border border-white/5 rounded-xl min-w-[120px]">
                                <h4 className="text-3xl font-bold text-secondary mb-1">2+</h4>
                                <p className="text-sm text-slate-500">Projects Built</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
