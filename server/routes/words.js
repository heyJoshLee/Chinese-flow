import express from 'express';
import { getWords, createWord, getWord, deleteWord, updateWord } from '../controllers/words.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true});

router.get('/', getWords);
router.get('/:id', getWord);
router.post('/', createWord);
router.delete('/:id', deleteWord);
router.patch('/:id', updateWord);

export default router;