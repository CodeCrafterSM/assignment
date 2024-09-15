import express from 'express';
import { createStudent, getAllStudents } from '../controllers/studentController';

const router = express.Router();

// Define routes
router.post('/students', createStudent);
router.get('/students', getAllStudents);

export default router;
