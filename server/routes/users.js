import express from 'express';
import { createUser, getUsers, getUser, updateUser } from '../controllers/users.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', auth, getUser);
router.patch('/:id', auth, updateUser);
router.post('/', createUser);

export default router;