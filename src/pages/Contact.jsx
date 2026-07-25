import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-slate-950 text-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">Get in Touch</h1>
                    <p className="mt-4 text-slate-400">Have questions regarding admissions, fee structure, or campus visits?</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Contact Details */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white">Aligarh Main Campus</h4>
                                    <p className="text-slate-400 text-sm">Agra Highway, Near Gyan Mahavidyalaya, Aligarh - 202001, UP, India</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Phone className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white">Admissions Helpline</h4>
                                    <p className="text-slate-400 text-sm">+91 8006409344 / +91 82669 54007</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Mail className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white">Email Address</h4>
                                    <p className="text-slate-400 text-sm">admissions@pavnaschoolaligarh.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <Clock className="w-6 h-6 text-gold-400 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-white">Office Hours</h4>
                                    <p className="text-slate-400 text-sm">Mon - Sat: 8:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-7 p-8 rounded-2xl bg-slate-900 border border-slate-800">
                        <h3 className="text-2xl font-bold text-white mb-6">Send an Inquiry</h3>
                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 text-sm" />
                                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 text-sm" />
                            </div>
                            <input type="text" placeholder="Subject / Grade Query" className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 text-sm" />
                            <textarea rows="4" placeholder="Your Message..." className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:border-gold-500 text-sm"></textarea>
                            <button type="submit" className="px-8 py-3.5 rounded-lg bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-sm transition">
                                Submit Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}