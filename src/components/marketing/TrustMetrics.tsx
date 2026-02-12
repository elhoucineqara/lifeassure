'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TrustMetrics = () => {
    const [metrics, setMetrics] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const res = await fetch('/api/content?type=metrics');
                const data = await res.json();
                setMetrics(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error('Failed to fetch metrics', error);
                setMetrics([]);
            } finally {
                setLoading(false);
            }
        };
        fetchMetrics();
    }, []);

    if (loading) return null;

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
                    {metrics.map((metric, i) => (
                        <motion.div
                            key={metric._id || i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center group"
                        >
                            <div className="text-4xl md:text-6xl font-serif text-navy-900 italic mb-4 group-hover:text-gold-500 transition-colors">
                                {metric.value}
                            </div>
                            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-navy-900/40">
                                {metric.label}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustMetrics;
