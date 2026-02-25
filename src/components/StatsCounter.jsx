import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 4, suffix: '+', label: 'Projects Completed' },
    { value: 7, suffix: '+', label: 'Technologies' },
    { value: 3, suffix: '+', label: 'Years Coding' },
    { value: 500, suffix: '+', label: 'GitHub Contributions' },
];

function AnimatedNumber({ value, suffix, inView }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const duration = 2000;
        const step = Math.max(1, Math.floor(value / (duration / 30)));
        const timer = setInterval(() => {
            start += step;
            if (start >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 30);
        return () => clearInterval(timer);
    }, [inView, value]);

    return (
        <span>
            {count}
            {suffix}
        </span>
    );
}

function StatsCounter() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section
            ref={ref}
            style={{
                padding: '60px 0',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Gradient bg strip */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(135deg, rgba(59, 130, 246, 0.06), rgba(139, 92, 246, 0.06), rgba(6, 182, 212, 0.06))',
                    zIndex: 0,
                }}
            />

            <div
                className="section-container"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '24px',
                    textAlign: 'center',
                }}
            >
                {stats.map((stat, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="glass-card"
                        style={{
                            padding: '32px 20px',
                        }}
                    >
                        <div
                            style={{
                                fontSize: '2.5rem',
                                fontWeight: 800,
                                fontFamily: 'var(--font-heading)',
                                background:
                                    'linear-gradient(135deg, var(--color-accent-blue), var(--color-accent-purple))',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                                marginBottom: '8px',
                                lineHeight: 1.1,
                            }}
                        >
                            <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                        </div>
                        <span
                            style={{
                                fontSize: '0.9rem',
                                color: 'var(--color-text-secondary)',
                                fontWeight: 500,
                            }}
                        >
                            {stat.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .section-container {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 480px) {
                    .section-container {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default StatsCounter;
