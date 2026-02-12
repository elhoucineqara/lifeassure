import React from 'react';
import dbConnect from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';
import BlogListContent from '@/components/marketing/BlogListContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Elite Journal | Legacy Insights by LifeAssure",
    description: "Sophisticated analysis on wealth preservation, international protection, and the future of multi-generational security. Read our latest articles.",
};

export default async function BlogPage() {
    await dbConnect();
    const postsData = await BlogPost.find({}).sort({ order: 1, date: -1 });
    const posts = JSON.parse(JSON.stringify(postsData));

    return <BlogListContent posts={posts} />;
}
