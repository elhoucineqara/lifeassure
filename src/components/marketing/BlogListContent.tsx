'use client';

import React from 'react';
import PageHero from '@/components/marketing/PageHero';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface BlogListContentProps {
    posts: any[];
}

const BlogListContent = ({ posts }: BlogListContentProps) => {
    const featuredPost = posts.find(p => p.featured) || posts[0];
    const otherPosts = posts.filter(p => p !== featuredPost);

    return (
        <main className="min-h-screen bg-ivory">
            <PageHero
                badge="Elite Journal"
                title="Legacy Insights"
                subtitle="Sophisticated analysis on wealth preservation, international protection, and the future of multi-generational security."
            />

            <section className="py-32 container mx-auto px-6">
                {/* Featured Post */}
                {featuredPost && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative group mb-32"
                    >
                        <Link href={`/blog/${featuredPost.slug}`}>
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                <div className="relative aspect-[16/9] overflow-hidden rounded-[3rem] shadow-2xl">
                                    <img
                                        src={featuredPost.coverImage}
                                        alt={featuredPost.title}
                                        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/0 transition-colors duration-700" />
                                </div>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold-500">{featuredPost.category}</span>
                                        <div className="h-px w-12 bg-slate-200" />
                                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-navy-900/40">Featured Article</span>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-black text-navy-900 tracking-tighter uppercase italic leading-[1.1]">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-navy-900/60 font-medium leading-relaxed italic text-lg line-clamp-3">
                                        {featuredPost.excerpt}
                                    </p>
                                    <div className="flex items-center gap-8 pt-4">
                                        <div className="flex items-center gap-3">
                                            <img src={featuredPost.authorImage} alt={featuredPost.author} className="w-10 h-10 rounded-full border-2 border-gold-500/20" />
                                            <div>
                                                <p className="text-[10px] font-black text-navy-900 uppercase tracking-widest leading-none mb-1">{featuredPost.author}</p>
                                                <p className="text-[9px] font-medium text-navy-900/40 uppercase tracking-widest">{featuredPost.authorRole}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-4 text-[10px] font-black text-navy-900 uppercase tracking-[0.3em] group/btn">
                                        Read Analysis
                                        <ArrowRight className="w-4 h-4 text-gold-500 group-hover/btn:translate-x-2 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                )}

                {/* Posts Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {otherPosts.map((post: any, idx: number) => (
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
            </section>
        </main>
    );
};

export default BlogListContent;
