import express from 'express';
import { createApplication, getApplicationsByStudent } from '../controllers/applicationController';

const router = express.Router();

// Define routes
router.post('/applications', createApplication);
router.get('/applications/:studentId', getApplicationsByStudent);

export default router;
