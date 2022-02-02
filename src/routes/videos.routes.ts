import { Router } from 'express';
import * as videoCtrl from './videos.controller';

const router = Router();

router.get('/videos', videoCtrl.getVideos);
router.get('/video/:id', videoCtrl.getVideo);
router.post('/video', videoCtrl.createVideo);
router.delete('/video/:id', videoCtrl.removeVideo);
router.put('/video/:id', videoCtrl.updateVideo);

export default router;
