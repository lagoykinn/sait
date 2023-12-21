import Router from 'express'
import SeasonController from '../api/controllers/Season.controller'
const router = Router()

router.post('/create', SeasonController.create)
router.get('/getAll', SeasonController.getAll)
router.get('/getOne', SeasonController.getOne)

export default router