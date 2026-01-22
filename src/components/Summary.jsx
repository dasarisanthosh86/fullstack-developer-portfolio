import React from 'react';
import { motion } from 'framer-motion';

const Summary = () => {
    return (
        <section id="summary" className="py-24 px-6 section-bg-blue">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Professional Summary</h2>
                    <div className="glass-card p-8 md:p-12 text-lg text-slate-600 leading-relaxed shadow-lg border-primary-50">
                        <p>
                            Motivated and detail-oriented <span className="font-semibold text-primary-700">Web Developer</span> with strong foundations in HTML5, CSS3, JavaScript, Bootstrap, and MySQL.
                            Proficient in building responsive, user-friendly web applications and eager to grow expertise in <span className="text-primary-600 font-medium">Spring Boot</span> and full-stack development.
                            Adept at problem-solving, collaborating in teams, and quickly learning new tools to deliver high-quality digital solutions.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Summary;
