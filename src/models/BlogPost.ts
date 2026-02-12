import mongoose, { Schema, Document } from 'mongoose';

export interface IBlogPost extends Document {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    authorRole: string;
    authorImage: string;
    coverImage: string;
    date: string;
    category: string;
    readTime: string;
    featured: boolean;
    order: number;
}

const BlogPostSchema: Schema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true },
    authorRole: { type: String, required: true },
    authorImage: { type: String, required: true },
    coverImage: { type: String, required: true },
    date: { type: String, required: true },
    category: { type: String, required: true },
    readTime: { type: String, required: true },
    featured: { type: Boolean, default: false },
    order: { type: Number, default: 0 },
});

export default mongoose.models.BlogPost || mongoose.model<IBlogPost>('BlogPost', BlogPostSchema);
