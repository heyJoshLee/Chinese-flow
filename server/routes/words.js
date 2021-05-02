import express from 'express';
import { getWords, createWord } from '../controllers/words.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true});

router.get('/', getWords);
// router.get('/:id', getWord);
router.post('/', createWord);
// router.delete('/:id', auth, deleteWord);
// router.patch('/:id', auth, updateWord);

export default router;