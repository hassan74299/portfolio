import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
    {
        year: '2021',
        title: 'Started with HTML & CSS',
        description: 'Built the foundation of web development with semantic HTML and modern CSS layouts.',
    },
    {
        year: '2022',
        title: 'Mastered JavaScript',
        description: 'Deep-dived into advanced JavaScript: closures, async/await, DOM manipulation, and design patterns.',
    },
    {
        year: '2023',
        title: 'Built Large Frontend Systems',
        description: 'Developed production-scale applications including e-commerce platforms and healthcare ecosystems.',
    },
    {
        year: '2024',
        title: 'Learning React',
        description: 'Transitioning to React.js for building component-driven, scalable single-page applications.',
    },
    {
        year: '2025',
        title: 'Exploring AI APIs',
        description: 'Integrating AI capabilities into web applications for intelligent, data-driven user experiences.',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function About() {
    return (
        <section id="about" className="section">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About <span className="gradient-text">Me</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Get to know my journey and what drives me as a developer
                </motion.p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '60px',
                        alignItems: 'start',
                    }}
                    className="about-grid"
                >
                    {/* Summary */}
                    <motion.div
                        className="glass-card"
                        style={{ padding: '32px' }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3
                            style={{
                                fontSize: '1.4rem',
                                fontWeight: 600,
                                marginBottom: '16px',
                            }}
                        >
                            Who I Am
                        </h3>
                        <p
                            style={{
                                color: 'var(--color-text-secondary)',
                                marginBottom: '16px',
                                lineHeight: 1.8,
                            }}
                        >
                            I am a Computer Science student with a strong foundation in
                            JavaScript and modern frontend development. My approach revolves
                            around writing clean, modular, and scalable code that powers
                            real-world applications.
                        </p>
                        <p
                            style={{
                                color: 'var(--color-text-secondary)',
                                marginBottom: '16px',
                                lineHeight: 1.8,
                            }}
                        >
                            From building complete e-commerce platforms with advanced
                            filtering and authentication to developing healthcare ecosystems
                            with multi-role dashboards, I focus on architecting systems that
                            are both robust and user-friendly.
                        </p>
                        <p
                            style={{
                                color: 'var(--color-text-secondary)',
                                lineHeight: 1.8,
                            }}
                        >
                            Currently, I am expanding my skill set into React.js, backend
                            development with Node.js, and AI integration -- preparing to
                            build full-stack, intelligent applications that make a real
                            impact.
                        </p>
                    </motion.div>

                    {/* Timeline */}
                    <motion.div
                        className="timeline"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {timelineData.map((item, index) => (
                            <motion.div
                                key={index}
                                className="timeline-item"
                                variants={itemVariants}
                            >
                                <div className="timeline-dot" />
                                <span
                                    style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: 'var(--color-accent-blue)',
                                        marginBottom: '4px',
                                        display: 'block',
                                    }}
                                >
                                    {item.year}
                                </span>
                                <h4
                                    style={{
                                        fontSize: '1.05rem',
                                        fontWeight: 600,
                                        marginBottom: '6px',
                                    }}
                                >
                                    {item.title}
                                </h4>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
        </section>
    );
}

export default About;
