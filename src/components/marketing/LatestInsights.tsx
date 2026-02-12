'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

const LatestInsights = () => {
    const [posts, setPosts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch('/api/content?type=blog');
                const data = await res.json();
                // Take only top 3
                setPosts(Array.isArray(data) ? data.slice(0, 3) : []);
            } catch (error) {
                console.error('Failed to fetch blog posts', error);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading || posts.length === 0) return null;

    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
                    <div className="max-w-2xl space-y-6">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-500"
                        >
                            Intellectual Capital
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-black text-navy-900 tracking-tighter uppercase italic leading-none"
                        >
                            Latest <span className="text-gold-500">Insights</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-navy-900/50 font-medium italic text-lg"
                        >
                            Strategic analysis on wealth preservation and the future of global protection.
                        </motion.p>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-4 text-[10px] font-black text-navy-900 uppercase tracking-[0.3em] group"
                        >
                            Explore Journal
                            <ArrowRight className="w-4 h-4 text-gold-500 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, idx) => (
                        <motion.div
                            key={post.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <Link href={`/blog/${post.slug}`}>
                                <div className="space-y-6">
                                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-xl">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute top-6 left-6">
                                            <span className="px-4 py-2 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-black uppercase tracking-widest text-navy-900 border border-slate-100">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="px-4 space-y-4">
                                        <div className="flex items-center gap-4 text-[9px] font-black text-navy-900/40 uppercase tracking-widest">
                                            <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                                            <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                                        </div>
                                        <h3 className="text-xl font-black text-navy-900 tracking-tight uppercase italic group-hover:text-gold-600 transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-navy-900/50 text-xs font-medium leading-relaxed line-clamp-2">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LatestInsights;
