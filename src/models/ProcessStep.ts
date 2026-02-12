import mongoose, { Schema, Document } from 'mongoose';

export interface IProcessStep extends Document {
    title: string;
    description: string;
    icon: string;
    order: number;
}

const ProcessStepSchema: Schema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    order: { type: Number, default: 0 },
});

export default mongoose.models.ProcessStep || mongoose.model<IProcessStep>('ProcessStep', ProcessStepSchema);
