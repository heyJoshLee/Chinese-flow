import express from 'express';
import { getResources, createResource, getResource, deleteResource, updateResource } from '../controllers/resources.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/', getResources);
router.get('/:id', getResource);
router.post('/', createResource);
router.delete('/:id', deleteResource);
router.patch('/:id', updateResource);

export default router;