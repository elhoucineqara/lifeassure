import mongoose, { Schema, Document } from 'mongoose';

export interface IFAQ extends Document {
    question: string;
    answer: string;
    category: string;
    order: number;
}

const FAQSchema: Schema = new Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    category: { type: String, default: 'General' },
    order: { type: Number, default: 0 },
});

export default mongoose.models.FAQ || mongoose.model<IFAQ>('FAQ', FAQSchema);
