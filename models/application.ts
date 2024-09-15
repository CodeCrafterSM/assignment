import mongoose, { Document, Schema } from 'mongoose';

interface IApplication extends Document {
    student_id: mongoose.Schema.Types.ObjectId;
    // consultant_id: mongoose.Schema.Types.ObjectId;
    university: {
        name: string;
        country: string;
        course: string;
        degree: string;
    };
    documents_required: string[];
    application_status: 'pending' | 'submitted' | 'accepted' | 'rejected';
    applied_at: Date;
}

const applicationSchema: Schema = new mongoose.Schema({
    student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
    // consultant_id: mongoose.Schema.Types.ObjectId,
    university: {
        name: { type: String, required: true },
        country: String,
        course: String,
        degree: String,
    },
    documents_required: [String],
    application_status: {
        type: String,
        enum: ['pending', 'submitted', 'accepted', 'rejected'],
        default: 'pending',
    },
    applied_at: { type: Date, default: Date.now },
});

const Application = mongoose.model<IApplication>('Application', applicationSchema);
export default Application;
