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
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-14"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            variants={cardReveal}
                            style={{ perspective: 1000 }}
                            className="h-full"
                        >
                            <TiltCard>
                                <div className="group glass-card rounded-3xl overflow-hidden relative h-full flex flex-col hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-shadow duration-500">
                                    {/* Hover Border Gradient Glow */}
                                    <div className="absolute inset-[-1px] bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl -z-10 animate-border-glow mix-blend-screen" />

                                    <div className="relative h-56 overflow-hidden border-b border-white/5 shrink-0" style={{ transform: "translateZ(30px)" }}>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-dark-surface to-transparent opacity-90" />
                                    </div>

                                    <div className="p-8 relative z-10 flex-1 flex flex-col" style={{ transform: "translateZ(40px)" }}>
                                        <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-primary transition-colors duration-300 text-white">{project.title}</h3>
                                        <p className="text-gray-200 text-sm mb-6 line-clamp-3 leading-relaxed font-light flex-1 drop-shadow-md">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {project.tech.map((tech) => (
                                                <span key={tech} className="px-3 py-1.5 text-[10px] uppercase tracking-widest font-semibold bg-dark/60 text-gray-300 rounded-full border border-white/10 shadow-inner backdrop-blur-md">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4" style={{ transform: "translateZ(50px)" }}>
                                            <a href={project.github} data-magnetic className="flex-1 py-3 flex items-center justify-center gap-2 glass hover:bg-white/10 text-white rounded-xl transition-all duration-300 text-sm font-medium">
                                                <FaGithub size={18} /> Code
                                            </a>
                                            <a href={project.live} data-magnetic className="flex-1 py-3 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white rounded-xl transition-all duration-300 text-sm font-medium premium-shadow relative overflow-hidden group/btn">
                                                <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-out skew-x-12" />
                                                <ExternalLink size={18} /> Live
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
