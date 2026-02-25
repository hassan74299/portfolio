import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
];

function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);

            const sections = navLinks.map((l) => l.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 120) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="navbar"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: '0 24px',
                    height: '72px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    background: scrolled ? 'rgba(10, 14, 26, 0.85)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(16px)' : 'none',
                    WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(148, 163, 184, 0.08)' : '1px solid transparent',
                    transition: 'all 0.3s ease',
                }}
            >
                <motion.a
                    href="#home"
                    onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                    className="gradient-text"
                    style={{
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        fontFamily: 'var(--font-heading)',
                        cursor: 'pointer',
                    }}
                    whileHover={{ scale: 1.05 }}
                >
                    Hassan Ali Shah.
                </motion.a>

                {/* Desktop links */}
                <ul
                    style={{
                        display: 'flex',
                        gap: '8px',
                        alignItems: 'center',
                    }}
                    className="nav-desktop"
                >
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <motion.a
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                whileHover={{ y: -2 }}
                                style={{
                                    padding: '8px 16px',
                                    borderRadius: '8px',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    cursor: 'pointer',
                                    color:
                                        activeSection === link.href.replace('#', '')
                                            ? '#3b82f6'
                                            : 'var(--color-text-secondary)',
                                    background:
                                        activeSection === link.href.replace('#', '')
                                            ? 'rgba(59, 130, 246, 0.1)'
                                            : 'transparent',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {link.name}
                            </motion.a>
                        </li>
                    ))}
                </ul>

                {/* Theme toggle - desktop */}
                <div className="nav-desktop" style={{ marginLeft: '-4px' }}>
                    <ThemeToggle />
                </div>

                {/* Mobile toggle */}
                <button
                    className="nav-mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle mobile menu"
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-text-primary)',
                        fontSize: '1.6rem',
                        cursor: 'pointer',
                    }}
                >
                    {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '280px',
                            background: 'rgba(10, 14, 26, 0.95)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            paddingTop: '100px',
                            paddingLeft: '32px',
                            gap: '8px',
                            borderLeft: '1px solid rgba(148, 163, 184, 0.1)',
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.08 }}
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 500,
                                    padding: '12px 0',
                                    color:
                                        activeSection === link.href.replace('#', '')
                                            ? '#3b82f6'
                                            : 'var(--color-text-secondary)',
                                    transition: 'color 0.3s ease',
                                    cursor: 'pointer',
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileOpen(false)}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(0,0,0,0.5)',
                            zIndex: 998,
                        }}
                    />
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
        </>
    );
}

export default Navbar;
