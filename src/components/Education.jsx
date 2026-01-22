import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
    const education = [
        {
            degree: "MCA – Master of Computer Applications",
            period: "2023–2025",
            school: "Acharya Nagarjuna University, TJPS College (PG)"
        },
        {
            degree: "BSc – Bachelor of Science",
            period: "2020–2023",
            school: "Acharya Nagarjuna University, TJPS College (Degree)"
        }
    ];

    const certifications = [
        "Front-End Web Development (HTML5, CSS3, Bootstrap, JavaScript)",
        "MySQL Fundamentals"
    ];

    const strengths = [
        "Problem-solving", "Communication", "Learning agility", "Team collaboration"
    ];

    return (
        <section id="education" className="py-24 px-6 section-bg-blue">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Education */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <GraduationCap className="text-primary-600" size={32} />
                            <h2 className="text-3xl font-bold text-slate-900">Education</h2>
                        </div>

                        <div className="space-y-8">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-6 border-l-2 border-slate-100"
                                >
                                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-primary-600"></div>
                                    <h3 className="text-xl font-bold text-slate-900">{edu.degree}</h3>
                                    <p className="text-primary-600 font-medium mb-1">{edu.period}</p>
                                    <p className="text-slate-500">{edu.school}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications & Strengths */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <Award className="text-primary-600" size={32} />
                            <h2 className="text-3xl font-bold text-slate-900">Certifications</h2>
                        </div>

                        <div className="space-y-4 mb-12">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-start gap-3"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-2 shrink-0"></div>
                                    <p className="text-slate-700 font-medium">{cert}</p>
                                </motion.div>
                            ))}
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-6">Key Strengths</h3>
                        <div className="flex flex-wrap gap-2">
                            {strengths.map((strength, index) => (
                                <span key={index} className="px-4 py-2 bg-primary-50 text-primary-700 rounded-lg font-medium border border-primary-100">
                                    {strength}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
