import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database, Cpu, Settings } from 'lucide-react';

const Skills = () => {
    const skillGroups = [
        {
            title: "Languages",
            icon: <Code2 size={24} />,
            skills: ["Java", "Python", "JavaScript (ES6+)"]
        },
        {
            title: "Backend",
            icon: <Server size={24} />,
            skills: ["Spring Boot", "FastAPI", "Node.js (Basic)", "REST APIs"]
        },
        {
            title: "Frontend",
            icon: <Layout size={24} />,
            skills: ["HTML5", "CSS3", "Bootstrap 5", "Responsive Design", "React (Learning)"]
        },
        {
            title: "Database",
            icon: <Database size={24} />,
            skills: ["MySQL (CRUD, Joins)", "Query Optimization"]
        },
        {
            title: "AI & Tools",
            icon: <Cpu size={24} />,
            skills: ["OpenAI APIs", "Git & GitHub", "VS Code"]
        },
        {
            title: "Practices",
            icon: <Settings size={24} />,
            skills: ["SDLC", "Debugging", "Code Review", "CI/CD Basics"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-transparent relative overflow-hidden">
            <div className="container mx-auto">
                <h2 className="section-title text-center">Technical Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillGroups.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col items-center text-center hover:shadow-xl transition-all border-white/50 group"
                        >
                            <div className="p-4 bg-primary-50 rounded-2xl mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-sm shadow-primary-100">
                                {group.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">{group.title}</h3>
                            <div className="flex flex-wrap justify-center gap-2">
                                {group.skills.map((skill, sIndex) => (
                                    <span key={sIndex} className="px-3 py-1 bg-white border border-slate-100 rounded-full text-sm text-slate-600 shadow-sm">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
