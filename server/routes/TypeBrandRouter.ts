import Router from 'express'
import BrandTypeController from '../api/controllers/dependencies/Brand_Type.controller'
const router = Router()

router.post('/create_type_brand', BrandTypeController.new_type_to_brand)
router.post('/create_brand_type', BrandTypeController.new_brand_to_type)
router.post('/type_to_brand', BrandTypeController.type_to_brand)
router.post('/brand_to_type', BrandTypeController.brand_to_type)

router.get('/type_brand', BrandTypeController.getAllTypesAndBrand)
router.get('/brand_type', BrandTypeController.getAllBrandsAndTypes)

export default router