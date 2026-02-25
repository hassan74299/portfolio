import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';

function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollUp}
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    aria-label="Scroll to top"
                    style={{
                        position: 'fixed',
                        bottom: '32px',
                        right: '32px',
                        zIndex: 999,
                        width: '50px',
                        height: '50px',
                        borderRadius: '14px',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        background:
                            'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(139, 92, 246, 0.15))',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        color: 'var(--color-accent-blue)',
                        fontSize: '1.3rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2)',
                    }}
                >
                    <FiArrowUp />
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export default ScrollToTop;
