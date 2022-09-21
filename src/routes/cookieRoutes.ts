import { Router } from 'express';
const router = Router();
import { getCookieIdController } from '../controllers/cookieController';

router.route('/cookie_id').get([getCookieIdController]);

export default router;
