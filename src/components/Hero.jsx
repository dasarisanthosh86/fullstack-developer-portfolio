import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden bg-transparent">
            {/* Decorative Elements */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-200/20 rounded-full mix-blend-multiply filter blur-[120px] opacity-70 animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-300/20 rounded-full mix-blend-multiply filter blur-[150px] opacity-60"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-100/10 rounded-full mix-blend-multiply filter blur-[180px] opacity-40"></div>

            <div className="container mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
                        Hi, I'm <span className="gradient-text">Santhosh Dasari</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 mb-6">
                        Full-Stack Developer
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-slate-500 mb-10 leading-relaxed">
                        Passionate Web Developer specialized in modern web technologies,
                        building professional, clean, and futuristic digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://www.linkedin.com/in/dasari-santhosh-75b0b9377/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary cursor-pointer text-center"
                        >
                            Hire Me
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline cursor-pointer text-center"
                        >
                            Download CV
                        </a>
                        <a
                            href="https://wa.me/918688153566"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline cursor-pointer text-center"
                        >
                            WhatsApp
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
