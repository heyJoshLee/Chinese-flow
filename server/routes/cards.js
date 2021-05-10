import express from 'express';
import { addCard, removeCard } from '../controllers/cards.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/add', auth, addCard);
router.delete('/:wordId/remove', auth, removeCard);

export default router;