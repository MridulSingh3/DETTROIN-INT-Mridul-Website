import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, BookOpen, ShieldCheck, Cpu, Trophy, Users, HeartHandshake, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import rectangle from "../assets/Rectangle-1-3.webp";
import chairwomman from "../assets/Border.webp";
import principle from "../assets/Border-1-1.webp";

// Motion Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
};

export default function Home() {
    const [openFaq, setOpenFaq] = useState(0);

    const managementData = [
        {
            name: "Ms. Priya Jain",
            role: "CHAIRPERSON",
            image: chairwomman,
            quote: "At Pavna School (formerly DPS Aligarh), we take pride in shaping not only bright minds but also compassionate hearts. Education is a holistic journey that extends beyond academic success."
        },
        {
            name: "Ms. Arti Jha",
            role: "PRINCIPAL",
            image: principle,
            quote: "Formerly known as DPS Aligarh, our institution has established a reputation for academic and holistic excellence. We embrace modern conceptual shifts with total dedication."
        }
    ];

    const faqData = [
        {
            question: "What Curricula Does Pavna School Offer?",
            answer: "Pavna School offers pathways following the CBSE curriculum, complemented with coding, robotics, and holistic development modules."
        },
        {
            question: "Is Boarding Mandatory For All Students?",
            answer: "No, boarding is optional. We offer day-scholar transport services as well as premium full-boarding facilities."
        },
        {
            question: "What Is The Student-Teacher Ratio?",
            answer: "We maintain a low ratio of 1:12 to ensure individual mentoring and academic care for every child."
        },
        {
            question: "How Does The Admission Process Work?",
            answer: "Admissions begin with an inquiry form submission, followed by a guided campus tour and interactions."
        }
    ];

    return (
        <div className="bg-slate-950 text-slate-100 min-h-screen overflow-hidden selection:bg-amber-400 selection:text-slate-950">

            {/* HERO SECTION */}
            <section className="relative min-h-[92vh] flex items-center justify-center border-b border-slate-800/80 overflow-hidden">
                {/* Parallax Background */}
                <motion.div
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute inset-0 z-0"
                >
                    <img src={rectangle} alt="Pavna Campus" className="w-full h-full object-cover filter brightness-[0.35]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">

                    {/* Left Column Content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="lg:col-span-7 space-y-8"
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
                            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                            <span>Admissions Open 2026–27</span>
                        </motion.div>

                        <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-white">
                            Nurturing Leaders Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500">Holistic Education</span>
                        </motion.h1>

                        <motion.p variants={fadeInUp} className="text-slate-300 text-base sm:text-xl leading-relaxed max-w-2xl font-light">
                            Formerly <strong className="text-white font-semibold">DPS Aligarh</strong>, Pavna School brings 28+ years of educational legacy combining future robotics labs with character building.
                        </motion.p>

                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-2">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm uppercase tracking-wide shadow-xl shadow-amber-500/20">
                                    Apply Now <ArrowRight className="w-5 h-5" />
                                </Link>
                            </motion.div>

                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link to="/about" className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900/90 text-white border border-slate-700/80 backdrop-blur-md font-semibold text-sm">
                                    <BookOpen className="w-5 h-5 text-amber-400" /> Discover Our Legacy
                                </Link>
                            </motion.div>
                        </motion.div>

                        {/* Metrics */}
                        <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-800/80">
                            <div>
                                <div className="text-3xl sm:text-4xl font-black text-white">28+</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Years Legacy</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl font-black text-amber-400">1:12</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Teacher Ratio</div>
                            </div>
                            <div>
                                <div className="text-3xl sm:text-4xl font-black text-white">30k+</div>
                                <div className="text-xs text-slate-400 uppercase tracking-wider font-medium">Alumni Base</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Animated Callback Form Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/85 border border-slate-800 shadow-2xl backdrop-blur-2xl relative">
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                        <ShieldCheck className="text-amber-400 w-6 h-6" /> Instant Callback Request
                                    </h3>
                                    <p className="text-xs text-slate-400 mt-1">Submit details for curriculum and admission updates.</p>
                                </div>

                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Parent Name</label>
                                        <input type="text" placeholder="e.g. Rahul Sharma" className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Phone Number</label>
                                        <input type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition text-sm" />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">Select Grade</label>
                                        <select className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-300 text-sm focus:outline-none focus:border-amber-400 transition">
                                            <option value="">Choose Grade...</option>
                                            <option value="Pre-Primary">Pre-Primary (PG - UKG)</option>
                                            <option value="Primary">Primary (Class 1 - 5)</option>
                                            <option value="Secondary">Secondary (Class 6 - 10)</option>
                                            <option value="Senior Secondary">Senior Secondary (Class 11 - 12)</option>
                                        </select>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-lg shadow-amber-500/20"
                                    >
                                        Request Callback
                                    </motion.button>
                                </form>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* PILLARS SECTION */}
            <section className="py-24 bg-slate-950 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center max-w-3xl mx-auto mb-16 space-y-3"
                    >
                        <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">Pillars of Excellence</span>
                        <h2 className="text-3xl sm:text-5xl font-black text-white">Global Standards, Deep Values</h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    >
                        {[
                            { icon: Cpu, title: "AI & Robotics", desc: "Hands-on STEM learning enabling students to code intelligent systems." },
                            { icon: HeartHandshake, title: "SEEL Learning", desc: "Social, Emotional & Ethical Learning framework fostering resilience." },
                            { icon: Trophy, title: "Sports Complex", desc: "Olympic-spec swimming, cricket grounds, and professional coaching." },
                            { icon: Users, title: "Boarding Life", desc: "Structured residence offering individual academic mentorship." }
                        ].map((pillar, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                whileHover={{ y: -8 }}
                                className="group p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-amber-500/50 transition-all duration-300"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-slate-800/80 border border-slate-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-amber-400 transition duration-300">
                                    <pillar.icon className="w-7 h-7 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition">{pillar.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* MANAGEMENT BOARD */}
            <section className="py-24 bg-slate-900/40 border-t border-b border-slate-800/80">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-2">
                        <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">Leadership</span>
                        <h2 className="text-3xl sm:text-5xl font-black text-white">School Board of Management</h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {managementData.map((person, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center gap-8"
                            >
                                <div className="w-40 h-48 sm:w-44 sm:h-56 flex-shrink-0 relative rounded-2xl overflow-hidden border-2 border-amber-500/30">
                                    <img src={person.image} alt={person.name} className="w-full h-full object-cover object-top" />
                                </div>
                                <div className="flex-1 space-y-3 text-center sm:text-left">
                                    <span className="inline-block text-[10px] font-extrabold text-amber-400 tracking-widest uppercase px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20">
                                        {person.role}
                                    </span>
                                    <h3 className="text-2xl font-bold text-white">{person.name}</h3>
                                    <p className="text-slate-300 text-sm leading-relaxed italic font-light">"{person.quote}"</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ANIMATED FAQ ACCORDION */}
            <section className="py-24 bg-slate-950">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-2">
                        <span className="text-amber-400 font-bold text-xs tracking-widest uppercase">Got Questions?</span>
                        <h2 className="text-3xl sm:text-4xl font-black text-white">Frequently Asked Questions</h2>
                    </div>

                    <div className="space-y-4">
                        {faqData.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div key={index} className="rounded-2xl border border-slate-800 bg-slate-900/30 overflow-hidden">
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : index)}
                                        className="w-full p-6 text-left flex justify-between items-center gap-4 focus:outline-none"
                                    >
                                        <span className="font-bold text-white text-base sm:text-lg">{faq.question}</span>
                                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} className="p-2 rounded-xl bg-slate-800 text-amber-400">
                                            {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                        </motion.span>
                                    </button>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/60 pt-4"
                                            >
                                                {faq.answer}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

        </div>
    );
}