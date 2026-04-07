import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../data';
import { staggerContainer, sectionReveal, cardReveal } from '../utils/animations';

// Custom 3D Tilt Card Component
const TiltCard = ({ children }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full h-full relative"
        >
            {children}
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="py-28 px-6 relative z-10 w-full overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={sectionReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-20 text-center md:text-left"
                >
                    <h2 className="text-4xl md:text-6xl font-bold mb-6 font-display tracking-tight inline-block duration-500">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto md:mx-0" />
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardReveal}
                            style={{ perspective: 1000 }}
                            className="h-full"
                        >
                            <TiltCard>
                                <div className="group glass-card rounded-[2rem] overflow-hidden relative h-full flex flex-col hover:translate-y-[-8px] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 border border-white/5">
                                    {/* Project Image Container */}
                                    <div className="relative h-64 overflow-hidden shrink-0" style={{ transform: "translateZ(30px)" }}>
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                        />
                                    </div>

                                    {/* Content Container */}
                                    <div className="p-8 relative z-10 flex-1 flex flex-col" style={{ transform: "translateZ(40px)" }}>
                                        <h3 className="text-2xl font-bold mb-3 tracking-tight text-white group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        
                                        <p className="text-white/85 text-[15px] mb-6 line-clamp-3 leading-relaxed font-normal flex-1">
                                            {project.description}
                                        </p>

                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((tech) => (
                                                <span 
                                                    key={tech} 
                                                    className="px-3 py-1 text-[11px] font-medium bg-white/5 text-slate-300 rounded-lg border border-white/10 backdrop-blur-md"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4 mt-auto" style={{ transform: "translateZ(50px)" }}>
                                            <a 
                                                href={project.live} 
                                                data-magnetic 
                                                className="flex-[1.5] py-3.5 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-500 text-white rounded-2xl transition-all duration-300 text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                <ExternalLink size={18} /> Live Demo
                                            </a>
                                            <a 
                                                href={project.github} 
                                                data-magnetic 
                                                className="flex-1 py-3.5 flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 hover:bg-white/5 text-white/90 rounded-2xl transition-all duration-300 text-sm font-medium hover:scale-[1.02] active:scale-[0.98]"
                                            >
                                                <FaGithub size={18} /> Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
