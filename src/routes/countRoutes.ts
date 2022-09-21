import { Router } from 'express';
const router = Router();
import {
  getCountValueController,
  postCountValueController,
} from '../controllers/countController';

router
  .route('/count_value')
  .get([getCountValueController])
  .post([postCountValueController]);

export default router;
