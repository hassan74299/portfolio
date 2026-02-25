import React from 'react';
import { motion } from 'framer-motion';
import { HiCode, HiBriefcase, HiLightBulb, HiDesktopComputer } from 'react-icons/hi';

const experiences = [
    {
        period: '2024 — Present',
        role: 'Freelance Frontend Developer',
        organization: 'Self-Employed',
        description:
            'Building responsive, feature-rich web applications for clients. Specializing in JavaScript-driven frontends with clean UI, modular architecture, and API integrations.',
        highlights: [
            'Delivered e-commerce and business websites',
            'Client-focused iterative design process',
            'Performance optimization & cross-browser testing',
        ],
        icon: <HiBriefcase />,
        gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    },
    {
        period: '2023 — 2024',
        role: 'Lead Frontend Developer',
        organization: 'MedStep — University Final Year Project',
        description:
            'Led the frontend architecture for a multi-role healthcare platform with patient, doctor, pharmacy, and admin dashboards. Designed reusable component systems and role-based navigation.',
        highlights: [
            'Architected modular dashboard system',
            'Built 10+ reusable UI components',
            'Implemented role-based access patterns',
        ],
        icon: <HiDesktopComputer />,
        gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    },
    {
        period: '2023',
        role: 'JavaScript Developer',
        organization: 'Personal Projects & Open Source',
        description:
            'Built multiple full-scale projects including an AI-powered chat application and a scientific calculator with dual modes, showcasing advanced JavaScript skills.',
        highlights: [
            'AI API integration for chat features',
            'Complex state management in vanilla JS',
            'Published projects on GitHub',
        ],
        icon: <HiCode />,
        gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
    },
    {
        period: '2022',
        role: 'Web Development Learner',
        organization: 'Self-Taught & University',
        description:
            'Started the web development journey with HTML, CSS, and JavaScript fundamentals. Focused on building a strong foundation before moving to advanced topics.',
        highlights: [
            'Completed 50+ coding challenges',
            'Built first responsive portfolio site',
            'Learned Git version control',
        ],
        icon: <HiLightBulb />,
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function Experience() {
    return (
        <section id="experience" className="section">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My <span className="gradient-text">Experience</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    My professional journey and key milestones
                </motion.p>

                <motion.div
                    className="experience-timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                    style={{
                        position: 'relative',
                        maxWidth: '900px',
                        margin: '0 auto',
                    }}
                >
                    {/* Vertical line */}
                    <div
                        className="exp-line"
                        style={{
                            position: 'absolute',
                            left: '28px',
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            background:
                                'linear-gradient(to bottom, var(--color-accent-blue), var(--color-accent-purple), transparent)',
                        }}
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            style={{
                                display: 'flex',
                                gap: '24px',
                                marginBottom: '40px',
                                position: 'relative',
                            }}
                        >
                            {/* Icon circle */}
                            <div
                                style={{
                                    flexShrink: 0,
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: exp.gradient,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.4rem',
                                    color: '#fff',
                                    zIndex: 1,
                                    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.2)',
                                }}
                            >
                                {exp.icon}
                            </div>

                            {/* Content card */}
                            <motion.div
                                className="glass-card"
                                whileHover={{
                                    y: -5,
                                    boxShadow: '0 12px 40px rgba(59, 130, 246, 0.1)',
                                }}
                                style={{
                                    flex: 1,
                                    padding: '28px',
                                    cursor: 'default',
                                }}
                            >
                                <span
                                    style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: 'var(--color-accent-blue)',
                                        display: 'inline-block',
                                        padding: '4px 12px',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        borderRadius: '20px',
                                        marginBottom: '12px',
                                    }}
                                >
                                    {exp.period}
                                </span>
                                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '4px' }}>
                                    {exp.role}
                                </h3>
                                <span
                                    style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-accent-purple)',
                                        fontWeight: 500,
                                        display: 'block',
                                        marginBottom: '12px',
                                    }}
                                >
                                    {exp.organization}
                                </span>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.7,
                                        marginBottom: '16px',
                                    }}
                                >
                                    {exp.description}
                                </p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {exp.highlights.map((h) => (
                                        <span key={h} className="tech-badge">
                                            {h}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .exp-line {
                        display: none !important;
                    }
                    .experience-timeline > div {
                        flex-direction: column !important;
                        gap: 12px !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default Experience;
