import mongoose, { Schema, Document } from 'mongoose';

export interface ITestimonial extends Document {
    quote: string;
    author: string;
    role: string;
    image: string;
    order: number;
}

const TestimonialSchema: Schema = new Schema({
    quote: { type: String, required: true },
    author: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true },
    order: { type: Number, default: 0 },
});

export default mongoose.models.Testimonial || mongoose.model<ITestimonial>('Testimonial', TestimonialSchema);
