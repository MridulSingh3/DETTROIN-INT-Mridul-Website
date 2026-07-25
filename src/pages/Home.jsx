import React, { useState } from 'react';
import { ArrowRight, Sparkles, BookOpen, ShieldCheck, Cpu, Trophy, Users, HeartHandshake, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import rectangle from "../assets/Rectangle-1-3.webp";
import chairwomman from "../assets/Border.webp";
import principle from "../assets/Border-1-1.webp";

export default function Home() {
    const [openFaq, setOpenFaq] = useState(0);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const managementData = [
        {
            name: "Ms. Priya Jain",
            role: "OUR CHAIRPERSON",
            image: chairwomman,
            quote: "At Pavna School (formerly DPS Aligarh), we take pride in shaping not only bright minds but also compassionate hearts. Education is a holistic journey that extends beyond academic success, nurturing emotional well-being, moral values, and resilience."
        },
        {
            name: "Ms. Arti Jha",
            role: "PRINCIPAL",
            image: principle,
            quote: "Formerly known as DPS Aligarh, the institution has established a reputation for academic and holistic excellence. Our country's education is shifting from content to concept, and we are committed to embracing these modifications in a comprehensive manner."
        }
    ];

    const faqData = [
        {
            question: "What Curricula Does Pavna School Offer?",
            answer: "Pavna School offers academic pathways to cater to diverse learning needs. Students can choose the Central Board of Secondary Education (CBSE) for a robust national curriculum."
        },
        {
            question: "Is Boarding Mandatory For All Students?",
            answer: "No, boarding is optional. Pavna School offers day-scholar services with safe transportation options as well as full-boarding facilities for interested families."
        },
        {
            question: "What Is The Student-Teacher Ratio?",
            answer: "We maintain a low student-teacher ratio of 1:12 to ensure personalized attention, individual mentoring, and tailored academic care for every child."
        },
        {
            question: "How Does The Admission Process Work?",
            answer: "Admissions start with an online application or campus interaction. Parents can request a callback, visit the school for assessment, and complete documentation."
        }
    ];

    return (
        <div className="bg-slate-950 text-white min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src={rectangle}
                        alt="Pavna CBSE School Campus"
                        className="w-full h-full object-cover object-center transform scale-105 filter brightness-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/40" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-12 items-center relative z-10">
                    <div className="lg:col-span-7 space-y-6">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-sm font-medium backdrop-blur-md">
                            <Sparkles className="w-4 h-4" /> Admissions Open 2026–27
                        </div>

                        <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
                            Nurturing Leaders Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-amber-200">Holistic Education</span>
                        </h1>

                        <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl drop-shadow">
                            Formerly DPS Aligarh, Pavna School brings 28+ years of legacy combining futuristic learning (AI & Robotics) with character building and world-class athletic facilities.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold transition shadow-lg shadow-gold-500/20">
                                Apply Now <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/about" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 backdrop-blur-md font-semibold transition">
                                <BookOpen className="w-5 h-5 text-gold-400" /> Learn More
                            </Link>
                        </div>

                        {/* Quick Metrics */}
                        <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 backdrop-blur-sm">
                            <div>
                                <div className="text-3xl font-extrabold text-white">28+</div>
                                <div className="text-xs text-slate-300 font-medium">Years Legacy</div>
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-gold-400">1:12</div>
                                <div className="text-xs text-slate-300 font-medium">Teacher Ratio</div>
                            </div>
                            <div>
                                <div className="text-3xl font-extrabold text-white">30k+</div>
                                <div className="text-xs text-slate-300 font-medium">Learners Base</div>
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

            {/* School Board of Management Section */}
            <section className="py-20 bg-slate-950 border-t border-slate-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-gold-400 font-bold text-xs tracking-widest uppercase">MANAGEMENT</span>
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl mt-2">School Board Of Management</h2>
                    </div>

                    <div className="space-y-12">
                        {managementData.map((person, idx) => (
                            <div
                                key={idx}
                                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center gap-8 backdrop-blur-md"
                            >
                                <div className="w-full md:w-72 flex-shrink-0">
                                    <div className="p-2 rounded-3xl border-2 border-dashed border-slate-700 bg-slate-950/60">
                                        <img
                                            src={person.image}
                                            alt={person.name}
                                            className="w-full h-72 object-cover object-top rounded-2xl"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 text-center md:text-left space-y-3">
                                    <h3 className="text-2xl sm:text-3xl font-black text-white">{person.name}</h3>
                                    <p className="text-gold-400 font-bold text-xs tracking-wider uppercase">{person.role}</p>
                                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-2">{person.quote}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Frequently Asked Questions Section */}
            <section className="py-20 bg-slate-900/60 border-t border-slate-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                            Frequently Asked Questions
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={index}
                                    className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                                    >
                                        <span className="text-base sm:text-lg font-bold text-slate-100 pr-4">
                                            {faq.question}
                                        </span>
                                        <span className="text-slate-300 hover:text-gold-400 transition-colors">
                                            {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                        </span>
                                    </button>

                                    {isOpen && (
                                        <div className="px-6 pb-6 pt-1 text-slate-300 text-sm sm:text-base leading-relaxed border-t border-slate-800/50">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}