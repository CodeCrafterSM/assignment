import mongoose, { Document, Schema } from 'mongoose';

// Student interface for type checking
interface IStudent extends Document {
    name: string;
    dob: Date;
    mobile_number: string;
    email: string;
    toefl_score?: number;
    gre_score?: number;
    academic_scores: {
        tenth_percent: number;
        twelfth_percent: number;
        graduation_percent?: number;
    };
    target: {
        country: string;
        degree: string;
        course: string;
    };
}

const studentSchema: Schema = new mongoose.Schema({
    name: { type: String, required: true },
    dob: { type: Date, required: true },
    mobile_number: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    toefl_score: Number,
    gre_score: Number,
    academic_scores: {
        tenth_percent: Number,
        twelfth_percent: Number,
        graduation_percent: Number,
    },
    target: {
        country: String,
        degree: String,
        course: String,
    },
});

const Student = mongoose.model<IStudent>('Student', studentSchema);
export default Student;
