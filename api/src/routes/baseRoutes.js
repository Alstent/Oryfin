import express from 'express'
import { logController } from '../controllers/baseController.js'

const router = express.Router();

router.get('/', logController);

export default router;