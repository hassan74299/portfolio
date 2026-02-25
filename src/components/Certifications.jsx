import React from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBadgeCheck, HiStar, HiCode } from 'react-icons/hi';

const certifications = [
    {
        title: 'JavaScript Algorithms & Data Structures',
        issuer: 'freeCodeCamp',
        date: '2023',
        icon: <HiCode />,
        gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
        link: '#',
    },
    {
        title: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        date: '2023',
        icon: <HiAcademicCap />,
        gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
        link: '#',
    },
    {
        title: 'Frontend Development',
        issuer: 'HackerRank',
        date: '2024',
        icon: <HiBadgeCheck />,
        gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
        link: '#',
    },
    {
        title: 'Problem Solving (Intermediate)',
        issuer: 'HackerRank',
        date: '2024',
        icon: <HiStar />,
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
        link: '#',
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

function Certifications() {
    return (
        <section id="certifications" className="section">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Certifications & <span className="gradient-text">Achievements</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Recognized skills and continuous learning milestones
                </motion.p>

                <motion.div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '24px',
                        maxWidth: '900px',
                        margin: '0 auto',
                    }}
                    className="cert-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                boxShadow: '0 16px 50px rgba(59, 130, 246, 0.12)',
                                borderColor: 'rgba(59, 130, 246, 0.3)',
                            }}
                            style={{
                                padding: '28px',
                                cursor: 'default',
                                position: 'relative',
                                overflow: 'hidden',
                                transition: 'border-color 0.3s',
                            }}
                        >
                            {/* Gradient accent top */}
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: '3px',
                                    background: cert.gradient,
                                }}
                            />

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                                {/* Icon */}
                                <div
                                    style={{
                                        flexShrink: 0,
                                        width: '48px',
                                        height: '48px',
                                        borderRadius: '12px',
                                        background: cert.gradient,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '1.3rem',
                                        color: '#fff',
                                    }}
                                >
                                    {cert.icon}
                                </div>

                                <div style={{ flex: 1 }}>
                                    <h3
                                        style={{
                                            fontSize: '1.05rem',
                                            fontWeight: 700,
                                            marginBottom: '6px',
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {cert.title}
                                    </h3>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            flexWrap: 'wrap',
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontSize: '0.85rem',
                                                color: 'var(--color-accent-blue)',
                                                fontWeight: 500,
                                            }}
                                        >
                                            {cert.issuer}
                                        </span>
                                        <span
                                            style={{
                                                fontSize: '0.75rem',
                                                color: 'var(--color-text-secondary)',
                                                padding: '2px 10px',
                                                background: 'rgba(148, 163, 184, 0.08)',
                                                borderRadius: '12px',
                                            }}
                                        >
                                            {cert.date}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {cert.link && cert.link !== '#' && (
                                <motion.a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.03 }}
                                    style={{
                                        display: 'inline-block',
                                        marginTop: '16px',
                                        fontSize: '0.8rem',
                                        fontWeight: 500,
                                        color: 'var(--color-accent-blue)',
                                        borderBottom: '1px solid rgba(59, 130, 246, 0.3)',
                                        paddingBottom: '2px',
                                    }}
                                >
                                    View Certificate →
                                </motion.a>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .cert-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default Certifications;
