import mongoose, { Schema, Document } from 'mongoose';

export interface IHistoryStep extends Document {
    year: string;
    title: string;
    description: string;
    order: number;
}

const HistoryStepSchema: Schema = new Schema({
    year: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    order: { type: Number, default: 0 },
});

export default mongoose.models.HistoryStep || mongoose.model<IHistoryStep>('HistoryStep', HistoryStepSchema);
