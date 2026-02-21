import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data';

const Experience = () => {
    return (
        <section id="experience" className="py-20 relative bg-slate-900/30">
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="text-primary">Experience</span></h2>
                    <div className="w-20 h-1 bg-primary rounded-full mx-auto" />
                </motion.div>

                <div className="relative space-y-12">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 md:hidden" />

                    {experience.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-slate-900 -translate-x-[calc(50%+1px)] md:-translate-x-1/2 z-10" />

                            <div className="flex-1 w-full pl-12 md:pl-0">
                                <div className={`p-6 bg-slate-900 border border-white/5 rounded-2xl hover:border-primary/30 transition-all ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                    }`}>
                                    <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-2 block">
                                        {item.period}
                                    </span>
                                    <h3 className="text-xl font-bold mb-1">{item.role}</h3>
                                    <p className="text-slate-400 mb-4">{item.company}</p>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 hidden md:block" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
