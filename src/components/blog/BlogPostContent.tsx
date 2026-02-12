'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, ArrowRight, Share2, Bookmark } from 'lucide-react';
import Link from 'next/link';

interface BlogPostContentProps {
    post: any;
}

const BlogPostContent = ({ post }: BlogPostContentProps) => {
    return (
        <main className="min-h-screen bg-ivory">
            {/* Hero Section */}
            <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
                <img
                    src={post.coverImage}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/60 backdrop-blur-[2px]" />

                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                            >
                                <Link href="/blog" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-gold-400 hover:text-ivory transition-colors mb-12">
                                    <ArrowLeft className="w-4 h-4" /> Back to Journal
                                </Link>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <span className="inline-block px-6 py-2 bg-gold-500 text-navy-900 text-[10px] font-black uppercase tracking-[0.4em] rounded-full">
                                    {post.category}
                                </span>
                                <h1 className="text-5xl md:text-7xl font-black text-ivory tracking-tighter uppercase italic leading-[1.05]">
                                    {post.title}
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="flex flex-wrap items-center gap-8 pt-8 border-t border-ivory/10"
                            >
                                <div className="flex items-center gap-4">
                                    <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full border-2 border-gold-500" />
                                    <div>
                                        <p className="text-xs font-black text-ivory uppercase tracking-widest">{post.author}</p>
                                        <p className="text-[10px] font-medium text-ivory/40 uppercase tracking-widest">{post.authorRole}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 text-[10px] font-black text-ivory/60 uppercase tracking-widest">
                                    <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-gold-500" /> {post.date}</span>
                                    <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-gold-500" /> {post.readTime} Read</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-32 container mx-auto px-6">
                <div className="grid lg:grid-cols-4 gap-16">
                    {/* Sticky Sidebar */}
                    <aside className="lg:col-span-1 hidden lg:block">
                        <div className="sticky top-32 space-y-12">
                            <div className="space-y-6">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-navy-900/30">Share Analysis</h4>
                                <div className="flex gap-4">
                                    {[Share2, Bookmark].map((Icon, idx) => (
                                        <button key={idx} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-navy-900 hover:bg-navy-900 hover:text-ivory transition-all">
                                            <Icon className="w-5 h-5" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                            <div className="p-8 rounded-[2rem] bg-navy-900 text-ivory space-y-6">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-500">Protection Strategy</h4>
                                <p className="text-xs font-medium leading-relaxed italic opacity-60">
                                    Discuss this analysis with a dedicated legacy advisor.
                                </p>
                                <Link href="/enrollment" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-ivory hover:text-gold-500 transition-colors">
                                    Initiate Consultation <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Article Body */}
                    <div className="lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="prose prose-xl prose-navy max-w-none"
                        >
                            <p className="text-2xl font-medium italic text-navy-900/70 mb-16 leading-relaxed border-l-4 border-gold-500 pl-8">
                                {post.excerpt}
                            </p>

                            <div className="text-navy-900/80 font-medium leading-[1.8] space-y-8">
                                <p>
                                    In the stratosphere of global wealth management, the preservation of a legacy is less about the accumulation of assets and more about the architectural integrity of their transfer. As we navigate the complex geopolitical currents of 2024, the definition of 'absolute protection' has evolved from simple asset shielding to sophisticated jurisdictional navigation.
                                </p>
                                <h3 className="text-3xl font-black text-navy-900 uppercase italic tracking-tight pt-8 pb-4">The Jurisdictional Vault</h3>
                                <p>
                                    The selection of a primary jurisdiction remains the cornerstone of any multi-generational strategy. Whether leveraging the historic stability of Zurich, the innovative treaty frameworks of Singapore, or the established legal bastions of London, the goal is consistent: to create an environment where assets are not just stored, but strategically integrated into a legal structure that respects legacy.
                                </p>
                                <div className="my-16 aspect-video rounded-[3rem] overflow-hidden shadow-2xl skew-y-1">
                                    <img
                                        src="https://images.unsplash.com/photo-1454165833767-027ffea9e7a7?q=80&w=2070&auto=format&fit=crop"
                                        className="w-full h-full object-cover"
                                        alt="Strategic Analysis"
                                    />
                                </div>
                                <p>
                                    Concierge curation represents the pinnacle of this approach. It moves beyond the commodity-driven models of retail insurance, where policies are 'purchased', toward a model where protection is 'engineered'. This requires a deep understanding of Irrevocable Life Insurance Trusts (ILITs), complex estate modeling, and a commitment to unwavering discretion.
                                </p>
                                <p>
                                    As we look toward the second half of the decade, the integration of military-grade digital security with traditional trust frameworks will define the next generation of elite protection.
                                </p>
                            </div>
                        </motion.div>

                        {/* Mobile Share */}
                        <div className="lg:hidden mt-16 pt-8 border-t border-slate-200">
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-navy-900/30">Share Analysis</span>
                                <div className="flex gap-4">
                                    {[Share2, Bookmark].map((Icon, idx) => (
                                        <button key={idx} className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-navy-900">
                                            <Icon className="w-4 h-4" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPostContent;
