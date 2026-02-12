'use client';

import React from 'react';
import { motion } from 'framer-motion';

const SocialProof = () => {
    const [partners, setPartners] = React.useState<any[]>([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const fetchPartners = async () => {
            try {
                const res = await fetch('/api/content?type=partners');
                const data = await res.json();
                setPartners(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to fetch partners', error);
                setPartners([]);
            } finally {
                setLoading(false);
            }
        };
        fetchPartners();
    }, []);

    if (loading) return null; // Hide if empty or loading

    return (
        <section className="py-20 bg-ivory border-y border-slate-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="text-center md:text-left">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-navy-900/40 mb-2">Our Platinum Network</p>
                        <p className="text-sm font-medium text-navy-900/60 uppercase tracking-widest italic">Underwritten by the world's most <br />trusted financial institutions.</p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
                        {partners.map((partner, i) => (
                            <motion.div
                                key={partner._id || i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="group grayscale hover:grayscale-0 transition-all duration-700"
                            >
                                {/* In a real app we'd use <Image /> but for now we fallback to text if logo is missing */}
                                <div className="text-2xl font-serif text-navy-900/20 group-hover:text-gold-500 transition-colors uppercase italic font-black">
                                    {partner.name}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
