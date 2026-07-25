import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function Footer() {
    return (
        <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 text-xs py-8 text-center">
            <div className="max-w-7xl mx-auto px-4">
                <p>© 2026 Pavna CBSE School Aligarh. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default function App() {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-slate-950 font-sans">
                <Navbar />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/gallery" element={<Gallery />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}