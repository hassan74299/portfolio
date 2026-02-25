import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiSun, HiMoon } from 'react-icons/hi';

function ThemeToggle() {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('portfolio-theme');
        return saved ? saved === 'dark' : true; // default dark
    });

    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('portfolio-theme', 'dark');
        } else {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('portfolio-theme', 'light');
        }
    }, [dark]);

    return (
        <motion.button
            onClick={() => setDark((d) => !d)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9, rotate: 180 }}
            transition={{ duration: 0.3 }}
            aria-label="Toggle theme"
            style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                border: '1px solid var(--color-border-glass)',
                background: 'rgba(148, 163, 184, 0.06)',
                color: dark ? '#fbbf24' : '#3b82f6',
                fontSize: '1.2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'color 0.3s, background 0.3s',
            }}
        >
            {dark ? <HiSun /> : <HiMoon />}
        </motion.button>
    );
}

export default ThemeToggle;
