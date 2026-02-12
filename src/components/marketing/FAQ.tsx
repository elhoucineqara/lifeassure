'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, Clock, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQ = () => {
    const [faqItems, setFaqItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    useEffect(() => {
        const fetchFAQs = async () => {
            try {
                const res = await fetch('/api/content?type=faqs');
                const data = await res.json();
                setFaqItems(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to fetch FAQs', error);
                setFaqItems([]);
            } finally {
                setLoading(false);
            }
        };
        fetchFAQs();
    }, []);

    if (loading) return (
        <div className="py-32 bg-white flex justify-center items-center">
            <div className="w-10 h-10 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
        </div>
    );

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left Column: Info */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-[10px] font-black uppercase tracking-[0.5em] text-gold-500 mb-6 block"
                        >
                            Intelligence Briefing
                        </motion.span>
                        <h2 className="text-4xl md:text-7xl font-serif text-navy-900 italic leading-tight mb-8">
                            Clarity in every <br />
                            <span className="text-gold-500">strategic detail.</span>
                        </h2>
                        <p className="text-navy-900/50 font-medium leading-relaxed max-w-md mb-12">
                            Transparency is the foundation of trust. Explore our most common inquiries or contact your advisor directly.
                        </p>

                        <div className="flex flex-col gap-6 pt-10">
                            {[
                                { icon: MessageCircle, text: "24/7 Advisor Chat" },
                                { icon: Clock, text: "Rapid Response Protocol" },
                                { icon: Zap, text: "Direct Partner Line" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-xl bg-navy-900 flex items-center justify-center text-gold-500 group-hover:scale-110 transition-transform">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <span className="text-xs font-black uppercase tracking-[0.2em] text-navy-900">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Accordion */}
                    <div className="space-y-4">
                        {faqItems.map((item, i) => (
                            <motion.div
                                key={item._id || i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="border-b border-navy-900/10 last:border-0"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full py-8 flex items-center justify-between text-left group"
                                >
                                    <span className="text-xl md:text-2xl font-black text-navy-900 tracking-tighter uppercase italic group-hover:text-gold-600 transition-colors">
                                        {item.question}
                                    </span>
                                    <ChevronDown className={cn(
                                        "w-6 h-6 text-gold-500 transition-transform duration-500",
                                        openIndex === i ? "rotate-180" : ""
                                    )} />
                                </button>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.5, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-10 text-navy-900/60 font-medium leading-relaxed text-lg max-w-2xl">
                                                {item.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
