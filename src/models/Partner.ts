import mongoose, { Schema, Document } from 'mongoose';

export interface IPartner extends Document {
    name: string;
    logoUrl: string;
    order: number;
}

const PartnerSchema: Schema = new Schema({
    name: { type: String, required: true },
    logoUrl: { type: String, required: true },
    order: { type: Number, default: 0 },
});

export default mongoose.models.Partner || mongoose.model<IPartner>('Partner', PartnerSchema);
