import Router from 'express'
import ShoesController from '../api/controllers/Shoes.controller'
const router = Router()

router.post('/create', ShoesController.createNew)
router.get('/getOne', ShoesController.getOne)
router.get('/getAll', ShoesController.getAll)

export default router