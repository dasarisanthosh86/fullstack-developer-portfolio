import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'About', to: 'summary' },
        { name: 'Experience', to: 'experience' },
        { name: 'Skills', to: 'skills' },
        { name: 'Projects', to: 'projects' },
        { name: 'Education', to: 'education' },
        { name: 'Contact', to: 'contact' },
        
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg py-3 shadow-sm border-b border-primary-100/30' : 'bg-transparent py-5'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="hero" smooth={true} className="text-2xl font-bold gradient-text cursor-pointer">
                    SD.
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        link.isExternal ? (
                            <a
                                key={link.name}
                                href={link.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-primary-600 font-medium transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="text-slate-600 hover:text-primary-600 font-medium transition-colors cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-slate-100 py-4 px-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        link.isExternal ? (
                            <a
                                key={link.name}
                                href={link.to}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-slate-600 hover:text-primary-600 font-medium transition-colors cursor-pointer"
                            >
                                {link.name}
                            </a>
                        ) : (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-slate-600 hover:text-primary-600 font-medium transition-colors cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        )
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
