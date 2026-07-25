import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2 } from 'lucide-react';
import ai from "../assets/Academic-Visit-15.webp";
import cricket from "../assets/Academic-Visit-2.webp";
import science from "../assets/Academic-Visit-17.webp";
import i from "../assets/Group-3-1.webp";

const galleryData = [
    { id: 1, title: 'AI & Robotics Lab', category: 'Academics', img: ai },
    { id: 2, title: 'Cricket Tournament', category: 'Sports', img: cricket },
    { id: 3, title: 'Annual Cultural Fest', category: 'Events', img: i },
    { id: 4, title: 'Olympic Swimming Pool', category: 'Sports', img: cricket },
    { id: 5, title: 'Science Exhibition', category: 'Academics', img: science },
    { id: 6, title: 'Boarding Life', category: 'Campus', img: ai },
];

export default function Gallery() {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Academics', 'Sports', 'Events', 'Campus'];

    const filteredItems = filter === 'All' ? galleryData : galleryData.filter(i => i.category === filter);

    return (
        <div className="bg-slate-950 text-slate-100 min-h-screen py-16 selection:bg-amber-400 selection:text-slate-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-semibold text-xs tracking-widest uppercase">
                        <Sparkles className="w-3.5 h-3.5" /> Campus Life
                    </span>
                    <h1 className="text-4xl font-black text-white sm:text-6xl tracking-tight">Interactive Gallery</h1>
                </div>

                {/* Filter Pills */}
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 relative ${filter === cat ? 'text-slate-950' : 'text-slate-400 hover:text-white bg-slate-900/80 border border-slate-800'
                                }`}
                        >
                            {filter === cat && (
                                <motion.div
                                    layoutId="activeFilter"
                                    className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg shadow-amber-500/20"
                                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                />
                            )}
                            <span className="relative z-10">{cat}</span>
                        </button>
                    ))}
                </div>

                {/* Animated Image Grid */}
                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.4 }}
                                key={item.id}
                                className="group relative rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl"
                            >
                                <div className="h-72 overflow-hidden relative">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                                    <div className="space-y-1">
                                        <span className="text-[10px] font-extrabold text-amber-400 tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-amber-400/10 border border-amber-400/20">
                                            {item.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white pt-1">{item.title}</h3>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-700 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <Maximize2 className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </div>
    );
}