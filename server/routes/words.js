import express from 'express';
import { getWords, createWord, getWord, deleteWord, updateWord, getWordBySimplified, getUniqueWords } from '../controllers/words.js';
import auth from '../middleware/auth.js';

const router = express.Router({ mergeParams: true});

router.get('/', getWords);
router.post('/getUniqueWords', getUniqueWords)
router.get('/:id', getWord);
router.get('/getWordBySimplified/:character', getWordBySimplified)
router.post('/', createWord);
router.delete('/:id', deleteWord);
router.patch('/:id', updateWord);

export default router;