'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import PageHero from '@/components/marketing/PageHero';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Download, ArrowRight } from 'lucide-react';

export default function ResourcesPage() {
    const [resources, setResources] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('All Articles');

    useEffect(() => {
        const fetchResources = async () => {
            try {
                const res = await fetch('/api/content?type=resources');
                const data = await res.json();
                setResources(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to fetch resources', error);
                setResources([]);
            } finally {
                setLoading(false);
            }
        };
        fetchResources();
    }, []);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'BookOpen': return <BookOpen className="w-6 h-6" />;
            case 'FileText': return <FileText className="w-6 h-6" />;
            case 'Video': return <Video className="w-6 h-6" />;
            default: return <FileText className="w-6 h-6" />;
        }
    };

    const filteredResources = resources.filter(r => {
        if (activeTab === 'All Articles') return true;
        if (activeTab === 'Whitepapers') return r.type === 'Whitepaper';
        if (activeTab === 'Videos') return r.type === 'Video';
        if (activeTab === 'Guides') return r.type === 'Guide';
        return true;
    });

    if (loading) return (
        <main className="min-h-screen bg-ivory flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
        </main>
    );

    return (
        <main className="min-h-screen bg-ivory">
            <PageHero
                badge="Knowledge Portal"
                title="Legacy Intelligence"
                subtitle="Curated wisdom and strategic insights designed to help you navigate the complexities of long-term protection."
            />

            <section className="py-32 container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-6xl font-serif text-navy-900 italic leading-tight">
                            Strategic <span className="text-gold-600">curation</span> <br />
                            for the refined mind.
                        </h2>
                    </div>
                    <div className="flex bg-navy-900 p-2 rounded-2xl overflow-x-auto">
                        {['All Articles', 'Whitepapers', 'Videos', 'Guides'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${activeTab === tab ? 'bg-gold-500 text-navy-900 shadow-xl' : 'text-ivory/40 hover:text-gold-500'}`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {filteredResources.map((r, i) => (
                        <motion.div
                            key={r._id || i}
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-700 overflow-hidden relative"
                        >
                            <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600 mb-6 block">{r.category}</span>
                                <div className="flex items-start justify-between mb-8">
                                    <h3 className="text-2xl md:text-3xl font-black text-navy-900 tracking-tighter italic uppercase leading-tight max-w-sm group-hover:text-gold-600 transition-colors">
                                        {r.title}
                                    </h3>
                                    <div className="w-14 h-14 rounded-2xl bg-navy-900 text-gold-500 flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                                        {getIcon(r.icon || (r.type === 'Video' ? 'Video' : 'FileText'))}
                                    </div>
                                </div>
                                <p className="text-navy-900/50 font-medium leading-relaxed mb-10 text-lg">
                                    {r.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <Link href="/enrollment" className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-navy-900 group-hover:text-gold-600 transition-colors">
                                        Access Insight <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                    <div className="px-4 py-2 rounded-full border border-slate-100 text-[10px] font-black uppercase tracking-widest text-navy-900/30">
                                        {r.type}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <Link href="/enrollment" className="h-20 px-16 bg-navy-900 text-ivory rounded-full font-black uppercase tracking-[0.3em] text-[10px] hover:bg-gold-500 hover:text-navy-900 transition-all shadow-2xl inline-flex items-center gap-4 group">
                        Unlock Premium Archive <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </main>
    );
}
