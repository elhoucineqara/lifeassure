import mongoose, { Schema, Document } from 'mongoose';

export interface IFeature extends Document {
    title: string;
    description: string;
    icon: string;
    order: number;
}

const FeatureSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    order: { type: Number, default: 0 },
});

export default mongoose.models.Feature || mongoose.model<IFeature>('Feature', FeatureSchema);
