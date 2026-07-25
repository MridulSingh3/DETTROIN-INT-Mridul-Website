import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Phone } from 'lucide-react';
import logo from "../assets/Link-Logo-→-Pavna-School-Logo.webp";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="sticky top-0 z-50 bg-navy-950/85 backdrop-blur-md border-b border-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <div className="p-2 bg-gold-500 text-navy-950 rounded-xl font-bold">
                            {/* Line 25 fixed below: changed GradCap to GraduationCap */}
                            <GraduationCap className="w-7 h-7" />
                        </div>
                        <div>
                            <span className="text-xl font-extrabold tracking-wider text-white block leading-tight">PAVNA</span>
                            <span className="text-xs text-gold-400 font-medium tracking-widest block uppercase">CBSE School Aligarh</span>
                        </div>
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-semibold transition-colors duration-200 hover:text-gold-400 ${isActive(link.path) ? 'text-gold-400 border-b-2 border-gold-400 py-1' : 'text-slate-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-navy-950 font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all transform hover:-translate-y-0.5 shadow-md shadow-gold-500/20"
                        >
                            <Phone className="w-4 h-4" /> Apply Now
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden bg-navy-900 border-b border-slate-800 px-4 pt-2 pb-6 space-y-3">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? 'bg-gold-500/10 text-gold-400' : 'text-slate-300 hover:bg-slate-800'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsOpen(false)}
                        className="block text-center bg-gold-500 text-navy-950 font-bold px-4 py-3 rounded-lg text-sm"
                    >
                        Apply Now
                    </Link>
                </div>
            )}
        </nav>
    );
}