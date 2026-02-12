import React from 'react';
import dbConnect from '@/lib/mongodb';
import BlogPost from '@/models/BlogPost';
import BlogPostContent from '@/components/blog/BlogPostContent';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    await dbConnect();
    const { slug } = await params;
    const post = await BlogPost.findOne({ slug });

    if (!post) {
        return {
            title: 'Article Not Found | LifeAssure',
        };
    }

    return {
        title: `${post.title} | LifeAssure Journal`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
            type: 'article',
            publishedTime: post.date,
            authors: [post.author],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
        },
    };
}

const BlogPostPage = async ({ params }: Props) => {
    await dbConnect();
    const { slug } = await params;
    const post = await BlogPost.findOne({ slug });

    if (!post) {
        return (
            <div className="min-h-screen bg-ivory flex flex-col items-center justify-center p-6 text-center">
                <h2 className="text-3xl font-black text-navy-900 uppercase italic mb-4">Article Not Found.</h2>
                <p className="text-navy-900/50 font-medium mb-8">The requested analysis has been archived or relocated.</p>
                <Link href="/blog" className="text-[10px] font-black uppercase tracking-[0.3em] text-gold-600 hover:text-navy-900 transition-colors flex items-center gap-2">
                    <ArrowLeft className="w-4 h-4" /> Return to Journal
                </Link>
            </div>
        );
    }

    // Convert Mongoose document to plain object
    const plainPost = JSON.parse(JSON.stringify(post));

    return <BlogPostContent post={plainPost} />;
};

export default BlogPostPage;
