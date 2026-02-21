import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data';

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech <span className="text-primary">Skills</span></h2>
                    <div className="w-20 h-1 bg-primary rounded-full mx-auto md:mx-0" />
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-slate-900 border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-colors"
                        >
                            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                                <span className="w-2 h-8 bg-gradient-to-b from-primary to-secondary rounded-full" />
                                {category.category}
                            </h3>

                            <div className="grid grid-cols-2 gap-4">
                                {category.items.map((skill) => (
                                    <div key={skill.name} className="flex items-center gap-3 bg-slate-950/50 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors group">
                                        <div className="text-primary group-hover:text-secondary transition-colors">
                                            <skill.icon size={20} />
                                        </div>
                                        <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
