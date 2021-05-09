import express from 'express';
import { addCard } from '../controllers/cards.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/add', auth, addCard);

export default router;