import express from 'express';
import { getWords } from '../controllers/main.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/words', auth, getWords);

export default router;