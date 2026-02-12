import mongoose, { Schema, Document } from 'mongoose';

export interface IResource extends Document {
    title: string;
    description: string;
    type: 'Whitepaper' | 'Guide' | 'Video';
    category: string;
    order: number;
}

const ResourceSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, enum: ['Whitepaper', 'Guide', 'Video'], required: true },
    category: { type: String, required: true },
    order: { type: Number, default: 0 },
});

export default mongoose.models.Resource || mongoose.model<IResource>('Resource', ResourceSchema);
