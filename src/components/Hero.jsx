import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiDownload, HiMail } from 'react-icons/hi';
const profileImg = '/image copy.png';

const roles = ['Frontend Developer', 'React Enthusiast', 'AI Explorer', 'Problem Solver'];

function Hero() {
    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    // Typing animation
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const currentRole = roles[roleIndex];

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (charIndex < currentRole.length) {
                    setCharIndex((c) => c + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (charIndex > 0) {
                    setCharIndex((c) => c - 1);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((r) => (r + 1) % roles.length);
                }
            }
        }, isDeleting ? 40 : 80);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentRole]);

    return (
        <section
            id="home"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Animated background */}
            <div className="hero-bg" />

            <div
                className="section-container"
                style={{
                    position: 'relative',
                    zIndex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '60px',
                    flexWrap: 'wrap',
                    width: '100%',
                    paddingTop: '80px',
                }}
            >
                {/* Left content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    style={{ flex: '1 1 500px', maxWidth: '640px' }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-block',
                            padding: '6px 16px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            borderRadius: '20px',
                            fontSize: '0.85rem',
                            color: 'var(--color-accent-blue)',
                            fontWeight: 500,
                            marginBottom: '20px',
                        }}
                    >
                        {currentRole.substring(0, charIndex)}
                        <span style={{
                            borderRight: '2px solid var(--color-accent-blue)',
                            animation: 'blink-cursor 0.8s step-end infinite',
                            marginLeft: '2px',
                        }} />
                    </motion.span>

                    <h1
                        style={{
                            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                            fontWeight: 800,
                            lineHeight: 1.15,
                            marginBottom: '20px',
                        }}
                    >
                        <span className="gradient-text">Frontend Developer</span>{' '}
                        Crafting Scalable & Intelligent Web Applications
                    </h1>

                    <p
                        style={{
                            fontSize: '1.05rem',
                            color: 'var(--color-text-secondary)',
                            lineHeight: 1.8,
                            marginBottom: '32px',
                            maxWidth: '540px',
                        }}
                    >
                        Hi, I'm Hassan Ali Shah -- a passionate JavaScript developer focused on building
                        scalable UI systems, integrating powerful APIs, and crafting
                        AI-driven applications that solve real-world problems.
                    </p>

                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        <motion.button
                            className="glow-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollTo('projects')}
                        >
                            <HiArrowDown /> View Projects
                        </motion.button>
                        <motion.button
                            className="glow-btn glow-btn-outline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = '/Hassan Ali Shah-1.pdf';
                                link.download = 'Hassan Ali Shah - Resume.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            <HiDownload /> Download Resume
                        </motion.button>
                        <motion.button
                            className="glow-btn glow-btn-outline"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => scrollTo('contact')}
                        >
                            <HiMail /> Contact Me
                        </motion.button>
                    </div>
                </motion.div>

                {/* Right - profile photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    style={{
                        flex: '0 0 auto',
                        display: 'flex',
                        justifyContent: 'center',
                    }}
                >
                    <motion.div
                        className="profile-glow-wrapper"
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        <img
                            src={profileImg}
                            alt="Hassan Ali Shah - Frontend Developer"
                            className="profile-img"
                            style={{ width: '280px', height: '280px' }}
                        />
                    </motion.div>
                </motion.div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          #home .section-container {
            flex-direction: column-reverse !important;
            text-align: center;
            gap: 40px !important;
            padding-top: 100px !important;
          }
          #home .section-container > div:first-child {
            align-items: center;
          }
          #home .section-container > div:first-child > div {
            justify-content: center !important;
          }
          .profile-img {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
        </section>
    );
}

export default Hero;
