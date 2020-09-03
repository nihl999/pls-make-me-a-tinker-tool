import express from 'express';
import controller from '../controllers/ToolBuilder';
const router = express.Router();

router.get('/', controller);

export default router;
