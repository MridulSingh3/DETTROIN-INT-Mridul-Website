import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, GraduationCap, MapPin, ChevronRight, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Top Banner */}
            <div className="bg-slate-950 text-slate-400 text-xs border-b border-slate-800/80 hidden sm:block relative z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors cursor-pointer">
                            <MapPin className="w-3.5 h-3.5 text-amber-500" /> Agra Highway, Aligarh - 202001, UP
                        </span>
                        <span className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
                            <Phone className="w-3.5 h-3.5 text-amber-500" /> +91 8006409344
                        </span>
                    </div>
                    <div className="flex items-center gap-4 font-medium">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px]">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" /> Admissions Open 2026–27
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-amber-500/5' : 'bg-slate-950/60 backdrop-blur-md border-b border-white/5'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Animated Brand Logo */}
                        <Link to="/" className="flex items-center gap-3 group">
                            <motion.div
                                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                                className="relative p-2.5 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl shadow-lg shadow-amber-500/20"
                            >
                                <GraduationCap className="w-6 h-6 text-slate-950" />
                            </motion.div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-black tracking-wider text-white leading-none font-serif">PAVNA</span>
                                <span className="text-[10px] font-bold text-amber-400 tracking-widest uppercase mt-1">CBSE School • Aligarh</span>
                            </div>
                        </Link>

                        {/* Nav Pill Menu with Motion Indicator */}
                        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-slate-800 backdrop-blur-md relative">
                            {navLinks.map((link) => {
                                const active = isActive(link.path);
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="relative px-5 py-2 text-sm font-medium transition-colors duration-300 text-slate-300 hover:text-white"
                                    >
                                        {active && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-md shadow-amber-500/20"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                        <span className={`relative z-10 ${active ? 'text-slate-950 font-bold' : ''}`}>
                                            {link.name}
                                        </span>
                                    </Link>
                                );
                            })}
                        </nav>

                        {/* CTA Button */}
                        <div className="hidden md:flex items-center">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    to="/contact"
                                    className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 border border-amber-500/40 text-amber-300 font-semibold text-xs tracking-wider uppercase shadow-lg shadow-amber-500/5 hover:border-amber-400"
                                >
                                    <span>Apply Now</span>
                                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </Link>
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300"
                            >
                                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Animated Drawer */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800 px-4 pt-3 pb-6 space-y-2"
                        >
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium ${isActive(link.path)
                                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                                            : 'text-slate-300 hover:bg-slate-900'
                                        }`}
                                >
                                    {link.name}
                                    <ChevronRight className="w-4 h-4 opacity-50" />
                                </Link>
                            ))}
                            <Link
                                to="/contact"
                                onClick={() => setIsOpen(false)}
                                className="flex items-center justify-center gap-2 w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20"
                            >
                                <Phone className="w-4 h-4" /> Apply For Admission
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}