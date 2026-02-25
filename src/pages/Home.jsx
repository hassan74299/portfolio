import React from 'react';
import Hero from '../components/Hero';
import StatsCounter from '../components/StatsCounter';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';
import Education from '../components/Education';
import Contact from '../components/Contact';
import ScrollToTop from '../components/ScrollToTop';

function Home() {
    return (
        <main>
            <Hero />
            <StatsCounter />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Certifications />
            <Testimonials />
            <Education />
            <Contact />
            <ScrollToTop />
        </main>
    );
}

export default Home;
