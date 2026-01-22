import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 section-bg-blue overflow-hidden">
            <div className="container mx-auto max-w-4xl">
                <h2 className="section-title text-center">Internship Experience</h2>

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative pl-8 border-l-2 border-primary-100"
                >
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 shadow-[0_0_0_8px_rgba(14,165,233,0.1)]"></div>


                    <div className="glass-card p-8 ml-4">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900">Software Development Intern</h3>
                                <p className="text-primary-600 font-medium">Coastal Seven Technologies Pvt. Ltd.</p>
                            </div>
                            <div className="mt-2 md:mt-0 px-4 py-1 bg-primary-50 rounded-full text-primary-700 text-sm font-semibold">
                                Nov 2025 – Jan 2026
                            </div>
                        </div>

                        <ul className="space-y-3 text-slate-600">
                            <li className="flex gap-3">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>Worked on backend and AI-assisted automation projects aligned with SDLC.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>Designed and implemented AI code review and integration agents.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>Followed coding standards and GitHub workflows.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary-500 mt-1">•</span>
                                <span>Gained experience in debugging, APIs, and automation.</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
