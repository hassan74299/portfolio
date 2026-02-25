import React from 'react';
import { motion } from 'framer-motion';

const frontendSkills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript (Advanced)', level: 92 },
    { name: 'DOM Manipulation', level: 88 },
    { name: 'API Integration', level: 85 },
    { name: 'LocalStorage', level: 87 },
    { name: 'Responsive UI', level: 90 },
];

const learningSkills = [
    { name: 'React.js', level: 55 },
    { name: 'Node.js', level: 40 },
    { name: 'Backend Architecture', level: 35 },
    { name: 'AI Integration', level: 45 },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function SkillBar({ name, level, delay }) {
    return (
        <motion.div
            style={{ marginBottom: '20px' }}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                }}
            >
                <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{name}</span>
                <span
                    style={{
                        fontSize: '0.85rem',
                        color: 'var(--color-accent-blue)',
                        fontWeight: 600,
                    }}
                >
                    {level}%
                </span>
            </div>
            <div className="skill-progress-track">
                <motion.div
                    className="skill-progress-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
                />
            </div>
        </motion.div>
    );
}

function SkillCard({ name, level, index }) {
    return (
        <motion.div
            className="glass-card"
            variants={cardVariants}
            whileHover={{
                y: -8,
                boxShadow: '0 12px 40px rgba(59, 130, 246, 0.15)',
                borderColor: 'rgba(59, 130, 246, 0.3)',
            }}
            style={{
                padding: '20px',
                textAlign: 'center',
                cursor: 'default',
                transition: 'border-color 0.3s',
            }}
        >
            <div
                style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 12px',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--color-accent-blue)',
                }}
            >
                {level}%
            </div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '4px' }}>
                {name}
            </h4>
            <div
                style={{
                    width: '40px',
                    height: '3px',
                    borderRadius: '2px',
                    background: 'linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-purple))',
                    margin: '8px auto 0',
                }}
            />
        </motion.div>
    );
}

function Skills() {
    return (
        <section id="skills" className="section">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    My <span className="gradient-text">Skills</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Technologies and tools I work with
                </motion.p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '60px',
                        alignItems: 'start',
                    }}
                    className="skills-grid"
                >
                    {/* Frontend Skills - Progress Bars */}
                    <div>
                        <motion.h3
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                marginBottom: '28px',
                                color: 'var(--color-accent-blue)',
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            Frontend Skills
                        </motion.h3>
                        {frontendSkills.map((skill, i) => (
                            <SkillBar
                                key={skill.name}
                                name={skill.name}
                                level={skill.level}
                                delay={i * 0.08}
                            />
                        ))}
                    </div>

                    {/* Currently Learning - Cards */}
                    <div>
                        <motion.h3
                            style={{
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                marginBottom: '28px',
                                color: 'var(--color-accent-purple)',
                            }}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                        >
                            Currently Learning
                        </motion.h3>
                        <motion.div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '16px',
                            }}
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {learningSkills.map((skill, i) => (
                                <SkillCard
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                    index={i}
                                />
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
        </section>
    );
}

export default Skills;
