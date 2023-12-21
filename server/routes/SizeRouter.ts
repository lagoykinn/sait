import Router from 'express'
import SizeController from '../api/controllers/Size.controller'
const router = Router()

router.post('/create', SizeController.create)
router.get('/getOne', SizeController.getOne)
router.get('/getAll', SizeController.getAll)

export default router