import { Router } from 'express';
const router = Router();

import Routes from "./routes/index";

router.use('/pub/proxy/',Routes);

export default router; 