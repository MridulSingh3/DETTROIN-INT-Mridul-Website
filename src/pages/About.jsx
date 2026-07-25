import React from 'react';
import { Award, CheckCircle, Target, Heart } from 'lucide-react';
import rectangle from "../assets/Rectangle-1-3.webp"

export default function About() {
    return (
        <div className="bg-slate-950 text-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Banner */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-gold-400 font-bold uppercase tracking-widest text-xs">Our Heritage</span>
                    <h1 className="text-4xl font-extrabold mt-2 sm:text-5xl">About Pavna CBSE School</h1>
                    <p className="mt-4 text-slate-400 text-base sm:text-lg">
                        Founded in 1998 by Shri Pawan Jain (Pavna Group), formerly DPS Aligarh.
                    </p>
                </div>

                {/* Campus Showcase Section */}
                <div className="relative mb-20 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl group">
                    <img
                        src={rectangle}
                        alt="Pavna School Infrastructure"
                        className="w-full h-[400px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex items-end p-6 sm:p-10">
                        <div>
                            <span className="bg-gold-500/20 border border-gold-500/40 text-gold-400 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full backdrop-blur-md">
                                Aligarh Campus
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-3">
                                State-of-the-Art Infrastructure & Athletic Grounds
                            </h3>
                            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mt-1">
                                Spanning across acres of modern academic blocks, sports complexes, and futuristic learning hubs.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-white">Shaping Ethical Leaders for Tomorrow</h2>
                        <p className="text-slate-300 leading-relaxed">
                            Pavna School began with a vision to deliver world-class, stress-free education. We prioritize both intellectual independence and moral responsibility, guiding students through CBSE standards while nurturing personal interests.
                        </p>
                        <div className="space-y-3">
                            {[
                                "CBSE Affiliated Comprehensive Curriculum",
                                "Dedicated 1:12 Teacher to Student Mentorship Ratio",
                                "Integrated Social, Emotional & Experiential Learning (SEEL)",
                                "Safe GPS-Enabled Fleet Bus Transport"
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0" />
                                    <span className="text-slate-300 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 relative">
                        <div className="absolute -top-4 -right-4 p-4 bg-gold-500 text-navy-950 rounded-xl font-bold shadow-lg shadow-gold-500/20">
                            <Award className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Management Message</h3>
                        <blockquote className="text-slate-300 italic mb-4">
                            "Education is a holistic journey that extends beyond academic marks. We build compassionate hearts and analytical minds ready to tackle global challenges."
                        </blockquote>
                        <p className="text-gold-400 font-bold text-sm">Ms. Priya Jain</p>
                        <p className="text-xs text-slate-400">Chairperson, Pavna Educational Trust</p>
                    </div>
                </div>

                {/* Core Vision & Mission */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-xl bg-slate-900 border border-slate-800">
                        <Target className="w-10 h-10 text-gold-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Our Mission</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            To ignite curiosity, encourage independent problem-solving through STEM and humanities, and maintain an inclusive environment where every child achieves their full potential.
                        </p>
                    </div>
                    <div className="p-8 rounded-xl bg-slate-900 border border-slate-800">
                        <Heart className="w-10 h-10 text-gold-400 mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">Our Vision</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            To remain a premier institution in Uttar Pradesh known for modern pedagogy, ethical values, athletic excellence, and global readiness.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}