import { Request, Response } from 'express';
import Application from '../models/application';

// Create a new application
export const createApplication = async (req: Request, res: Response): Promise<void> => {
    try {
        const application = new Application(req.body);
        await application.save();
        res.status(201).json(application);
    } catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        } else {
            res.status(400).json({ error: 'Unknown error occurred' });
        }
    }
};

// Get applications for a specific student
export const getApplicationsByStudent = async (req: Request, res: Response): Promise<void> => {
    const applications = await Application.find({ student_id: req.params.studentId });
    res.json(applications);
};
