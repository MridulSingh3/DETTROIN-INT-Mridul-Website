import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Target, Heart, Sparkles } from 'lucide-react';
import rectangle from "../assets/Rectangle-1-3.webp";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function About() {
    return (
        <div className="bg-slate-950 text-slate-100 min-h-screen py-16 selection:bg-amber-400 selection:text-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Banner Header */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                    className="text-center max-w-3xl mx-auto mb-16 space-y-4"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-xs uppercase tracking-widest">
                        <Sparkles className="w-3.5 h-3.5" /> Our Heritage & Vision
                    </span>
                    <h1 className="text-4xl font-black text-white sm:text-6xl tracking-tight">About Pavna CBSE School</h1>
                    <p className="text-slate-400 text-base sm:text-lg">
                        Founded in 1998 by Shri Pawan Jain (Pavna Group), formerly DPS Aligarh.
                    </p>
                </motion.div>

                {/* Hero Image Block */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-24 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group"
                >
                    <img src={rectangle} alt="Pavna Infrastructure" className="w-full h-[380px] sm:h-[500px] object-cover filter brightness-90 group-hover:scale-105 transition-transform duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6 sm:p-12">
                        <div className="max-w-3xl space-y-3">
                            <span className="bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full">
                                Aligarh Campus
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-black text-white">State-of-the-Art Infrastructure & Athletic Grounds</h2>
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                                Spanning acres of modern academic blocks, advanced robotic labs, and holistic boarding residence.
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Vision & Values */}
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                            <Target className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Our Mission</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            To ignite curiosity, encourage independent problem-solving through STEM and humanities, and maintain an inclusive environment where every child achieves their full potential.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -6 }}
                        className="p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-4"
                    >
                        <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400">
                            <Heart className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            To remain a premier institution in Uttar Pradesh known for modern pedagogy, ethical values, athletic excellence, and global readiness.
                        </p>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}