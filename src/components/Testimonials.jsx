import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageSquare, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const testimonials = [
    {
        name: 'Prof. Ahmad Khan',
        role: 'University Supervisor',
        text: 'Hassan demonstrates exceptional problem-solving skills and a deep understanding of frontend architecture. His MedStep project showcased professional-grade modular design.',
        gradient: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    },
    {
        name: 'Ali Raza',
        role: 'Team Member — MedStep Project',
        text: 'Working with Hassan was a great experience. He took the lead on the frontend, building reusable components and ensuring a consistent UI across all modules.',
        gradient: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
    },
    {
        name: 'Sara Malik',
        role: 'Classmate & Study Partner',
        text: 'Hassan has a talent for making complex things simple. His JavaScript knowledge is impressive, and he is always willing to help others understand difficult concepts.',
        gradient: 'linear-gradient(135deg, #06b6d4, #10b981)',
    },
    {
        name: 'Usman Tariq',
        role: 'Freelance Client',
        text: 'Hassan delivered a polished, responsive e-commerce frontend that exceeded my expectations. Great communication and attention to detail throughout the project.',
        gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)',
    },
];

function Testimonials() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        const timer = setInterval(() => {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (index) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

    const prev = () => {
        setDirection(-1);
        setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    };

    const next = () => {
        setDirection(1);
        setCurrent((c) => (c + 1) % testimonials.length);
    };

    const variants = {
        enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
        center: { x: 0, opacity: 1, scale: 1 },
        exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
    };

    const t = testimonials[current];

    return (
        <section id="testimonials" className="section">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    What People <span className="gradient-text">Say</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Feedback from people I've worked and studied with
                </motion.p>

                <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
                    {/* Navigation arrows */}
                    <motion.button
                        onClick={prev}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            position: 'absolute',
                            left: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            color: 'var(--color-accent-blue)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            zIndex: 2,
                        }}
                        className="testimonial-nav-btn"
                    >
                        <FiChevronLeft />
                    </motion.button>
                    <motion.button
                        onClick={next}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            position: 'absolute',
                            right: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            color: 'var(--color-accent-blue)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            fontSize: '1.2rem',
                            zIndex: 2,
                        }}
                        className="testimonial-nav-btn"
                    >
                        <FiChevronRight />
                    </motion.button>

                    {/* Card */}
                    <div style={{ overflow: 'hidden', minHeight: '260px' }}>
                        <AnimatePresence mode="wait" custom={direction}>
                            <motion.div
                                key={current}
                                custom={direction}
                                variants={variants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.45, ease: 'easeInOut' }}
                                className="glass-card"
                                style={{ padding: '40px', textAlign: 'center' }}
                            >
                                {/* Quote icon */}
                                <div
                                    style={{
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '14px',
                                        background: t.gradient,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto 20px',
                                        fontSize: '1.3rem',
                                        color: '#fff',
                                    }}
                                >
                                    <FiMessageSquare />
                                </div>

                                <p
                                    style={{
                                        fontSize: '1.05rem',
                                        color: 'var(--color-text-secondary)',
                                        lineHeight: 1.8,
                                        marginBottom: '24px',
                                        fontStyle: 'italic',
                                    }}
                                >
                                    "{t.text}"
                                </p>

                                <div
                                    style={{
                                        width: '40px',
                                        height: '3px',
                                        borderRadius: '2px',
                                        background: t.gradient,
                                        margin: '0 auto 16px',
                                    }}
                                />

                                <h4
                                    style={{
                                        fontSize: '1rem',
                                        fontWeight: 600,
                                        marginBottom: '4px',
                                    }}
                                >
                                    {t.name}
                                </h4>
                                <span
                                    style={{
                                        fontSize: '0.85rem',
                                        color: 'var(--color-accent-blue)',
                                        fontWeight: 500,
                                    }}
                                >
                                    {t.role}
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dots */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            gap: '10px',
                            marginTop: '24px',
                        }}
                    >
                        {testimonials.map((_, i) => (
                            <motion.button
                                key={i}
                                onClick={() => goTo(i)}
                                whileHover={{ scale: 1.3 }}
                                style={{
                                    width: i === current ? '28px' : '10px',
                                    height: '10px',
                                    borderRadius: '5px',
                                    background:
                                        i === current
                                            ? 'linear-gradient(90deg, var(--color-accent-blue), var(--color-accent-purple))'
                                            : 'rgba(148, 163, 184, 0.2)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    padding: 0,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .testimonial-nav-btn {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default Testimonials;
