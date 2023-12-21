import Router from 'express'
import BrandController from '../api/controllers/Brand.controller'
const router = Router()

router.post('/create_brand', BrandController.create)
router.get('/get_brands', BrandController.getAll)
router.get('/brand', BrandController.getOne)

export default router