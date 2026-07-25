import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Sparkles } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-slate-950 text-slate-100 min-h-screen py-16 selection:bg-amber-400 selection:text-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16 space-y-3"
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-xs tracking-widest uppercase">
                        <Sparkles className="w-3.5 h-3.5" /> Direct Assistance
                    </span>
                    <h1 className="text-4xl font-black text-white sm:text-6xl tracking-tight">Get in Touch</h1>
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        <div className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 space-y-8 backdrop-blur-xl">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base">Aligarh Main Campus</h4>
                                    <p className="text-slate-400 text-sm mt-1">Agra Highway, Near Gyan Mahavidyalaya, Aligarh - 202001, UP</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base">Admissions Helpline</h4>
                                    <p className="text-slate-400 text-sm mt-1 font-mono">+91 8006409344 / +91 82669 54007</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-base">Email Address</h4>
                                    <p className="text-slate-400 text-sm mt-1">admissions@pavnaschoolaligarh.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h3>
                        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition text-sm" />
                                <input type="email" placeholder="Email Address" className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition text-sm" />
                            </div>
                            <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition text-sm resize-none" />

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm tracking-wider uppercase shadow-lg shadow-amber-500/20"
                            >
                                <span>Submit Message</span>
                                <Send className="w-4 h-4" />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

            </div>
        </div>
    );
}