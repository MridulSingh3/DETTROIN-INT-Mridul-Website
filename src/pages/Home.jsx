import React from 'react';
import { ArrowRight, Sparkles, BookOpen, ShieldCheck, Cpu, Trophy, Users, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="bg-slate-950 text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-12 items-center relative z-10">

                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-medium">
                            <Sparkles className="w-4 h-4" /> Admissions Open 2026–27
                        </div>

                        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight">
                            Nurturing Leaders Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-200">Holistic Education</span>
                        </h1>

                        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                            Formerly DPS Aligarh, Pavna School brings 28+ years of legacy combining futuristic learning (AI & Robotics) with character building and world-class athletic facilities.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold transition shadow-lg shadow-gold-500/20">
                                Apply Now <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold transition">
                                <BookOpen className="w-5 h-5 text-gold-400" /> Learn More
                            </Link>
                        </div>

                        {/* Quick Metrics */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                            <div>
                                <div className="text-3xl font-extrabold text-white">28+</div>
                                <div className="text-xs text-slate-400 font-medium">Years Legacy</div>
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-gold-400">1:12</div>
                                <div className="text-xs text-slate-400 font-medium">Teacher Ratio</div>
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-white">30k+</div>
                                <div className="text-xs text-slate-400 font-medium">Learners Base</div>
                            </div>
                        </div>
                    </div>

                    {/* Inquiry Widget */}
                    <div className="lg:col-span-5">
                        <div className="p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
                            <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
                                <ShieldCheck className="text-gold-400 w-5 h-5" /> Instant Admission Callback
                            </h3>
                            <p className="text-xs text-slate-400 mb-6">Submit details below to receive syllabus and callback.</p>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Parent's Full Name" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 text-sm" />
                                <input type="tel" placeholder="Mobile Number (+91)" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 text-sm" />
                                <select className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-sm focus:outline-none focus:border-gold-500">
                                    <option value="">Select Grade</option>
                                    <option value="Pre-Primary">Pre-Primary (PG - UKG)</option>
                                    <option value="Primary">Primary (Class 1 - 5)</option>
                                    <option value="Secondary">Secondary (Class 6 - 10)</option>
                                    <option value="Senior Secondary">Senior Secondary (Class 11 - 12)</option>
                                </select>
                                <button type="submit" className="w-full py-3.5 rounded-lg bg-gradient-to-r from-gold-500 to-amber-600 text-navy-950 font-bold text-sm hover:brightness-110 transition">
                                    Request Information
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </section>

            {/* Pillars Section */}
            <section className="py-20 bg-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Offering Global-Standard Learning</h2>
                        <p className="mt-4 text-slate-400">Pioneering standard curricula with futuristic technological & emotional support structures.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Cpu, title: "AI & Robotics", desc: "Hands-on STEM experience enabling students to code and construct intelligent systems." },
                            { icon: HeartHandshake, title: "SEEL Learning", desc: "Social, Emotional & Ethical Learning framework fostering inner resilience." },
                            { icon: Trophy, title: "Sports Complex", desc: "Cricket grounds, swimming pools, basketball courts with experienced mentors." },
                            { icon: Users, title: "Boarding Life", desc: "Structured, home-like environment focusing on discipline and peer mentorship." }
                        ].map((pillar, idx) => (
                            <div key={idx} className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-gold-500/50 transition duration-300">
                                <pillar.icon className="w-10 h-10 text-gold-400 mb-4" />
                                <h3 className="text-xl font-bold text-white mb-2">{pillar.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}