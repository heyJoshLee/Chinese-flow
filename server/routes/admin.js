import express from 'express';
import { customScript } from '../controllers/admin.js';

const router = express.Router();

router.get('/customScript', customScript);

export default router;