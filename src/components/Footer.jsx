import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            style={{
                borderTop: '1px solid var(--color-border-glass)',
                padding: '40px 0',
                position: 'relative',
            }}
        >
            <div
                className="section-container"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '20px',
                }}
            >
                <div>
                    <motion.a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                        }}
                        className="gradient-text"
                        style={{
                            fontSize: '1.3rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-heading)',
                            cursor: 'pointer',
                        }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Hassan Ali Shah.
                    </motion.a>
                    <p
                        style={{
                            fontSize: '0.85rem',
                            color: 'var(--color-text-secondary)',
                            marginTop: '6px',
                        }}
                    >
                        &copy; {new Date().getFullYear()} Hassan Ali Shah. All rights reserved.
                    </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--color-text-secondary)',
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                        }}
                    >
                        <FiGithub />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -3 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--color-text-secondary)',
                            cursor: 'pointer',
                            transition: 'color 0.3s',
                        }}
                    >
                        <FiLinkedin />
                    </motion.a>

                    {/* Back to top */}
                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ y: -3, scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '10px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            border: '1px solid rgba(59, 130, 246, 0.2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-accent-blue)',
                            cursor: 'pointer',
                            fontSize: '1.1rem',
                            marginLeft: '8px',
                        }}
                        aria-label="Back to top"
                    >
                        <FiArrowUp />
                    </motion.button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
