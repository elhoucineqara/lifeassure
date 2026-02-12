'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Award, Wallet, Heart, Scale, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Solutions = () => {
    const [solutions, setSolutions] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSolutions = async () => {
            try {
                const res = await fetch('/api/content?type=solutions');
                const data = await res.json();
                setSolutions(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to fetch solutions', error);
                setSolutions([]);
            } finally {
                setLoading(false);
            }
        };
        fetchSolutions();
    }, []);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Shield': return <Shield className="w-8 h-8 text-gold-500" />;
            case 'Sparkles': return <Sparkles className="w-8 h-8 text-gold-500" />;
            case 'Award': return <Award className="w-8 h-8 text-gold-500" />;
            case 'Wallet': return <Wallet className="w-8 h-8 text-gold-500" />;
            case 'Heart': return <Heart className="w-8 h-8 text-gold-500" />;
            case 'Scale': return <Scale className="w-8 h-8 text-gold-500" />;
            default: return <Shield className="w-8 h-8 text-gold-500" />;
        }
    };

    if (loading) return (
        <div className="py-32 bg-ivory flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
        </div>
    );

    return (
        <section id="solutions" className="py-32 bg-ivory relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[10px] font-black uppercase tracking-[0.5em] text-gold-600 mb-6 block"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-7xl font-serif text-navy-900 leading-[1.1] italic"
                        >
                            Bespoke coverage for <br />
                            <span className="text-gold-500">extraordinary lives.</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-navy-900/40 max-w-sm text-sm font-medium leading-relaxed uppercase tracking-widest italic"
                    >
                        We don't believe in one-size-fits-all. Every policy is a unique masterpiece of financial architecture.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {solutions.map((solution, i) => (
                        <motion.div
                            key={solution._id || i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-b from-gold-500/20 to-transparent rounded-[3rem] opacity-0 group-hover:opacity-100 transition duration-700 blur-sm" />
                            <div className="relative h-full p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl group-hover:shadow-2xl transition-all duration-700 flex flex-col items-start translate-z-0">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-gold-500 transition-colors duration-700">
                                    <div className="group-hover:text-white transition-colors duration-700">
                                        {getIcon(solution.icon)}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-navy-900 mb-4 tracking-tighter uppercase italic">{solution.title}</h3>
                                <p className="text-navy-900/40 font-medium leading-relaxed mb-8">{solution.description}</p>

                                <Link href="/solutions" className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] text-gold-600 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                                    Explore Solution <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solutions;
