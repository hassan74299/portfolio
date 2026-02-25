import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = 'Name is required';
        if (!form.email.trim()) {
            errs.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            errs.email = 'Please enter a valid email';
        }
        if (!form.message.trim()) errs.message = 'Message is required';
        return errs;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setErrors({});
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" className="section">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Get In <span className="gradient-text">Touch</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Have a project in mind or want to collaborate? Let's connect!
                </motion.p>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '48px',
                        maxWidth: '900px',
                        margin: '0 auto',
                        alignItems: 'start',
                    }}
                    className="contact-grid"
                >
                    {/* Form */}
                    <motion.form
                        className="glass-card"
                        style={{ padding: '32px' }}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ marginBottom: '20px' }}>
                            <label
                                style={{
                                    display: 'block',
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    marginBottom: '8px',
                                    color: 'var(--color-text-secondary)',
                                }}
                            >
                                Your Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="John Doe"
                                className={`form-input ${errors.name ? 'error' : ''}`}
                            />
                            {errors.name && <p className="error-text">{errors.name}</p>}
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label
                                style={{
                                    display: 'block',
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    marginBottom: '8px',
                                    color: 'var(--color-text-secondary)',
                                }}
                            >
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="john@example.com"
                                className={`form-input ${errors.email ? 'error' : ''}`}
                            />
                            {errors.email && <p className="error-text">{errors.email}</p>}
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label
                                style={{
                                    display: 'block',
                                    fontSize: '0.85rem',
                                    fontWeight: 500,
                                    marginBottom: '8px',
                                    color: 'var(--color-text-secondary)',
                                }}
                            >
                                Your Message
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me about your project..."
                                rows={5}
                                className={`form-input ${errors.message ? 'error' : ''}`}
                                style={{ resize: 'vertical' }}
                            />
                            {errors.message && <p className="error-text">{errors.message}</p>}
                        </div>

                        <motion.button
                            type="submit"
                            className="glow-btn"
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            style={{ width: '100%', justifyContent: 'center' }}
                        >
                            <FiSend /> {submitted ? 'Message Sent!' : 'Send Message'}
                        </motion.button>

                        {submitted && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{
                                    textAlign: 'center',
                                    marginTop: '16px',
                                    color: '#10b981',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                }}
                            >
                                Thank you! I'll get back to you soon.
                            </motion.p>
                        )}
                    </motion.form>

                    {/* Info side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }}
                    >
                        <div className="glass-card" style={{ padding: '28px' }}>
                            <h3
                                style={{
                                    fontSize: '1.2rem',
                                    fontWeight: 600,
                                    marginBottom: '12px',
                                }}
                            >
                                Let's Build Something Together
                            </h3>
                            <p
                                style={{
                                    color: 'var(--color-text-secondary)',
                                    fontSize: '0.95rem',
                                    lineHeight: 1.7,
                                }}
                            >
                                I am currently looking for frontend internship and software
                                engineering opportunities. Whether you have a project idea,
                                a role opening, or just want to say hello -- I'd love to hear
                                from you.
                            </p>
                        </div>

                        <div className="glass-card" style={{ padding: '28px' }}>
                            <h3
                                style={{
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    marginBottom: '16px',
                                }}
                            >
                                Connect With Me
                            </h3>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <motion.a
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '14px',
                                        background: 'rgba(148, 163, 184, 0.08)',
                                        border: '1px solid var(--color-border-glass)',
                                        fontSize: '1.3rem',
                                        color: 'var(--color-text-primary)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                    }}
                                >
                                    <FiGithub />
                                </motion.a>
                                <motion.a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -4, scale: 1.1 }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '52px',
                                        height: '52px',
                                        borderRadius: '14px',
                                        background: 'rgba(59, 130, 246, 0.1)',
                                        border: '1px solid rgba(59, 130, 246, 0.2)',
                                        fontSize: '1.3rem',
                                        color: 'var(--color-accent-blue)',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s',
                                    }}
                                >
                                    <FiLinkedin />
                                </motion.a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
        </section>
    );
}

export default Contact;
