import mongoose, { Schema, Document } from 'mongoose';

export interface ISolution extends Document {
    title: string;
    description: string;
    icon: string; // Lucide icon name
    features?: string[];
    category: string;
    order: number;
}

const SolutionSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    features: [{ type: String }],
    category: { type: String, default: 'General' },
    order: { type: Number, default: 0 },
});

export default mongoose.models.Solution || mongoose.model<ISolution>('Solution', SolutionSchema);
