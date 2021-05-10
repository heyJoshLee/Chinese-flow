import express from 'express';
import { createUser, getUsers, getUser, updateUser, updateLoggedInUser } from '../controllers/users.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/:id', auth, getUser);
router.patch('/', auth, updateLoggedInUser);
router.post('/', createUser);

export default router;