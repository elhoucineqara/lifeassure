'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 bg-ivory overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative p-12 md:p-24 rounded-[3rem] bg-navy-900 text-ivory overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.3)]"
                >
                    {/* Decorative Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gold-600/20 to-transparent" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-[100px] animate-pulse" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                    <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 text-gold-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8"
                        >
                            <Sparkles className="w-4 h-4" /> Ready to Secure Your Future?
                        </motion.div>

                        <h2 className="text-4xl md:text-7xl font-serif mb-10 leading-tight italic">
                            Your legacy starts <br />
                            <span className="text-gold-500">today</span>.
                        </h2>

                        <p className="text-ivory/60 text-lg md:text-xl font-medium mb-12 leading-relaxed">
                            Join the ranks of thousands of families who trust LifeAssure for bespoke, high-fidelity protection. Our advisors are standing by.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <Link href="/enrollment" className="h-16 px-12 bg-gold-500 text-navy-900 rounded-full font-black uppercase tracking-[0.2em] text-[10px] items-center justify-center gap-3 transition-all hover:bg-white hover:scale-105 shadow-2xl flex group">
                                Start Free Consultation <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-navy-900 bg-navy-800 overflow-hidden">
                                        <img
                                            src={`https://i.pravatar.cc/150?u=${i + 10}`}
                                            alt="Advisor"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                                <div className="pl-6 flex flex-col items-start justify-center">
                                    <span className="text-[10px] font-black italic">Active Advisors</span>
                                    <span className="text-[9px] text-ivory/40 uppercase tracking-widest">Available Now</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
