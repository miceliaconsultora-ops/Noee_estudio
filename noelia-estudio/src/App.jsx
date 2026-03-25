import React from 'react';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import ProblemSolution from './components/ProblemSolution';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import FAQ from './components/FAQ';
import CTA from './components/CTA';

function App() {
    return (
        <div className="font-sans text-primary bg-background selection:bg-secondary/30 selection:text-primary min-h-screen flex flex-col pt-16">

            {/* Navbar Minimalista Fijo */}
            <nav className="fixed top-0 left-0 w-full bg-background/90 backdrop-blur-md z-50 border-b border-primary/5 transition-all duration-300">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="#" className="flex items-center">
                        <img src="/logo/IMG_8370.PNG" alt="NOELIA ESCAMEZ" className="h-9 md:h-12 object-contain drop-shadow-sm" />
                    </a>
                    <div className="hidden md:flex gap-8">
                        <a href="#portfolio" className="nav-link">Portfolio</a>
                        <a href="#como-funciona" className="nav-link">Proceso</a>
                        <a href="#testimonios" className="nav-link">Clientes</a>
                        <a href="#servicios" className="nav-link">Servicios</a>
                        <a href="#faq" className="nav-link">FAQ</a>
                    </div>
                    <a href="https://wa.me/5491159309893" target="_blank" rel="noopener noreferrer" className="btn-primary px-6 py-2 text-xs">Reservar</a>
                </div>
            </nav>

            <main className="flex-grow">
                <Hero />
                <ProblemSolution />
                <Timeline />
                <Testimonials />
                <Services />
                <Portfolio />
                <FAQ />
            </main>

            <CTA />

        </div>
    );
}

export default App;
