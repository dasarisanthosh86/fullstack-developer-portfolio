import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MessageCircle } from 'lucide-react';

const Contact = () => {
    const contactInfo = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            value: "dasarisanthosh8688@gmail.com",
            link: "mailto:dasarisanthosh8688@gmail.com"
        },
        {
            icon: <MessageCircle size={24} />,
            label: "WhatsApp",
            value: "Chat with me",
            link: "https://wa.me/918688153566"
        }
    ];

    const socialLinks = [
        {
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/dasari-santhosh-75b0b9377/"
        },
        {
            icon: <Github size={24} />,
            label: "GitHub",
            link: "https://github.com/dasarisanthosh86"
        }
    ];

    return (
        <section id="contact" className="py-24 px-6 bg-transparent">
            <div className="container mx-auto max-w-5xl">
                <h2 className="section-title text-center">Get In Touch</h2>
                <p className="text-center text-slate-500 mb-12 max-w-xl mx-auto">
                    Currently open to frontend and backend roles. Feel free to reach out via any of the platforms below!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {contactInfo.map((info, index) => (
                        <motion.a
                            key={index}
                            href={info.link}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass-card p-8 flex flex-col items-center text-center group hover:border-primary-300 transition-all border-white"
                        >
                            <div className="p-4 bg-primary-50 rounded-2xl mb-4 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                                {info.icon}
                            </div>
                            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">{info.label}</h3>
                            <p className="text-xl font-bold text-slate-900">{info.value}</p>
                        </motion.a>
                    ))}
                </div>

                <div className="flex justify-center gap-6">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="w-14 h-14 flex items-center justify-center bg-white rounded-full shadow-sm text-slate-600 hover:text-primary-600 hover:shadow-md transition-all border border-slate-100"
                            title={social.label}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
