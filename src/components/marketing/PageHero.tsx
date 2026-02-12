'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PageHeroProps {
    title: string;
    subtitle: string;
    badge: string;
}

const PageHero = ({ title, subtitle, badge }: PageHeroProps) => {
    return (
        <section className="relative pt-48 pb-32 overflow-hidden bg-navy-900">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-[10px] font-black uppercase tracking-[0.5em] text-gold-500 mb-8 block"
                    >
                        {badge}
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-8xl font-serif text-ivory mb-10 leading-[1.1] italic uppercase tracking-tighter"
                    >
                        {title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-ivory/60 font-medium max-w-2xl leading-relaxed italic"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default PageHero;
