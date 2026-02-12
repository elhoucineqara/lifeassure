'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import PageHero from '@/components/marketing/PageHero';
import { motion } from 'framer-motion';
import { Phone, Clock, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const claimSteps = [
    {
        title: "Initial Notification",
        description: "Contact our 24/7 dedicated claims concierge via direct line or our secure portal to initiate the protocol.",
        icon: Phone
    },
    {
        title: "Artisanal Review",
        description: "A senior legacy architect is assigned to your claim within 4 hours to handle all documentation with discretion.",
        icon: FileText
    },
    {
        title: "Fast-Track Payout",
        description: "Upon verification, funds are disbursed via high-priority global transfer, typically within 24 to 48 business hours.",
        icon: Clock
    }
];

export default function ClaimsPage() {
    return (
        <main className="min-h-screen bg-ivory">
            <PageHero
                badge="The Promise Kept"
                title="Platinum Claims Support"
                subtitle="When the moment arrives, our performance becomes your security. A claims process designed for speed, empathy, and absolute discretion."
            />

            <section className="py-32 bg-ivory relative">
                <div className="container mx-auto px-6 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="p-16 rounded-[4rem] bg-navy-900 text-ivory shadow-2xl overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 to-transparent" />
                        <div className="relative z-10 flex flex-col items-center">
                            <h2 className="text-3xl md:text-5xl font-serif italic mb-8">Direct Priority Line</h2>
                            <p className="text-ivory/60 text-lg mb-12 max-w-2xl font-medium uppercase tracking-widest text-xs">Available 24/7 for families in need of immediate assistance.</p>
                            <div className="text-4xl md:text-6xl font-black text-gold-500 tracking-tighter italic mb-8">+1 (800) LEGACY-PRO</div>
                            <Link href="/enrollment" className="h-16 px-12 bg-gold-500 text-navy-900 rounded-full font-black uppercase tracking-[0.2em] text-[10px] items-center justify-center gap-3 transition-all hover:bg-white hover:scale-105 shadow-2xl flex group">
                                Initiate Claim Online <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-32 container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    {claimSteps.map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="relative group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-700"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-gold-500/10 text-gold-600 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                                <step.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-black text-navy-900 mb-4 italic uppercase tracking-tighter italic">Step 0{i + 1}: {step.title}</h3>
                            <p className="text-navy-900/60 font-medium leading-relaxed">{step.description}</p>

                            <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                <CheckCircle className="w-6 h-6 text-gold-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="py-32 bg-navy-900 text-ivory">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-serif italic mb-8">99.9% Success Rate</h2>
                        <p className="text-ivory/40 text-lg font-medium leading-relaxed mb-12 italic">
                            In 2023, we fulfilled our promise to over 12,000 families, providing the financial foundation they needed to preserve their legacy without compromise.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
