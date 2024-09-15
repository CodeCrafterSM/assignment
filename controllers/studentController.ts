import { Request, Response } from 'express';
import Student from '../models/student';

// Create a new student
export const createStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    } catch (err) {
        if (err instanceof Error) {
            // Here, TypeScript now knows err is of type Error
            res.status(400).json({ error: err.message });
        } else {
            // Handle cases where err is not an instance of Error (just in case)
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};

// Get all students
export const getAllStudents = async (req: Request, res: Response): Promise<void> => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        } else {
            res.status(500).json({ error: 'Unknown error occurred' });
        }
    }
};
