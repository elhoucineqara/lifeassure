'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Star, Clock, ShieldCheck } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative pt-40 pb-48 overflow-hidden bg-navy-900">
            {/* Elegant Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-navy-700/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-[10px] font-black uppercase tracking-[0.3em] mb-10">
                            <ShieldCheck className="w-4 h-4" /> Trusted by 50,000+ Families
                        </span>

                        <h1 className="text-4xl md:text-8xl font-serif text-ivory mb-8 leading-[1.1] tracking-tight italic">
                            Secure your <span className="text-gold-500">legacy</span>, <br />
                            built on <span className="text-transparent bg-clip-text gold-gradient">trust</span>.
                        </h1>

                        <p className="text-base md:text-xl text-ivory/60 font-medium mb-12 max-w-2xl mx-auto leading-relaxed">
                            Bespoke life insurance solutions tailored to protect your loved ones and preserve your wealth for generations to come.
                        </p>

                        {/* Quote Input Pill */}
                        <div className="relative max-w-2xl mx-auto group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-gold-600 to-gold-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
                            <div className="relative flex flex-col md:flex-row items-center gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email to begin..."
                                    className="w-full h-14 md:h-16 px-8 rounded-xl md:rounded-full bg-ivory/10 border border-ivory/10 text-ivory placeholder:text-ivory/30 focus:outline-none focus:ring-2 focus:ring-gold-500 transition-all font-medium backdrop-blur-md"
                                />
                                <Link href="/enrollment" className="w-full md:w-auto h-14 md:h-16 px-10 bg-navy-900 dark:bg-gold-500 text-ivory dark:text-navy-900 rounded-xl md:rounded-full font-black uppercase tracking-[0.2em] text-[10px] hover:bg-gold-500 dark:hover:bg-white transition-all flex items-center justify-center gap-3 shrink-0">
                                    Initiate Quote <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>

                        {/* Social Proof */}
                        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">
                            {[
                                { icon: Star, text: 'A+ Rated Carrier' },
                                { icon: Clock, text: '24hr Claim Support' },
                                { icon: ShieldCheck, text: 'Premium Protection' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-ivory">
                                    <item.icon className="w-4 h-4 md:w-5 md:h-5 text-gold-500" />
                                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Transition Divider/Curve */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ivory to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
