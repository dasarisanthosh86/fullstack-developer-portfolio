import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Bot, Code, ShoppingCart, CreditCard, Layout } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "AI Code Review Agent",
            description: "Automated repository analysis with intelligent fix suggestions and detailed reporting.",
            tech: ["Python", "FastAPI", "GitHub APIs", "AI Models"],
            icon: <Bot size={24} className="text-primary-600" />,
            link: "https://github.com/dasarisanthosh86/code_review_agent07.git"
        },
        {
            title: "AI SDLC Integration Agent",
            description: "Automated repository cloning, analysis, and reporting to improve development transparency.",
            tech: ["Python", "FastAPI", "GitHub", "CI/CD"],
            icon: <Code size={24} className="text-slate-600" />,
            link: "https://github.com/dasarisanthosh86/intigration.git"
        },
        {
            title: "Gold Finance & Shopping",
            description: "Interactive UI and optimized UX for financial and shopping services with Spring Boot backend.",
            tech: ["Spring Boot", "HTML", "CSS", "JavaScript", "Bootstrap"],
            icon: <CreditCard size={24} className="text-yellow-600" />,
            link: "https://github.com/dasarisanthosh86/project-Gold.git"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 section-bg-blue">
            <div className="container mx-auto">
                <h2 className="section-title text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="glass-card group overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500 border-white/40"
                        >
                            <div className="p-8 flex flex-col h-full">
                                <div className="mb-6 flex items-center justify-between">
                                    <div className="p-3 bg-white rounded-xl shadow-sm group-hover:scale-110 transition-transform duration-300">
                                        {project.icon}
                                    </div>
                                    <div className="flex gap-4">
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary-600 transition-colors">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-500 mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-100">
                                    {project.tech.map((tag, tIndex) => (
                                        <span key={tIndex} className="text-[12px] font-bold uppercase tracking-wider text-slate-400">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
