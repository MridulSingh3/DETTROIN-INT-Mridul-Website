import React, { useState } from 'react';

const galleryData = [
    { id: 1, title: 'AI & Robotics Lab', category: 'Academics', img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Cricket Tournament', category: 'Sports', img: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Annual Cultural Fest', category: 'Events', img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Olympic Pool Swimming', category: 'Sports', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&q=80' },
    { id: 5, title: 'Science Exhibition', category: 'Academics', img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80' },
    { id: 6, title: 'Boarding Campus Living', category: 'Campus', img: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=600&q=80' },
];

export default function Gallery() {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Academics', 'Sports', 'Events', 'Campus'];

    const filteredItems = filter === 'All' ? galleryData : galleryData.filter(i => i.category === filter);

    return (
        <div className="bg-slate-950 text-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl font-extrabold sm:text-5xl">Campus Life & Gallery</h1>
                    <p className="mt-4 text-slate-400">Explore life at Pavna CBSE School through our captured moments.</p>
                </div>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-5 py-2 rounded-full text-sm font-semibold transition ${filter === cat
                                    ? 'bg-gold-500 text-navy-950'
                                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                            <div className="absolute bottom-0 left-0 p-4">
                                <span className="text-xs text-gold-400 font-bold uppercase">{item.category}</span>
                                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}