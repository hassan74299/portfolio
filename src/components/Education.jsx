import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiCode, HiLightBulb } from 'react-icons/hi';

const educationData = [
    {
        period: '2022 -- Present',
        degree: 'BS Computer Science',
        institution: 'University of Education Lahore',
        description:
            'Pursuing a comprehensive Computer Science degree with focus on software engineering, data structures, algorithms, and web development technologies.',
        icon: <HiAcademicCap />,
        highlights: [
            'Strong academic performance in programming courses',
            'Active participation in coding assignments and lab work',
            'Focus on practical, project-based learning',
        ],
    },
    {
        period: '2023 -- 2024',
        degree: 'Academic Projects',
        institution: 'University Coursework',
        description:
            'Developed multiple academic projects demonstrating proficiency in frontend development, API integration, and software architecture.',
        icon: <HiCode />,
        highlights: [
            'E-commerce frontend with advanced features',
            'AI-integrated chat application',
            'Scientific calculator with dual modes',
        ],
    },
    {
        period: '2025 -- 2026',
        degree: 'Final Year Project',
        institution: 'MedStep -- Healthcare Ecosystem',
        description:
            'Designed and developed a comprehensive healthcare management system as a final year project, featuring multi-role dashboards, centralized health records, and modular architecture.',
        icon: <HiLightBulb />,
        highlights: [
            'Multi-role system: Patient, Doctor, Pharmacy',
            'Centralized Universal Health Record (UHR)',
            'Dashboard architecture with clean UI patterns',
        ],
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

function Education() {
    return (
        <section id="education" className="section">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="gradient-text">Education</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    My academic journey and key milestones
                </motion.p>

                <motion.div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '24px',
                        maxWidth: '800px',
                        margin: '0 auto',
                    }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {educationData.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                boxShadow: '0 12px 40px rgba(59, 130, 246, 0.1)',
                            }}
                            style={{
                                padding: '32px',
                                display: 'flex',
                                gap: '24px',
                                cursor: 'default',
                            }}
                        >
                            {/* Icon */}
                            <div
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '14px',
                                    background:
                                        'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    color: 'var(--color-accent-blue)',
                                    flexShrink: 0,
                                }}
                            >
                                {item.icon}
                            </div>

                            <div style={{ flex: 1 }}>
                                <span
                                    style={{
                                        fontSize: '0.8rem',
                                        fontWeight: 600,
                                        color: 'var(--color-accent-purple)',
                                        marginBottom: '4px',
                                        display: 'block',
                                    }}
                                >
                                    {item.period}
                                </span>
                                <h3
                                    style={{
                                        fontSize: '1.15rem',
                                        fontWeight: 700,
                                        marginBottom: '4px',
                                    }}
                                >
                                    {item.degree}
                                </h3>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-accent-blue)',
                                        fontWeight: 500,
                                        marginBottom: '12px',
                                    }}
                                >
                                    {item.institution}
                                </p>
                                <p
                                    style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.7,
                                        marginBottom: '16px',
                                    }}
                                >
                                    {item.description}
                                </p>

                                <ul style={{ paddingLeft: '0' }}>
                                    {item.highlights.map((h, i) => (
                                        <li
                                            key={i}
                                            style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--color-text-secondary)',
                                                marginBottom: '6px',
                                                paddingLeft: '18px',
                                                position: 'relative',
                                            }}
                                        >
                                            <span
                                                style={{
                                                    position: 'absolute',
                                                    left: 0,
                                                    top: '8px',
                                                    width: '6px',
                                                    height: '6px',
                                                    borderRadius: '50%',
                                                    background:
                                                        'linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-purple))',
                                                }}
                                            />
                                            {h}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Education;
