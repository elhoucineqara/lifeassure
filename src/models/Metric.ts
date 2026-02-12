import mongoose, { Schema, Document } from 'mongoose';

export interface IMetric extends Document {
    label: string;
    value: string;
    order: number;
}

const MetricSchema: Schema = new Schema({
    label: { type: String, required: true },
    value: { type: String, required: true },
    order: { type: Number, default: 0 },
});

export default mongoose.models.Metric || mongoose.model<IMetric>('Metric', MetricSchema);
