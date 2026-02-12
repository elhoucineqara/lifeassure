import mongoose, { Schema, Document } from 'mongoose';

export interface IEnrollment extends Document {
    fullName: string;
    email: string;
    jurisdiction: string;
    portfolioScope: string;
    status: 'pending' | 'reviewed' | 'contacted';
    createdAt: Date;
}

const EnrollmentSchema: Schema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    jurisdiction: { type: String, required: true },
    portfolioScope: { type: String, required: true },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'contacted'],
        default: 'pending'
    },
    createdAt: { type: Date, default: Date.now },
});

// Avoid re-declaring the model if it already exists (Next.js hot-reloading)
export default mongoose.models.Enrollment || mongoose.model<IEnrollment>('Enrollment', EnrollmentSchema);
