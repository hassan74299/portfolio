import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
    {
        title: 'MedStep -- Healthcare Ecosystem',
        description:
            'A comprehensive multi-role healthcare platform featuring separate dashboards for patients, doctors, and pharmacies. Built with modular architecture, clean UI system, and seamless role-based navigation.',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'LocalStorage'],
        github: '#',
        demo: '#',
        gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    },
    {
        title: 'Advanced E-Commerce Frontend',
        description:
            'Feature-rich e-commerce platform with JWT authentication simulation, shopping cart and wishlist management, advanced filtering and pagination, and a full admin dashboard for product management.',
        tech: ['JavaScript', 'CSS3', 'JWT Simulation', 'REST APIs', 'LocalStorage'],
        github: '#',
        demo: '#',
        gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    },
    {
        title: 'AI-Powered Chat Application',
        description:
            'Real-time chat interface with AI-driven message suggestions, intelligent response generation, and a modular component-based architecture designed for extensibility.',
        tech: ['JavaScript', 'AI APIs', 'WebSocket UI', 'CSS3', 'Modular JS'],
        github: '#',
        demo: '#',
        gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
    },
    {
        title: 'Scientific Calculator App',
        description:
            'Advanced scientific calculator with dual standard/scientific modes, calculation history, memory storage, theme toggle support, and a polished responsive interface.',
        tech: ['JavaScript', 'HTML5', 'CSS3', 'Math.js', 'LocalStorage'],
        github: '#',
        demo: '#',
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Projects() {
    return (
        <section id="projects" className="section">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Featured <span className="gradient-text">Projects</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Real-world applications showcasing my development capabilities
                </motion.p>

                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '24px',
                    }}
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                boxShadow: '0 20px 60px rgba(59, 130, 246, 0.12)',
                            }}
                            style={{
                                overflow: 'hidden',
                                cursor: 'default',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            {/* Gradient accent bar */}
                            <div
                                style={{
                                    height: '4px',
                                    background: project.gradient,
                                    borderRadius: '16px 16px 0 0',
                                }}
                            />

                            <div
                                style={{
                                    padding: '28px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flex: 1,
                                }}
                            >
                                <h3
                                    style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 700,
                                        marginBottom: '12px',
                                    }}
                                >
                                    {project.title}
                                </h3>

                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.7,
                                        marginBottom: '20px',
                                        flex: 1,
                                    }}
                                >
                                    {project.description}
                                </p>

                                {/* Tech badges */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        gap: '6px',
                                        marginBottom: '20px',
                                    }}
                                >
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-badge">
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div style={{ display: 'flex', gap: '12px' }}>
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '8px 18px',
                                            borderRadius: '8px',
                                            fontSize: '0.85rem',
                                            fontWeight: 500,
                                            background: 'rgba(148, 163, 184, 0.08)',
                                            border: '1px solid var(--color-border-glass)',
                                            color: 'var(--color-text-primary)',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s',
                                        }}
                                    >
                                        <FiGithub /> GitHub
                                    </motion.a>
                                    <motion.a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.97 }}
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '6px',
                                            padding: '8px 18px',
                                            borderRadius: '8px',
                                            fontSize: '0.85rem',
                                            fontWeight: 500,
                                            background: 'linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-purple))',
                                            color: '#fff',
                                            border: 'none',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        <FiExternalLink /> Live Demo
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .projects-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
        </section>
    );
}

export default Projects;
